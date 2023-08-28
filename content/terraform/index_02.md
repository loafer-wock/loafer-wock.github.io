---
emoji: 😀
title: 01. Terraform - 동작 과정
date: '2023-08-25 01:00:00'
author: 정욱현
tags: terraform
categories: terraform
---



## Terraform 동작하는 과정

 Terraform은 사용자가 작성한 코드를 각 CSP(Cloud Solution Provide)들의 API가 읽을 수 있도록 변환하고 코드에 이상이 없는지 계획를 실행하고 실제 사용자 계정에 인프라를 적용을 한다.

>여기서 중요한 점은 API에 접근 할 수 있는지가 중요하다.
간혹 Terraform개발 서버(?)를 Cloud Private 환경에 구성했을 경우 Init과정이 되지 않는다. (Plan과 Apply는 된다)

---

### - Flow

[](https://velog.velcdn.com/images/jtret2424/post/314311aa-526e-4dfb-84c4-aaeafe92f6de/image.png)

[](https://velog.velcdn.com/images/jtret2424/post/80d5d6c3-378d-481f-ace7-494c5177a19a/image.png)

![](https://velog.velcdn.com/images/jtret2424/post/8b55ef91-c33e-482a-ac90-269d7fbd1718/image.png)

코드를 작성**(Write)**하고 terraform이 디렉토리를 보고 초기화**(Init)**하고 계획을 실행**(Plan)**하고 인프라 적용**(Apply)**한다.

---
### 1-1. Write(작성)


실제 프로비저닝 하기 위해서는 코드 작성이 필요하고 Terraform의 특징으로는 Yaml과 같이 ```Key```와 ```Value``` 형태라서 작성하기 편하다. 

아래 코드만 봐도 ```Key```와 ```Value``` 형태로 이루어져 있어서 한눈에 알아볼수 있다.

~~(사실 module, variable, locals 등 알게 될텐데 코드랑 친하지 않은 사람들이라면 "엥?ㅇㅅㅇ" 할 수도 있다... 나는 module에서 힘들었다..)~~


```
#VPC 생성 예제

provider "aws" {
  region = "ap-northeast-2"
}

resource "aws_vpc" "vpc" {
    cidr_block = "10.150.0.0/16"
    
    tags = {
        Name = "my-test-vpc"
    }
}
```
>Terraform은 작성한 코드를 실행할때에 만들어지는 리소스의 순서가 작성한 순서가 아닌 별도의 방식이 있다.
>
>예로 Securtiy groups이 먼저 만들어지고 EC2생성 된다.
이렇게 우리가 코드를 작성할때 고려하지 않아도 Terraform은 친절하게 알아서 순서대로 생성이 된다.

---

### 1-2. Init(초기화)

Terraform에서는 ```inti``` 를 초기화 과정이라고 한다.

우리는 write 과정에서 코드를 작성하고 ```terraform init``` 명령을 통해 초기화를 해야한다.

여기서 초기화란, Terraform 구성 파일이 작업된 디렉토리 다시 읽는 과정이고
디렉토리에 있는 ```.tf``` 파일을 로드하고 ```provider```와 ```module```을 식별하고 다운로드 진행한다.

필수로 ```plugin 설치```, ```Module 설치```, ```Backend 초기화``` 과정이 있다면 init 과정이 필요하다.


![](https://velog.velcdn.com/images/jtret2424/post/130b9e5f-b706-446c-bb44-65d8a5366f79/image.gif)
```init``` 과정이 완료가 되면 코드가 작성된 디렉토리에 ```.terraform.lock.hcl``` 파일이 만들어 진다.


---

### 1-3. Plan(계획)

```plan```은 작성한 코드를 적용할 인프라에 ```계획 실행```하는 과정이며 실제로 어떤 리소스들이 ```생성, 변경, 삭제```가 되는지 확인하는 절차다.


![](https://velog.velcdn.com/images/jtret2424/post/270b0ffb-8c9f-4654-98f3-ebe2d46a828d/image.png)

이렇게 ```terraform plan``` 명령어를 통해 Plan의 정보를 확인 할 수 있고
1개의 리소스가 생성이 되고, 0개가 변경이 되고, 0개가 삭제된다 라는 것을 확인 할 수 있습니다.
(```Plan : 1 to add, 0 to change, 0 to destroy```)

![](https://velog.velcdn.com/images/jtret2424/post/0e93249b-9092-4179-929b-4806602863cd/image.png)

사실 ```plan```를 하지 않고 바로 ```apply```를 진행할 수 있습니다만.. 위 처럼 사람은 실수를 하기에 ```plan```은 중요합니다.

그리고 terraform에서는 어디가 잘못되었는지 확실히 알려주기 때문에 에러로 고생할 일이 적습니다.
~~(적다고 했지 없다고 하진 않았따...)~~

---

### 1-4. Apply(적용)

```apply```는 코드를 실제 인프라에 적용하기 위해 사용합니다.

우리는 이전에 ```plan```를 통해 계획을 실행하였으며 실행 과정 중 코드가 있는 디렉토리에 ```terraform``` 디렉토리가 생성되었습니다. 

![](https://velog.velcdn.com/images/jtret2424/post/42be98d7-b30c-4f23-bed8-5c650b1004e9/image.png)

저장된 ```terraform``` 디렉토리안에는 CSP API와 통신 가능하도록 만들어진 디렉토리가 있으며 구성된 파일을 가지고 적용하게됩니다.

![](https://velog.velcdn.com/images/jtret2424/post/9d8f6ca4-715f-4e96-a35a-ef0c92e6b70c/image.png)

```terraform apply``` 명령어로 적용 시 ```Enter a value : ```   문구가 발생하며 확인 단계가 필요합니다.
다시 한번 적용 할껀지 물어봅니다.  ```yes```를 입력하게 되면 생성되는 리소스의 ```ID``` 가 출력되면서 ```Apply complete! Resources: 1 added, 0 changed, 0 destroyed.``` 적용 완료되었고 몇개의 리소스가 생성, 변경, 삭제 되었는지를 알 수 있습니다.

이렇게 ```apply```를 하게되면 코드가 있던 디렉토리에는 ```terraform.tfstate```, ```terraform.tfstate.backup``` 파일이 생성되었습니다.

```terrafrom.tfstate```파일은 ```apply``` 직후의 인프라 상태를 저장해둔 파일이며 ```terrafrom.tfstate.backup```파일은 ```apply``` 이전의 상태를 저장해둔 파일입니다.

---

### 1-5. Destroy

```destroy```는 우리가 코드로 생성한 인프라를 삭제~~(뿌셔뿌셔!)~~하기 위해 사용합니다.

![](https://velog.velcdn.com/images/jtret2424/post/7f4e1f21-5317-4f43-9569-6215e4616a61/image.png)

```terraform destroy```를 통해 삭제 할 수 있으며 ```plan```과 ```apply```처럼 어떤 리소스가 삭제되는지,
정말로 삭제 할 것인지(?) 물어보게 됩니다.

---

### - End..

이렇게 우리는 코드 작성 단계부터 삭제 단계까지의 Flow를 알아봤다..

앞으로 코드를 작성하면서 Terraform document을 많이 보게 될텐데 자세히 보면 엄청난 팁이 숨겨져 있다!


그럼.. 테라폼 고수가 되는 날까지.. ~~아디오스..~~

![](https://velog.velcdn.com/images/jtret2424/post/c3713d77-cdf8-4542-8a34-1d418dd48990/image.gif)

Terraform languge document : https://www.terraform.io/language

---

**자문과 많은 도움을 주신 vincent님께 감사드립니다. ( _ _ ) 
**

```toc
```