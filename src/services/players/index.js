import axios from 'axios'

const API = '/players'

const Players = {
  getPlayers(params) {
    return axios.get(`${API}`, { params })
  },
}

export default Players
