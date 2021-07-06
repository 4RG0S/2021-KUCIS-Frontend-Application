# **2021-KUCIS-Frontend-Application**

한국형 Cyber Attack Matrix 및 BAS(Breach And attack Simulation) 솔루션 개발

## **Frontend 프로젝트 레포지토리**

### Getting Started

프로젝트를 실행하는 법을 적어두었습니다.

아래 순서에 따라 꼭 실행해주세요.

```bash
#git clone하기
> git clone https://github.com/4RG0S/2021-KUCIS-Frontend-Application.git

#project directory로 이동 후 필요한 패키지 자동 설치
> cd 2021-KUCIS-Frontend-Application
> cd frontend-react
> npm install

#프로젝트 시작
> npm run start
> (화면이 잘 뜨는지 확인)
> (잘 안되면 h01010한테 연락)
```

### **Rules**

1. Commit message

- 무조건 영어로
- 첫글자는 대문자로
- 명령조로

ex) Add login page
ex) Refactor login function

2. npm install

- npm install 할 때는 --save붙여서 package.json에 남기기
- 그래야 다른 사람이 npm install을 통해 패키지를 자동으로 설치할 수 있음

ex) npm install @material-ui/core --save