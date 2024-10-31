import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getStudents() {
    return apiClient.get('/students')
  },
  postStudent(newInfoStudent) {
    return apiClient.post('/students', newInfoStudent)
  }
}
