/*
获取 V2EX Cookie
README https://github.com/chavyleung/scripts/tree/master/v2ex
 */

const cookieName = 'V2EX'
const cookieKey = 'chavy_cookie_v2ex'
const cookieVal = $request.headers['Cookie']

if (cookieVal) {
  let cookie = $persistentStore.write(cookieVal, cookieKey)
  if (cookie) {
    let msg = `${cookieName}`
    $notification.post(msg, 'Cookie写入成功', '详见日志')
    console.log(msg)
    console.log(cookieVal)
  }
}

$done({})