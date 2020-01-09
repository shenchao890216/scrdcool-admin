import Cookies from 'js-cookie'

/* 服务端解析cookie. */
function parseCookie (cookie) {
  const cookies = {}

  if (!cookie) {
    return cookies
  }

  const cookieList = cookie.split(';')
  for (const cooikeListItem of cookieList) {
    const cookieTmp = cooikeListItem.split('=')
    cookies[cookieTmp[0].trim()] = cookieTmp[1].trim()
  }

  return cookies
}

export default function ({ route, req, res, redirect }) {
  const isClient = process.client
  const isServer = process.server
  // const redirectURL = '/login'

  // eslint-disable-next-line no-console
  console.log(isClient)

  if (isServer) {
    // eslint-disable-next-line no-console
    console.log(req.headers.cookie)
    const cookie = parseCookie(req.headers.cookie)
    // eslint-disable-next-line no-console
    console.log(cookie)
    // if (!cookie.token || cookie.token - 0 !== 1) {
    //   // eslint-disable-next-line no-console
    //   redirect('/user/login')
    // }
  }

  if (isClient) {
    // eslint-disable-next-line no-console
    console.log(1111)
    const token = Cookies.get('token')
    // eslint-disable-next-line no-console
    console.log(token)
  }
}
