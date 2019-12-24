# React-With-Rest

install 

```
strix-cli my-app react-with-rest
```

---

## Envioronment

### Customize configuration
See [Configuration Reference](https://create-react-app.dev/docs/documentation-intro).

---

## Dependencies
UI Framework : [Ant Design @3.26.2](https://ant.design/docs/react/introduce)
react-router-dom : [react-router-dom@^5.1.2](https://reacttraining.com/react-router/)
moment: [moment@^2.24.0](https://momentjs.com/docs/)

## Structure

directory 구조는 아래와 같습니다.

`[]` 는 folder 를 의미하고 그렇지 않은 경우 `file` 을 나타냅니다.

```$xslt
project
| - [dist?]                 빌드된 파일이 저장됩니다. webpack-config의 outputDir
|
| - [public]
|   | - [img]               img파일을 저장합니다. 빌드시 assets의 이미지파일과 함께 dist/img 경로에 저장됩니다. 
|   |                       실제 코드에 포함되지 않는 정적파일을 저장하세요. 
|   | - index.html          webpack-config의 indexPath로 사용됩니다.
|   | - favicon.ico         project의 favicon 파일입니다. 
|
| - [src]
|   | - [actions]           redux의 action을 정의합니다.
|
|   | - [assets]            static 파일들을 저장하는 경로입니다. webpack-config의 assetsDir
|
|   | - [components]        route별 component를 구현합니다. 
|   |   | - [commons]       공통으로 사용되는 component를 정의합니다. 
|   |   | - [...]           directory명은 route와 매칭하여 구성하고 component의 최상위는 Container로 명명합니다. 
|
|   | - [configs]           project에서 공통으로 사용하는 함수와 변수를 정의합니다. 
|   |   | - api             RestAPI를 작성합니다. 
|   |   | - Fetcher         Ajax모듈을 래핑하여 정의합니다. 
|   |   | - service         공통으로 사용하는 service로직을 구현합니다. 
|   |   | - formats         moment timeformat 등 공통으로 사용되는 format을 정의합니다. 
|
|   | - [layouts]           Layout을 구성하는 component를 작성합니다. 
|   |   | - Content         Content 
|   |   | - Footer          Footer 
|   |   | - FullLayout      Header와 Footer를 갖고 있는 Layout. HOC
|   |   | - Header          Header 
|   |   | - Sider           Sider 
|   |   | - Navigation      Navigation 
|
|   | - [pages]             route에서 정적 component 파일을 작성합니다. 
|   |   | - Layout          Header와 Footer를 갖는 기본 layout 페이지의 route component 입니다. 
|   |   | - Login           login 페이지 입니다. 
|   |   | - NotFound        route와 매칭되는 페이지가 없을 때 렌더링될 페이지입니다. 
|
|   | - [reducers]          redux의 reducer를 정의합니다.
|
|   | - [router]
|   |   | - AuthRoute.js    사용자의 권한에 따라 Route합니다.
|   |   | - routes.js       routes를 정리한 파일입니다. 페이지 추가시에 route를 정의하고 components에 component를 작성하세요. 
|   |   | - SubRoutes.js    routes에 정리된 객체를 기준으로 Route를 생성합니다.
|
|   | - [styles]
|   |   | - [app]           component단위 style을 정의합니다. 각 컴포넌트의 scope를 권장합니다.
|   |   | - nomalize.scss   
|   |   | - root.scss       project의 global style을 정의하세요.
|   |   | - variables.scss  ant-design의 variables를 Customize할 수 있습니다. 
|   | 
|   | - [sagas]             redux saga를 정의합니다.
|
|   | - [store]             
|   |   | - store.js        redux store를 정의합니다.
|
|   | - App.js             project의 최상위 시작점입니다. project의 config를 정의할수 있습니다. 
|   | - index.js            babel의 index file입니다. static html에 project를 mount하며 각종 provider를 매핑할 수 있습니다. 
|   
| - .browserslistrc         지원할 브라우저 목록을 정의합니다. 
| - .eslintrc.js            ellint의 config파일입니다. 기본 룰은 AirBnb 규칙을 따릅니다. 
| - .prettierrc.js          vscode prettier 설정파일입니다. 
| - package.json            dependencies와 scripts 등 설정파일을 작성합니다. 
| - config-overrides.js     webpack.config를 overriding 합니다. 
| - etc...
|___
```

## Usage

[![Yarn@1.9.4](https://img.shields.io/badge/Yarn-Required-red)](https://yarnpkg.com/lang/en/)
* 서비스를 배포할 계획이라면 반드시 위 사항을 준수하세요. 

  * chart를 추가하려면 [echart](https://echarts.apache.org/en/index.html)를 권장합니다.
  * polyfill이 필요한 경우 [browserlist](https://github.com/browserslist/browserslist) 와 [apollo-client#polyfill](https://github.com/apollographql/apollo-client/issues/2780)을 참고하세요.

### setup 
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
