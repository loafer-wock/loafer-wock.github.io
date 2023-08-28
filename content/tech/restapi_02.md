---
emoji: 😀
title: 02. Flask를 활용한 Rest API[GET] 구현해보기_02편
date: '2023-08-25 02:00:00'
author: 정욱현
tags: RestAPI
categories: Tech
---

![](https://velog.velcdn.com/images/jtret2424/post/a007f632-fe41-480b-ba28-a12e208d6571/image.png)


## 01. My IP API 구현해보기

>[01. Flask를 활용한 Rest API[GET] 구현해보기_01편](https://velog.io/@jtret2424/01.-Rest-API-%EA%B5%AC%ED%98%84%ED%95%B4%EB%B3%B4%EA%B8%B0-bhoxpa39)

전 편에서 우리는 ```HelloWorld!```를 실행해봤다.
지금까지는 그냥 Web 이랑 뭐가다르지? 싶을 수 있다.

### - 예제 Code
HelloWorld는 Root으로 두고 ```/myip```를 만들어보자

```
from flask import Flask
from flask import request
from flask import jsonify

app = Flask (__name__)

@app.route('/')
def helloworld():
	return 'Hello World!'
    
@app.route("/myip")
def myip():
    return jsonify({'ip': request.remote_addr})

if __name__=="__main__":
	app.run()
```

### - 결과
![](https://velog.velcdn.com/images/jtret2424/post/6b178e8d-e3e1-4c7b-9541-29b84c8e3325/image.png)

---
## 02. route 옵션

```@app.route('/')``` 옵션에 절대 경로 ```@app.route('/mpip)```처럼 줄 수 있지만, ```myip``` 외에는 어떻게 처리할까?

아래 코드처럼 ```</>```를 사용하면 설정한 라우팅 경로외에 임의로 넣을 시 메시지를 넣어 리턴 해줄 수 있다!

```
#@app.route('/<block>')
#def block(block):
# return '사용할 수 없는 페이지입니다. 다시 한번확인 바랍니다.'
```

### - 결과

![](https://velog.velcdn.com/images/jtret2424/post/a28464be-a5d3-4c9b-a9e5-6b7a99254ad3/image.png)


```@app.route('api/임의값')```를 넣어서 json 형태로 주는 것도 가능하다!
```
@app.route('/api/<option>') #get echo api
def get_echo_call(option):
    return jsonify({"option": option})
```

### - 결과

![](https://velog.velcdn.com/images/jtret2424/post/d2ef9ce2-2ad3-450a-b7c0-ce3f5a0c4d67/image.png)


---

```toc
```