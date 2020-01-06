# React-With-GraphQL

install 

```
strix-cli my-app react-with-graphql
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

@apollo-client : [Apollo-Client](https://www.apollographql.com/docs/react/api/apollo-client/)
  * apollo-cache-inmemory, apollo-link, apollo-link-retry, apollo-upload-client @apollo/react-hooks
  * apollo-client [local state management](https://www.apollographql.com/docs/react/data/local-state/)
  * graphql-codegen: fragmentMatcher, introspection

fake data : [json-graphql-server](https://github.com/marmelab/json-graphql-server)
  * use for fake data of this boilerplate.

## Structure

directory 구조는 아래와 같습니다.

`[]` 는 folder 를 의미하고 그렇지 않은 경우 `file` 을 나타냅니다.

```$xslt
project
| - [build?]                 빌드된 파일이 저장됩니다. webpack-config의 outputDir
|
| - [public]
|   |                       실제 코드에 포함되지 않는 정적파일을 저장하세요. 
|   | - index.html          webpack-config의 indexPath로 사용됩니다.
|   | - favicon.ico         project의 favicon 파일입니다. 
|
| - [src]
|   | - [assets]            static 파일들을 저장하는 경로입니다. webpack-config의 assetsDir
|   |                       빌드시 build/static/media 경로에 저장됩니다. 
|
|   | - [components]        route별 component를 구현합니다. 
|   |   | - [commons]       공통으로 사용되는 component를 정의합니다. 
|   |   | - [...]           directory명은 route와 매칭하여 구성하고 component의 최상위는 Container로 명명합니다. 
|
|   | - [configs]           project에서 공통으로 사용하는 함수와 변수를 정의합니다. 
|   |   | - service         공통으로 사용하는 service로직을 구현합니다. 
|   |   | - formats         moment timeformat 등 공통으로 사용되는 format을 정의합니다. 
|
|   | - [graphql]           graphql 관련 파일의 root 디렉토리입니다. 
|   |   | - [fragments]     fragments를 작성합니다.
|   |   | - [mutations]     mutation 파일을 작성합니다.
|   |   | - [queries]       query 파일을 작성합니다.
|   |   | - apollo.js       apollo-client를 정의한 파일입니다. 
|   |   | - fragmentTypes.json    서버로 부터 받은 interface와 union type의 schema입니다. cache의 fragement matcher에 사용됩니다. 
|   |   | - localState      apollo-client에 관리하는 service의 global state를 작성할 수 있습니다.
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
|   |   | - Login           login 페이지 입니다. 
|   |   | - NotFound        route와 매칭되는 페이지가 없을 때 렌더링될 페이지입니다. 
|
|   | - [router]
|   |   | - AuthRoute.js    사용자의 권한에 따라 Route합니다.
|   |   | - routes.js       routes를 정리한 파일입니다. 페이지 추가시에 route를 정의하고 components에 component를 작성하세요. 
|   |   | - SubRoutes.js    routes에 정리된 객체를 기준으로 Route를 생성합니다.
|
|   | - [styles]
|   |   | - [app]           component단위 style을 정의합니다. 각 컴포넌트의 scope를 권장합니다.
|   |   | - normalize.scss  normalize style을 정의하세요.
|   |   | - root.scss       project의 global style을 정의하세요.
|   |   | - variables.scss  ant-design의 variables를 Customize할 수 있습니다. 
|   | 
|   | - App.js              project의 최상위 시작점입니다. project의 config를 정의할수 있습니다. 
|   | - index.js            webpack의 index file입니다. static html에 project를 mount하며 각종 provider를 매핑할 수 있습니다. 
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
