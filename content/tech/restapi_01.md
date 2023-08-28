---
emoji: 😀
title: 01. Flask를 활용한 Rest API[GET] 구현해보기_01편
date: '2023-08-25 01:00:00'
author: 정욱현
tags: RestAPI
categories: Tech
---

![](https://velog.velcdn.com/images/jtret2424/post/93656a34-0e4e-45a9-ba54-90baee70b736/image.png)


----
## 01. Flask란?
![](https://velog.velcdn.com/images/jtret2424/post/f9af1c89-d82c-43d8-9069-0122e99c6a48/image.png)

Flask는 Python를 기반하고 있는 ```Micro Web Framework``` 다.
정말 간단한 코드로 쉽게 Web 또는 API Server 구성할 수 있다.

----
## 02. ~~(또)~~ HelloWorld 구현하기

### - Flask 라이브러리 설치
우선 ```Flask``` 라이브러리를 설치해야한다.
아래 명령어로 설치해보자!

```bash
$ pip install flask
$ pip install flask-restx

```


### - Code 작성하기

원하는 디렉토리 안에 ```app.py``` 파일을 생성하여 아래 코드를 넣고 저장한다.

```python
from flask import Flask

app = Flask (__name__)

@app.route('/')
def helloworld():
	return 'Hello World!'

if __name__=="__main__":
	app.run()
```


### - 실행하기
만든 ```app.py```파일을 python으로 실행하면 아래와 같이 메시지가 발생한다.

![](https://velog.velcdn.com/images/jtret2424/post/a2261830-9c7b-4065-a3f7-bcc5ed658b65/image.png)

### - 접근하기
테스트 접근은 ```http://127.0.01:5000```을 통해 접근하게 되면 ```HelloWorld!``` 보여지게 된다.

![](https://velog.velcdn.com/images/jtret2424/post/99bd681f-7e51-44b3-a167-caf03d1a23e1/image.png)

----

## 03. Code 뿌셔보기

우리가 예제코드를 가지고 위에서 ```Hello World!```까지 구현해봤다.


### - @app.route('/')

우리가 작성하면서 ```@app.route('/')``` 코드를 넣었는데 이 코드가 ```Route 경로```를 뜻하는 것이다.

접근할때 ```http://127.0.01:5000``` 주소로 접근했지만 ```http://127.0.01:5000/api``` 에 접근하려면 코드는 아래과 같다.


```python
from flask import Flask

app = Flask (__name__)

@app.route('/api')
def helloworld():
	return 'Hello World!'

if __name__=="__main__":
	app.run()
```

### - 결과


![](https://velog.velcdn.com/images/jtret2424/post/24e3af2e-c6c4-4879-b809-d1baff0fba43/image.png)

----


```toc
```