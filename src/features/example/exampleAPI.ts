import axios from 'axios'
import NotificationUtil from '../../utils/NotificationUtil'

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export const fetchData = () => {
  return instance.get('/posts/1')
    .then((res) => {
      NotificationUtil.showSuccess("Success")

      return res.data
    })
    .catch((err) => {
      NotificationUtil.showError("Error")
      console.log(err)
    })
}
