# React-With-Typescript

install 

```
strix-cli my-app react-with-typescript
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

# Description

- [Create React App](https://github.com/facebook/create-react-app) 기반에 eject없이 [customize-cra](https://www.npmjs.com/package/customize-cra)로 구성했습니다.

  - 추가적인 설정은 [config-overrides.js](./config-overrides.js)에서 확인하거나 추가할 수 있습니다.

- UI framework는 [Antd Design](https://ant.design/components/menu/)을 사용합니다.

  - [Antd](https://ant.design/components/menu/)에서 제공하는 UI 컴포넌트만을 사용하길 권장합니다.

- CSS는 [Sass](https://sass-lang.com/)를 사용하며, [styled-components](https://styled-components.com/)를 함께 사용합니다.
  - `src/styles/variables.scss`파일은 [Antd](https://ant.design/components/menu/)의 theme를 customize하며 [styled-components](https://styled-components.com/)의 'ThemeProvider'를 생성합니다.

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
|   | - [types]             type을 정의합니다.
|   |   | - schema.d.ts     서버의 schema type입니다.
|
|   | - [router]
|   |   | - AuthRoute.tsx    사용자의 권한에 따라 Route합니다.
|   |   | - routes.js       routes를 정리한 파일입니다. 페이지 추가시에 route를 정의하고 components에 component를 작성하세요.
|   |   | - Route.tsx    routes에 정리된 객체를 기준으로 Route를 생성합니다.
|
|   | - [styles]
|   |   | - [app]           component단위 style을 정의합니다. 각 컴포넌트의 scope를 권장합니다.
|   |   | - nomalize.scss   normalize하거나 Antd의 CSS를 override합니다. cf) normalize.css(https://necolas.github.io/normalize.css/)와는 다릅니다.
|   |   | - root.scss       project의 global style을 정의하세요.
|   |   | - variables.scss  ant-design의 variables를 Customize할 수 있습니다.
|   | - App.tsx             project의 최상위 시작점입니다. project의 config를 정의할수 있습니다.
|   | - index.tsx            babel의 index file입니다. static html에 project를 mount하며 각종 provider를 매핑할 수 있습니다.
|
| - .eslintrc.js            ellint의 config파일입니다.
| - .prettierrc.js          prettier 설정파일입니다.
| - package.json            dependencies와 scripts 등 설정파일을 작성합니다.
| - config-overrides.js     webpack.config를 overriding 합니다.
| - etc...
|___
```

# Envioronment

[Node JS@10.x.x](https://nodejs.org/ko/)
[Yarn@1.9.4](https://yarnpkg.com/lang/en/)

# Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint`

```bash
# eslint와 prettier를 실행합니다.
eslint --fix -c .eslintrc.js --ignore-path .eslintignore src/**/*.{ts,tsx} && prettier --config .prettierrc.js --write src/**/*.{ts,tsx,scss}
```

## Deployment
* 정적파일을 deploy하려면 [deploy](https://velog.io/@gwak2837/GitHub-Pages-gh-pages%EB%A1%9C-%EB%AC%B4%EB%A3%8C-%EC%9B%B9-%ED%98%B8%EC%8A%A4%ED%8C%85%ED%95%98%EA%B8%B0)을 참고하세요.

