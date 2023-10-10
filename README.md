# typeScriptudy

---

<br/>

## 타입스크립트 환경 설정

### TS 설치

**CRA와 TS함께 설치**
`yarn create react-app my-app --template typescript`
**CRA가 설치된 환경에서 TS 설치**
`yarn add typescript @types/node @types/react @types/react-dom @types/jest`

<br/>

### tsconfig.json 설정

```json
{
  "compilerOptions": {
    "target": "es6", //어떤버전의 js로 컴파일할지 정의
    "lib": [
      //어떤 환경에서 사용하는지 정의(api자동완성 제공해줌)
      "dom", //브라우저
      "dom.iterable",
      "esnext"
    ],
    "baseUrl": "./src", // 추가된 것 ./src를 절대 경로로 지정
    "allowJs": true, //ts안에서 js허용(js파일 import가능)
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    //컴파일할 폴더 입력. src의 모든파일 확인함
    "src"
  ],
  "exclude": ["node_modules"]
}
```

<br/>

### 파일 수정

1. .jsx, .js 확장자를 .tsx로 변경
2. index.js => index.tsx 파일명, 파일 내용 변경

<br/>

### 라이브러리 설치

**styled-components**

`yarn add styled-components @types/styled-components`
