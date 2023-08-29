---
emoji: 😀
title: Amazon EC2에 Google Authenticator MFA 설정하기
date: '2023-08-29 00:00:00'
author: 정욱현
tags: OTP
categories: Tech
---
![](https://velog.velcdn.com/images/jtret2424/post/e7d51d3a-4c8d-43e7-b02e-69f97df7f1e8/image.png)

## MFA 설정을 할 이유가 있을까?

보통 엔터프라이즈의 경우 `On-premise`와 `CSP`끼리 전용회선 혹은 Site to Site VPN 으로 내부망에서 접근이 가능하지만, 소규모의 회사는 어쩔 수 없이 Bastion를 외부에서 접근 하도록 한다면 OTP 설정이 필요해 보인다. 

당연, 외부에서 접근하도록 하여도 `화이트리스트 기반`의 `IP Allow`를 했겠지만..

그리고 Bastion는 보통 서버 접근 용도 혹은 DB 접근 용도의 `JumpHost` 역활도 하기 때문에 접근제어 솔루션이 없을 경우 2차 인증을 통해 보안 강화 할 수 있다.


---
## 1. Google OTP 설치


1-1. EC2에 Google OTP 설치하기 위해서는 `epel repo` 를 인스톨 해야합니다.

> EPEL(Extra Packages for Enterprise Linux) 아마존 리눅스에 추가 패키지 제공하는 저장소

```bash
sudo amazon-linux-extras install epel -y
```


1-2. 저장소 설치가 완료되었다면 `Google-authenticator`를 설치 합니다.

```bash
sudo yum install google-authenticator -y
```
---
## 2. MFA Code 생성 및 설정

2-1. MFA등록를 위해서는 아래 명령어를 통해 MFA설정 할 수 있다.

> MFA는 `계정별로 Code생성`되며 `리눅스 유저 계정`마다 다른`인증 Key`가 설치된다.
> 동일한 MFA를 사용을 위해서는 `.google_authenticator` 를 옮겨주어야한다.

 
2-2. 아래 명령어로 OTP Code 생성

```bash
[sysadmin@ip ~]$ google-authenticator 
```

2-3. 인증 토큰을 시간 기반으로 사용할껀지에 대한 설정
```
Do you want authentication tokens to be time-based (y/n) y
```

>2-2 이후 QR 메세지는 최초 1회만 발생하는 메세지라 잃어버리면 곤란하게될수도 있다.
>QR 이미지로 저장하는 방법 또는 제공되는 RUL 이용하자!

```bash
Warning: pasting the following URL into your browser exposes the OTP secret to Google:
  https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/sysadmin@ip-10-123-6-178.ap-northeast-2.compute.internal%3Fsecret%3DZLKATAC3YU6B7T3YPS6UXHZ3NA%26issuer%3Dip-10-123-6-178.ap-northeast-2.compute.internal

[QR Code]

Your new secret key is: ZLKATAC3YU6B7T3YPS6UXHZ3NA
Your verification code is 388019
Your emergency scratch codes are:
  43601560
  12587417
  79439475
  14258690
  47725996
```

![](https://velog.velcdn.com/images/jtret2424/post/8696445a-bd49-4274-a359-9bbcbb249de6/image.png)



2-4. 홈 디렉토리에 `.google_authenticator` 설치할껀지에 대한 설정
```bash
Do you want me to update your "/home/sysadmin/.google_authenticator" file? (y/n) y
```
---
2-5. 같은 토큰으로 여러번 사용할껀지 허용에 대한 설정
> 해당 설정을 하게되면 30초마다 한 번의 로그인 가능하게 됨

```bash
Do you want to disallow multiple uses of the same authentication
token? This restricts you to one login about every 30s, but it increases
your chances to notice or even prevent man-in-the-middle attacks (y/n) y
```
---
2-6. 시간차이로 인한 이전 혹은 다음 인증코드 사용 여부
> OTP는 30초마다 토큰이 생성되지만, 시간차이로 인해서 문제가 발생할 것을 대비한
> 이전 코드, 현재 코드, 다음 코드를 사용할 수 있도록 하는 설정

```bash
By default, a new token is generated every 30 seconds by the mobile app.
In order to compensate for possible time-skew between the client and the server,
we allow an extra token before and after the current time. This allows for a
time skew of up to 30 seconds between authentication server and client. If you
experience problems with poor time synchronization, you can increase the window
from its default size of 3 permitted codes (one previous code, the current
code, the next code) to 17 permitted codes (the 8 previous codes, the current
code, and the 8 next codes). This will permit for a time skew of up to 4 minutes
between client and server.
Do you want to do so? (y/n) n
```
---
2-7. 30초 안에 3번 이상의 로그인 시도를 할 수 없게 하는 설정
```bash
If the computer that you are logging into isn't hardened against brute-force
login attempts, you can enable rate-limiting for the authentication module.
By default, this limits attackers to no more than 3 login attempts every 30s.
Do you want to enable rate-limiting? (y/n) y
```

---
## 3. /etc/pam.d/sshd 수정

3-1. 2번 항목에서 생생한 MFA를 사용 할 수 있도록 PAM모듈을 수정을 해야한다. 

```bash
sudo vim /etc/pam.d/sshd
```


3-2. auth항목에 아래 추가

> sshd에 아래와 같이 추가 할 경우 MFA 설정이 되지 않은 사용자도 패스워드로만 로그인이 가능하도록 하는 옵션이다.
> 만약 MFA 설정된 유저만 로그인 할 수 있도록 설정 하고싶다면 수정 할 필요 없다!

```bash
> auth required pam_google_authenticator.so nullok
```
![](https://velog.velcdn.com/images/jtret2424/post/0c17ecc6-c45d-4b7f-be11-ef134e3be562/image.png)

---
## 4. /etc/ssh/sshd_config 수정

4-1. sshd_config 옵션 수정
```bash
sudo vim /etc/ssh/sshd_config
```

```bash
ChallengeResponseAuthentication yes
```

4-2. sshd restart 
```bash
sudo systemctl restart sshd
```
---
## 5. OTP를 활용한 EC2 로그인

![](https://velog.velcdn.com/images/jtret2424/post/fda265ab-5272-4e31-b3cd-8c5079bf1041/image.png)

---
## 6. Private 환경에서의 OTP 인증

서버에 `1번 항목(Google OTP 설치) 패키지`만 설치 한 후 인터넷과 통신 할 수 없는 환경을 만들어서 `2번 항목(MFA Code 생성 및 설정)`부터 진행해보았다.

너무나도 정상적으로 MFA Code 와 로그인까지 정상적으로 되었고, 패키지만 이미지에 설치되어 있다면 Private 환경에서도 사용 할 수 있을 것 같다.

```toc
```