import axios from 'axios'

export default async function getComments(id, setcomments) {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    )
    setcomments(data)
  } catch (error) {
    console.log(error)
  }
}
