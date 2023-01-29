import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PhotosAC from './../store/action-creators/photos';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(PhotosAC, dispatch);
}
