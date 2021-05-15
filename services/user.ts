import axios from 'axios';

interface UserData {
  email: string;
  password: string;
}

export default () => {
  return {
    signUp: ({ email, password }: UserData) => axios.post('/users', { email, password }),
    loadMyInfo: async () => {
      const data = await axios.get('/user');
      console.log(data);
      return data;
    },
  };
};
