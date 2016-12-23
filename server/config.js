const { env } = process

const assetsPort = env.ASSETS_PORT || '5431'
const assetsBaseUrl = env.ASSETS_BASE_URL || `http://localhost:${assetsPort}`
const assetsPathname = '/assets'

module.exports = {
  isDev: ['development', 'dev', ''].includes(env.NODE_ENV),
  isProd: env.NODE_ENV === 'production',
  app: {
    port: env.APP_PORT || '3000',
  },
  jira: {
    login: env.JIRA_LOGIN,
    pass: env.JIRA_PASS,
  },
  assets: {
    port: assetsPort,
    baseUrl: assetsBaseUrl,
    pathname: assetsPathname,
    fullUrl: assetsBaseUrl + assetsPathname,
  },
}
