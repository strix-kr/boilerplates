const namespace = process.env.VUE_APP_NAMESPACE || 'dev'
const appSettings = {
    prod: {
        'VUE_APP_FIREBASE_KEY': 'AIzaSyAQSGTB5t2z0_ZU7x3cw4RnmZZHuL3UhaM',
        'VUE_APP_GRAPHQL_HTTP': 'https://gw.strix.co.kr/graphql',
        'VUE_APP_GRAPHQL_WS': 'wss://gw.strix.co.kr/graphql'
    },
    dev: {
        'VUE_APP_FIREBASE_KEY': 'AIzaSyBN9yUx2YaxeTZ7jIxQ52lDl0c5Y0yoUHQ',
        'VUE_APP_GRAPHQL_HTTP': 'https://gw.dev.strix.co.kr/graphql',
        'VUE_APP_GRAPHQL_WS': 'wss://gw.dev.strix.co.kr/graphql'
    }
}
const appSetting = appSettings[namespace]
if (!appSetting) throw new Error('not existing namespace configuration', namespace)
// TODO: remove this!!!
console.info({ ...appSetting, ...process.env })

export default appSetting
