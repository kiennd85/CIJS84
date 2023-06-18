import axios from 'axios';

const axiosCommentApi = {
  GetComment: async () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    let data = await axios.get(url);
    // console.log(data);
    return data;
  },
};

export default axiosCommentApi;
