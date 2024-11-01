import axios from 'axios';
const base = 'http://localhost:3000/test/api/post';
const createPost = async (newPost) => {
  try {
    const response = await axios.post(base, newPost);
    return response.data;
  } catch (err) {
    console.error('Error creating post:', err);
    throw err;
  }
};
const readPosts = async () => {
  try {
    const response = await axios.get(base);
    return response.data; // response가 아닌 response.data를 반환
  } catch (err) {
    console.error('Error reading posts:', err);
    throw err;
  }
};

export { createPost, readPosts };
