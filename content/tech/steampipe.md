---
emoji: 😀
title: AWS Resource Management "Steampipe" Tool 활용하기
date: '2023-08-26 00:00:00'
author: 정욱현
tags: steampipe
categories: Tech
---
![](https://velog.velcdn.com/images/jtret2424/post/99667634-0642-4cd2-9f44-9019bb0b7a3e/image.png)

---
## 1. Steampipe?

Steampipe는 클라우드 리소스들을 ``DB Query`` 형태로 조회 할 수 있고 Steampipe도 마찬가지로 여러 CSP 서비스들(AWS,GCP,Azure 등)에서도 사용이 가능하다. 

Steampipe는 ```gRPC``` 형태로 메시지를 각 ```Plugin```을 이용해 클라우드와 통신을 하기에 속도가 빠른 장점이 있다!

![](https://velog.velcdn.com/images/jtret2424/post/6ec34275-f57a-4276-b73b-0f8a356a43a0/image.png)

---
## 2. 일단 사용해보자!

직접 Query문를 실행해보고 경험하지 않으면 자세히 모르니 일단 설치하고 실행해보자!!

### 2-1. Steampipe 설치
> Steampipe Install Docs : https://steampipe.io/downloads

#### 2-2. Linux OS 환경의 Install 

1. Steampipe Install
```
$ sudo /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/turbot/steampipe/main/install.sh)"

```

2. Steampipe AWS Plugin Install 
```
$ steampip plugin install aws
```  

---
### 2-3. AWS Configure 설정
```steampipe```사용하기 전에 ```aws configure``` 설정을 하자
> 사용할 IAM Key는 ReadOnlyAccess Policy를 가지고 있는 Key를 사용하자!

---
### 2-4. Query 해보기

생성한 ```VPC Name Tag```를 가져와보자!

먼저 ```steampipe query``` 에 접속을 하고 쓸수 있는 ```tables``` 목록을 보자
```
$ steampipe query

> .tables
==> aws
```
![](https://velog.velcdn.com/images/jtret2424/post/fa103279-a925-40c5-81f5-9cd6a052502f/image.png)
```steampipe query```에서 ```.tables``` 명령어를 치면 ```AWS Table```를 확인 할 수 있다.
이 ```Table```를 활용해서 VPC 목록을 조회해보자!

### 2-5. .inspect [Tables Name]

아래 명령을 사용하면 ```aws_vpc```에서 사용가능한 ```column``` 확인이 가능하다!

```
.inspect aws_vpc				
```
![](https://velog.velcdn.com/images/jtret2424/post/a653822d-cb7a-4aec-aba6-1c3f54f43f8f/image.png)

> ```column```에서 ```type```별로 표현형태가 다르다.
예로, account_id는 text 형태이지만, tags는 json 형태다.



---
### 2-6. select [column] from [table]

```
select
	tags
from
	aws_vpc
```

![](https://velog.velcdn.com/images/jtret2424/post/7e66961f-ce59-4125-8417-45827b85c972/image.png)



### 2-6. Instance 

생성된 EC2의 ```ID```, ```Type```, ```IP```, ```Tags```를 가져와보자.

```
> select 
	instance_id,
	instance_type,
	private_ip_address,tags 
from 
	aws_ec2_instance
```
![](https://velog.velcdn.com/images/jtret2424/post/e542d3c4-47f5-4b63-b82d-cbc15c0aa886/image.png)

---


## 3. 특정 Type 값만 가져오기

EC2의 ```Type```값을 가지고 있는 목록 불러와보자!
```
> select 
	instance_id,
	instance_type,
	private_ip_address,
	tags 
from 
	aws_ec2_instance 
where 
	instance_type='c5.xlarge'
```

![](https://velog.velcdn.com/images/jtret2424/post/fbfa2487-1181-4864-9dee-7c60c41c2bc3/image.png)

---

```toc
```