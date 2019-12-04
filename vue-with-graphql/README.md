# Vue-Default

install 

```
strix-cli my-app vue-default
```

---

## Envioronment
@vue/cli(v4.0.5) : [Vue-CLI](https://cli.vuejs.org/guide/)
  * Babel, PWA, Router, CSS Pre-processors, Linter
    * Linter : Airbnb, Lint and fix on commit
    * CSS pre-processors: Sass/SCSS (with node-sass)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Dependencies
UI Framework : [Ant Design Vue@v1.4.6](https://www.antdv.com/docs/vue/introduce/)
vue-router : [vue-router@^3.1.3](https://router.vuejs.org/kr/)
moment: [moment@^2.24.0](https://momentjs.com/docs/)

## Structure

directory 구조는 아래와 같습니다.

`[]` 는 folder 를 의미하고 그렇지 않은 경우 `file` 을 나타냅니다.

```$xslt
project
| - [dist?]                 빌드된 파일이 저장됩니다. vue-config의 outputDir
|
| - [public]
|   | - [img]               img파일을 저장합니다. 빌드시 assets의 이미지파일과 함께 dist/img 경로에 저장됩니다. 
|   |                       실제 코드에 포함되지 않는 정적파일을 저장하세요. 
|   | - index.html          vue-config의 indexPath로 사용됩니다.
|   | - favicon.ico         project의 favicon 파일입니다. 
|
| - [src]
|   | - [assets]            static 파일들을 저장하는 경로입니다. vue-config의 assetsDir
|
|   | - [components]        route별 component를 구현합니다.
|   |   | - [commons]       공통으로 사용되는 component를 정의합니다. 
|   |   | - [...]           directory명은 route와 매칭하여 구성하고 component의 최상위는 Container로 명명합니다.
|
|   | - [configs]           project에서 공통으로 사용하는 함수와 변수를 정의합니다. 
|   |   | - service         공통으로 사용하는 service로직을 구현합니다. 
|   |   | - formats         moment timeformat 등 공통으로 사용되는 format을 정의합니다. 
|
|   | - [layouts]           Layout을 구성하는 component를 작성합니다. 
|   |   | - Header          Header
|   |   | - Footer          Footer
|   |   | - Content         Content
|   |   | - Sider           Sider
|   |   | - Navigation      Navigation
|   |   | - Tile            Tile형 layout wrapper
|
|   | - [pages]             route에서 정적 component 파일을 작성합니다. 
|   |   | - Layout          Header와 Footer를 갖는 기본 layout 페이지의 route component 입니다. 
|   |   | - Login           login 페이지 입니다. 
|   |   | - NotFound        route와 매칭되는 페이지가 없을 때 렌더링될 페이지입니다. 
|
|   | - [router]
|   |   | - index.js        global router를 생성하고 전역 가드를 등록할 수 있습니다. 
|   |   | - routes.js       routes를 정리한 파일입니다. 페이지 추가시에 route를 정의하고 components에 component를 작성하세요.
|
|   | - [styles]
|   |   | - app.scss        project의 global style을 정의하세요. component단위 style은 해당 .vue파일의 scope를 권장합니다.
|   |   | - variables.scss  ant-design-vue의 variables를 Customize할 수 있습니다. 
|
|   | - App.vue             project의 최상위 시작점입니다. project의 config를 정의할수 있습니다. 
|   | - main.js             babel의 index file입니다. static html에 project를 mount하며 각종 provider를 매핑할 수 있습니다. 
|   | - registerAntVue.js   ant-design-vue의 컴포넌트를 import하고 관리하는 파일입니다. 
|   | - registerServiceWorker.js  PWA의 service-worker를 등록하고 사용합니다.
|   
| - .browserslistrc         지원할 브라우저 목록을 정의합니다. 
| - .eslintrc.js            ellint의 config파일입니다. 기본 룰은 AirBnb 규칙을 따릅니다. 
| - babel.config.js         babel의 설정파일입니다. 
| - package.json            dependencies와 scripts 등 설정파일을 작성합니다. 
| - vue.config.js           webpack.config를 overriding 합니다. 
| - etc...
|___
```

## Usage

[![Yarn@1.9.4](https://img.shields.io/badge/Yarn-Required-red)](https://yarnpkg.com/lang/en/)
* 서비스를 배포할 계획이라면 반드시 위 사항을 준수하세요. 

### setup 
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

graphql
- apollo client, apollo-cache-inmemory,  apollo-upload-client
- vue-apollo - provider, apollo query
- graphql codegen/cli for fragment-matcher
- apollo-link-retry 3회 

- file upload apollo-upload-client
- localState state manage (apollo client, @client) 

- manage packageJson 

firebase 
- graphql auth 
