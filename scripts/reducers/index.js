import {combineReducers} from 'redux';
import environment from '../reducers/environment';
import player from '../reducers/player';
import navigator from '../reducers/navigator';

const rootReducer = combineReducers({
  environment,
  player,
  navigator
});

export default rootReducer;
