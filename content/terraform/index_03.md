---
emoji: 😀
title: 02. Terraform - 개발환경 구축하기
date: '2023-08-25 02:00:00'
author: 정욱현
tags: terraform
categories: terraform
---


## 구성 전에..

Terraform를 사용하기전에 개발환경부터 구축해야한다.
보통 로컬PC에 구성해서 사용하지만, 본인은 ```AWS Cloud9```를 활용해서 개발서버(?)를 구성했다.
```Access key```, ```Secret key```의 유출 방지 및 코드 저장용으로 사용하고 있다!

Cloud9도 EC2이기 때문에 Role부여해서 key를 하드코딩하지 않고 사용 할 수 있다!

앞으로는 ```AWS Cloud9``` 기준으로 작성하려고 한다!
>AWS Cloud9란?
>AWS 서비스로 제공되는 Web IDE이다. 기본적으로 AWS CLI, Python, Node.js 등의 개발언어가 기본제공(?)된다.
>
>AWS Cloud9 소개 : https://aws.amazon.com/ko/cloud9/

---
## 2-0. AWS Cloud9 구축 

### 2-1. AWS Cloud9 구축하기

AWS Console에 Login 후에 ```Cloud9``` 검색하고 서비스에 들어간다.

![](https://velog.velcdn.com/images/jtret2424/post/2c6036cb-4814-4f77-8215-c020c5200069/image.png)


```cloud9``` 서비스에 접근하면 오른쪽 ```Create environment``` 클릭하자

![](https://velog.velcdn.com/images/jtret2424/post/8b2a9bba-928d-49d5-aebb-3ecf1ee44ba1/image.png)


환경의 이름과 설명을 넣어주는데 내가 원하는대로 넣어준 후 ```Naxt step```

![](https://velog.velcdn.com/images/jtret2424/post/11ce9d1b-b465-4f7d-8917-73adb73ade52/image.png)


다음으로 넘어가게 된다면 ```configure settings```가 나오는데 아래와 같이 셋팅하고 ```Next step``` 넘어가서 생성하자.

-> 요약 : EC2 인스턴스 만들고 t2.micro 사이즈, Amazon Linux 2 OS를 사용하고 30분 동안 동작이 없다면 인스턴스를 ```stop```한다. 

**단, 여기서 중요한 부분 ```Network settings (advanced)```부분이다. 당연히 EC2 인스턴스가 생성되니 VPC 안에 만들어야한다. 
이전에 VPC만든적이 없다면 ```Deault VPC```에 생성하자.**

![](https://velog.velcdn.com/images/jtret2424/post/d88b309f-9a76-4ae5-9646-32f694226a83/image.png)

그러면 자동으로 Cloud9 IDE 리다이렉트로 전환이 되고 디렉토리 및 bash shell 화면도 보이게된다!
이렇게 되면 Cloud9 구축은 완료되었다!


![](https://velog.velcdn.com/images/jtret2424/post/3589699a-64c7-4fa4-ba31-e90dd75e891c/image.png)

---
### 2-2. Terraform

자 이렇게 개발서버를 생성했는데 Terraform 셋팅을 해야죠?
우린 설치한적이 없지만, Cloud9에서는 Terraform 제공하고 있어서 별도 설치가 필요없습니다!! ~~(갸꿀)~~

Shell에서 ```terraform -version``` 실행해봅시다!

![](https://velog.velcdn.com/images/jtret2424/post/7f432f7a-e0d0-42e0-9ef9-a0aacf12b429/image.png)


셋팅 끝~~~~~~!

---

```toc
```