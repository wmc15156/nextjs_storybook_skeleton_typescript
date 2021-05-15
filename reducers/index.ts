import { RootReducer } from '../types/RootReducer';
import { AnyAction, combineReducers, Reducer } from 'redux';
import user from './user';
import { HYDRATE } from 'next-redux-wrapper';


const rootReducer:Reducer<RootReducer, AnyAction> = (state, action) =>{
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers<RootReducer>({
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

