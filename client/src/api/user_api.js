import axios from 'axios';
const base = 'http://localhost:3000/test/api/user';

const signUpUser = async (userInfo) => {
  try {
    const response = await axios.post(base + '/sign-up', userInfo);
    return response.data;
  } catch (err) {
    console.err('Error sign up user: ', err);
    throw err;
  }
};
const signInUser = async (userInfo) => {
  try {
    const response = await axios.post(base + '/sign-in', userInfo);
    return response.data;
  } catch (err) {
    console.error('Error sign in user:', err);
    throwerr;
  }
};

export { signUpUser, signInUser };
