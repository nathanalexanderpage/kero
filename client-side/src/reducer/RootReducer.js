import {combineReducers} from 'redux';
import board from './BoardReducer';
import profile from './ProfileReducer';
import task from './TaskReducer';
import project from './ProjectReducer';
import sprint from './SprintReducer';

export default combineReducers({
  board,
  profile,
  task,
  project,
  sprint
})
