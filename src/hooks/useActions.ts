import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as studentsActions from '../Redux/Actions/studentsActions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(studentsActions, dispatch);
}