---
emoji: 😀
title: 03. Terraform - AWS VPC, Subnet 생성
date: '2023-08-25 00:00:00'
author: 정욱현
tags: terraform
categories: terraform
---

### Terraform

앞으로 우리가 Terraform으로 만들 인프라 아키텍처를 참고해서 코드로 구현하는 걸 목표!!!
![](https://velog.velcdn.com/images/jtret2424/post/e43d3f89-3358-4bfd-a28e-56407ee99ae0/image.png)


또 한, Terraform AWS Resource Document를 활용하여 resource에 포함된 옵션들을 살펴보자!
~~(앞으로 이 Document랑 친해져야합니다..)~~

> https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources

![](https://velog.velcdn.com/images/jtret2424/post/d93e65f3-4de0-4f06-97b8-a8cb6102db4d/image.png)


---
### 3-0. 디렉토리 생성
```environment``` 디렉토리 밑에 ```terraform``` 디렉토리를 만들 후 ```network.tf``` 파일을 만듭니다!

![](https://velog.velcdn.com/images/jtret2424/post/7ad967b1-04af-4dca-9d67-4ed05f9dab87/image.png)



### 3-1. Provider.tf 설정

리소스를 생성하기 위해서는 IAM Key가 필요하다.
Terraform에서는 Key를 ```provider.tf``` 파일에 ```하드코딩```하는 방법도 있다.

위에서 만든 ```terraform``` 디렉토리 아래 ```provider.tf``` 파일을 만들어서 Key를 넣어주자

```
provider "aws" {
    access_key  = "[ACCESS KEY]"
    secret_key  = "[SECRET_KEY]"
    region      = "[REGION]"
}
```



### 3-2. VPC 생성
VPC에 생성에 필요한 소스는 아래 Terraform  document 에서 볼 수 있다.

> https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/vpc

```
resource "aws_vpc" "vpc" {
    cidr_block = "192.168.0.0/24"
    enable_dns_hostnames = true
    tags = {
        Name = "vpc-terraform"
    }
}
```

```terraform init``` 후 ```plan```을 실행해보고 내가 만들고 싶은 VPC가 정상적으로 동작하는지 확인해보자!
문제가 없다면 ```terraform apply```를 통해 적용해보자! 

![](https://velog.velcdn.com/images/jtret2424/post/b619a6ef-9f3e-4b1c-a51f-ef851497f77c/image.png)

VPC가 생성된 것을 볼수가 있다!
이제 Subnet를 생성해보자





### 3-3. Subnet 생성

Subnet은 ```VPC Resource```를 만든 ```network.tf```안에 아래와 같이 작성해보자

```
### VPC ###
resource "aws_vpc" "vpc" {
    cidr_block = "192.168.0.0/24"
    enable_dns_hostnames = true
    tags = {
        Name = "vpc-terraform"
    }
}

### Subnet ###
resource "aws_subnet" "dmz_subnet_2a" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.0/27"
	availability_zone = "ap-northeast-2a"
	tags = {
		Name = "sub-terraform-dmz-2a"
	}
}

resource "aws_subnet" "dmz_subnet_2c" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.32/27"
	availability_zone = "ap-northeast-2c"
	tags = {
		Name = "sub-terraform-dmz-2c"
	}
}

resource "aws_subnet" "app_subnet_2a" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.64/26"
	availability_zone = "ap-northeast-2a"
	tags = {
		Name = "sub-terraform-app-2a"
	}
}

resource "aws_subnet" "app_subnet_2c" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.128/26"
	availability_zone = "ap-northeast-2c"
	tags = {
		Name = "sub-terraform-app-2c"
	}
}

resource "aws_subnet" "db_subnet_2a" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.192/27"
	availability_zone = "ap-northeast-2a"
	tags = {
		Name = "sub-terraform-db-2a"
	}
}

resource "aws_subnet" "db_subnet_2c" {
	vpc_id = aws_vpc.vpc.id
	cidr_block = "192.168.0.224/27"
	availability_zone = "ap-northeast-2c"
	tags = {
		Name = "sub-terraform-app-2c"
	}
}
```

여기서 ```aws_subnet``` 를 생성할땐 ```vpc_id```값이 필요한데, VPC를 생성하고 AWS Web Console 화면에서 나온 VPC ID를 하드코딩 할 수 있지만, 매번 만들때마다 Code 수정이 필요한 작업이 필요하다, 

```Terraform.tfstate```에 보면 VPC ID가 저장되는데  ```aws_vpc.vpc.id```로 VPC ID를 가져 올 수 있다. 

자, 이제 apply를 하면 Subnet 생성된걸 확인 할 수 있다.

![](https://velog.velcdn.com/images/jtret2424/post/aba9df49-fd88-4956-8e1c-28a4745c22de/image.png)

---
간단하게 VPC와 Subnet를 만드는걸 해봤지만, 이 글을 읽는 사람이라면
VPC와 Subnet으로 끝나는 것이 아닌 AWS VPC Network 기본인 항목들을 만들어서 배포해봐야한다. ```IGW```, ```NAT```, ```RouteTable```, ```NACL``` 등 관리해야하는 리소스들이 있으니 한번 만들어 봤으면 좋겠다!!

다음 편은 위에 만든 Code를 Module화 하는 것이다! 

```toc
```