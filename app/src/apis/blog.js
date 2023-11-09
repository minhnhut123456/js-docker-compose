import axios from 'axios';

const endpoint = process.env.REACT_APP_BLOG_ENDPOINT;

export async function getPosts() {
  try {
    const response = await axios.get(`${endpoint}/posts`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function createPost({ title, body }) {
  try {
    await axios.post(`${endpoint}/posts`, { title, body });
  } catch (error) {
    console.error(error);
  }
}
