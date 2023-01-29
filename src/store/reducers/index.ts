import { combineReducers } from 'redux';
import { PhotosReducer } from './photosReducer';

export const rootReducer = combineReducers({ photos: PhotosReducer });
export type RootState = ReturnType<typeof rootReducer>;
