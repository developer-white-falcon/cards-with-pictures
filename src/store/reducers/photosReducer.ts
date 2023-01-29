import { Photo, PhotosActions, PhotosActionTypes, PhotosState } from '../../types/photos';

const initialState: PhotosState = {
  photos: [],
  isLoading: false,
  error: null,
  page: 1,
  isDisplayLikedPhotos: false,
  popupImageUrl: null,
};

export const PhotosReducer = (state: PhotosState = initialState, action: PhotosActions): PhotosState => {
   switch (action.type) {
     case PhotosActionTypes.FETCH_PHOTOS:
       return { ...state, isLoading: true }
     case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
       return { ...state, isLoading: false, error: null, photos: [...state.photos, ...action.photos] }
     case PhotosActionTypes.FETCH_PHOTOS_ERROR:
       return { ...state, isLoading: false, error: action.errorMessage }
     case PhotosActionTypes.SET_PHOTOS_PAGE:
       return { ...state, page: action.page }
     case PhotosActionTypes.REMOVE_PHOTO:
       return { ...state, photos: [...state.photos.filter((photo: Photo) => photo.id !== action.id)] }
     case PhotosActionTypes.TOGGLE_LIKE:
       return { ...state, photos: [...state.photos.map((photo: Photo) => {
           if (photo.id === action.id) return { ...photo, liked_by_user: !photo.liked_by_user }
           return photo;
         })]}
     case PhotosActionTypes.TOGGLE_DISPLAY_LIKED_PHOTOS:
       return { ...state, isDisplayLikedPhotos: action.displayLikedPhotos }
     case PhotosActionTypes.TOGGLE_SHOW_IMAGE_POPUP:
       return { ...state, popupImageUrl: action.value }

     default: return state;
   }
}
