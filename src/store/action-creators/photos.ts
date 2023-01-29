import { Dispatch } from 'redux';
import { PhotosActions, PhotosActionTypes } from '../../types/photos';
import { instance } from '../../constants/constants';


export const fetchPhotosAC = (page: number) => {
  return async (dispatch: Dispatch<PhotosActions>) => {
    try {
      dispatch({ type: PhotosActionTypes.FETCH_PHOTOS });
      const response = await instance.get('/photos/', {params: { per_page: 10, page: page }});
      dispatch({ type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, photos: response.data })
    } catch (error: any) {
      dispatch({
        type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
        errorMessage: error.message ? `Ошибка: ${error.message}` : 'Ошибка при загрузке',
      });
    }
  }
}

export const setPhotosPageAC = (page: number): PhotosActions => ({ type: PhotosActionTypes.SET_PHOTOS_PAGE, page: page });

export const removePhotoAC = (id: string): PhotosActions => ({ type: PhotosActionTypes.REMOVE_PHOTO, id: id });

export const toggleLikeAC = (id: string): PhotosActions => ({ type: PhotosActionTypes.TOGGLE_LIKE, id: id });

export const toggleDisplayLikedPhotosAC = (value: boolean): PhotosActions => ({ type: PhotosActionTypes.TOGGLE_DISPLAY_LIKED_PHOTOS, displayLikedPhotos: value });

export const toggleShowImagePopupAC = (value: string | null): PhotosActions => ({ type: PhotosActionTypes.TOGGLE_SHOW_IMAGE_POPUP, value: value });
