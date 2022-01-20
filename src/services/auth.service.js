import axios from 'axios'

const API_URL = '/user/'
class AuthService {
  login(user) {
    return axios
      .post('login', {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem(
            process.env.VUE_APP_NAME + '_user',
            JSON.stringify(response.data),
          )
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
    })
  }
}

export default new AuthService()
