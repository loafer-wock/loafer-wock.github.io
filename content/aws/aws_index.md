---
emoji: 😀
title: AWS EC2 인스턴스에 Nvidia Driver 설치하기
date: '2023-08-27 00:00:00'
author: 정욱현
tags: AWS
categories: AWS
---


> 해당 문서에 설치 방법은 "Redhat 8.4"버전에서 진행하였습니다.

---
## 관련 Document

https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/install-nvidia-driver.html

https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/optimize_gpu.html

---

> 1. G타입은 인스턴스 생성하기 전 vCPU 리밋해제가 필요하다. 
> M,C등 타입과 다르게 Service Quotas에서 Running On-Demand G and VT instances 리밋 해제

> 2. g4dn 인스턴스 타입은 서울 리전 가용 영역 중 ap-northeast-2b  의 경우 간혹 인스턴스 생성이 안되는 경우가 있다고 한다. (시도하다보면 자리나서 생성 가능하다고 함)

> 3. 보통의 경우 그래픽 드라이버가 설치 된 AMI 이미지 사용하면 되지만 요구사항으로 인해 특정 버전만 사용하는 경우 수동 설치 해야함

---
## 1. 그래픽 드라이버 설치 전 Package 설치

### 1-1. display ```configuration``` 확인

> ```configuration:latency=0```이 아닌 `nouveau` 포함되어 있다면 `BlockList` 등록 필요


```
#lshw는 기본적으로 설치되어 있지만 없다면 아래 명령어로 설치
#sudo yum install lshw 

lshw -numeric -C display

[sysadmin@ip-10-200-1-172 ~]$ lshw -numeric -C display
WARNING: you should run this program as super-user.
  *-display:0 UNCLAIMED
       ~~~~
  *-display:1
       description: 3D controller
       product: TU104GL [Tesla T4] [10DE:1EB8]
       vendor: NVIDIA Corporation [10DE]
       physical id: 1e
       bus info: pci@0000:00:1e.0
       version: a1
       width: 64 bits
       clock: 33MHz
       capabilities: bus_master cap_list
       configuration:latency=0 #<< 이 부분이 nouveau 포함되어 있다면 "disable 필요" 
       resources: iomemory:40-3f iomemory:40-3f irq:10 memory:fd000000-fdffffff memory:440000000-44fffffff memory:450000000-451ffffff
```
---
```
#nouveau driver disable 방법

1. /etc/default/grep 수정
---
sudo vi /etc/default/grub

GRUB_TIMEOUT=1
GRUB_DISTRIBUTOR="$(sed 's, release .*$,,g' /etc/system-release)"
GRUB_DEFAULT=saved
GRUB_DISABLE_SUBMENU=true
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 console=tty0 net.ifnames=0 rd.blacklist=nouveau nvme_core.io_timeout=4294967295 crashkernel=auto"
GRUB_DISABLE_RECOVERY="true"
GRUB_ENABLE_BLSCFG=true
---

GRUB_CMDLINE_LINUX구분"console=ttyS~~" 안 끝에 noveau.modeset=0추가 
```
---

### 1-2. 그래픽 드라이버 설치 전에 필요한 패키지 `yum install`

```
sudo yum install gcc -y
sudo yum install perl -y
sudo yum install kernel-headers -y
sudo yum install vulkan-loader -y
sudo yum install pkg-config xorg-dev -y
sudo yum group install -y "Development Tools"
sudo yum install kernel-devel-$(uname -r) kernel-headers-$(uname -r)
```

### 1-3. Xorg server 중지
> xorg를 중지하지 않으면 설치 진행 안됨

```
sudo systemctl isolate multi-user.target
```
---
## 2. 그래픽 드라이버 다운로드

### 2-1. NVIDIA 그래픽 드라이버 다운로드 센터
`Product Type, Series`등 인스턴스가 지원하는 드라이버 타입에 맞춰 설정 후 다운로드
![](https://velog.velcdn.com/images/jtret2424/post/625b20ae-6283-448e-98bc-1bb5bb2d2b15/image.png)

```
wget https://us.download.nvidia.com/tesla/525.85.12/NVIDIA-Linux-x86_64-525.85.12.run
```
---

## 3. 설치

### 3-1. 다운로드 받은 `NVIDIA-Linux-*.run` 파일 실행
```
sudo sh NVIDIA-Linux-x86_64-525.85.12.run
```
> 실행하게 되면 로딩 이후 아래와 같은 화면이 나오는데 긍정적(Yes, Ok 등)인 말만 선택해서 진행하도록 하자

![](https://velog.velcdn.com/images/jtret2424/post/f9f8598c-13bf-4814-8217-f2ef99f20b7f/image.png)

### 3-2. 설치 확인
```
nvidia-smi

+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.85.12    Driver Version: 525.85.12    CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla T4            Off  | 00000000:00:1E.0 Off |                    0 |
| N/A   56C    P0    28W /  70W |      2MiB / 15360MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```


```toc
```