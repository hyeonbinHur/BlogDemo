import axios from 'axios';
const base = 'http://localhost:3000/test/api/comment';

const readComments = async (postId) => {
  try {
    const response = await axios.get(base + `/${postId}`);
    return response.data;
  } catch (err) {
    console.error('Error reading posts:', err);
    throw err;
  }
};
const createComment = async (newComment) => {
  try {
    const response = await axios.post(base, newComment);
    return response.data;
  } catch (err) {
    console.error('Error creating post:', err);
    throw err;
  }
};

const deleteComment = () => {
  try {
  } catch (err) {}
};

export { readComments, createComment };
