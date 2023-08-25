---
emoji: 😀
title: velog terraform 마이그레이션 테스트
date: '2023-08-25 00:00:00'
author: 정욱현
tags: terraform
categories: terraform
---

## 테라폼이 먼데이



### 테라폼을 만났을때

![](https://velog.velcdn.com/images/jtret2424/post/2882317b-5e80-47cf-8e9e-d984da1194f9/image.gif)



내가 AWS SA 포지션으로 입사한지 얼마 안되었을때 Terraform를 알게 되었다.
코드로 인프라를 관리한다고 하더라..

근데 본인은 코드(Code)와 친한 편이 아니라 간편하게 UI에서 "클릭"으로 만드는게 더 쉬웠고
사실 AWS UI,CLI 등 일단 있는거 부터 잘 다뤄야 코드로 표현해서 구축 하는게 맞다고 봤다..
~~(사실 어려워서 배우기 힘들었던건 비밀..)~~

### 정의

테라폼이란 IaC(Infrastructure as Code)로 코드로 인프라를 관리하고 프로비저닝한다고 한다.
AWS뿐만이 아니라 GCP,Azure,Kubenetes 등 여러 인프라를 코드로 구축 할 수 있다.

우리가 EC2를 만들기 위해 VPC, Subnet, IGW, NAT Gateway, Security Groups 등등 클릭하면서 설정해야하는 방면 Terraform에서는 간단한 코드로 배포 할 수 있다.

예제코드 (VPC 생성)
```js
resource "aws_vpc" "vpc" {
	cidr_block = "10.0.0.0/16"
	enable_dns_hostnames = true

	tags = {
    	Name = vpc
    }
}
```

Terraform Code로 배포 "만" 하고 끝나는 것이 아닌 똑같은 코드로 재활용 및 운영이 가능하다.
만약 SA가 다른 프로젝트로 투입하게 된다면 기본적인 구조의 코드를 들고 다닌다면 언제든지 코드 재활용해서 쉽게 배포 할 수 있는 장점이 있다.

### 목표
Terraform Code로 AWS를 간단하게 구축 할 수 있는 가이드 문서를 만드려고 한다.

![](https://velog.velcdn.com/images/jtret2424/post/8af64f68-6466-4b60-987c-f1c98c0a3b4e/image.gif)
~~아무튼.. 만들고 동작하니까 괜찮지 않을까..?~~