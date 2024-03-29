import axios from 'axios'

export async function getPosts(setPosts) {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    setPosts(data)
  } catch (error) {
    console.log(error)
  }
}

export async function getPost(id, setPost) {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
    setPost(data)
  } catch (error) {
    console.log(error)
  }
}
