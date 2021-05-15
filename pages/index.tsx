import wrapper, { SagaStore } from '@store/configureStore';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from '../types/user/userType';
import { END } from 'redux-saga';

const Home = () => {
  return <div>Home Page</div>;
};
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });

  context.store.dispatch(END);
  await (context.store as SagaStore).sagaTask?.toPromise();
});
export default Home;
