export default function authHeader() {
  const user = JSON.parse(
    localStorage.getItem(process.env.VUE_APP_NAME + '_user'),
  )
  console.log(user)
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
