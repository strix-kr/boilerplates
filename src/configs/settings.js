const appSetting = {
    'VUE_APP_FIREBASE_KEY': process.env === 'production' ? 'AIzaSyAQSGTB5t2z0_ZU7x3cw4RnmZZHuL3UhaM' : 'AIzaSyBN9yUx2YaxeTZ7jIxQ52lDl0c5Y0yoUHQ',
    'VUE_APP_GRAPHQL_HTTP': process.env === 'production' ? 'https://api.strix.kr/graphql' : 'https://api.dev.strix.kr/graphql',
    'VUE_APP_GRAPHQL_WS': process.env === 'production' ? 'wss://api.strix.kr/graphql' : 'wss://api.dev.strix.kr/graphql'
}

export default appSetting
