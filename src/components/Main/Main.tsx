import React from 'react';
import { useTypedSelector } from '../../utils/useTypedSelector';
import { useActions } from '../../utils/useActions';
import { Photo } from '../../types/photos';
import styles from './Main.module.scss';
import Loader from '../../components/Loader/Loader';
import Card from '../Card/Card';
import CardsList from '../CardsList/CardsList';
import Switcher from '../../components/Switcher/Switcher';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import PopupImage from '../PopupImage/PopupImage';


export default function Main() {
  const { photos, isLoading, error, page, isDisplayLikedPhotos, popupImageUrl } = useTypedSelector(state => state.photos);
  const { fetchPhotosAC, setPhotosPageAC, removePhotoAC, toggleLikeAC, toggleDisplayLikedPhotosAC, toggleShowImagePopupAC } = useActions();
  const currentPhotos = filterPhotos(photos, isDisplayLikedPhotos);

  function filterPhotos(photosArray: Photo[], value: boolean) {
    if(value) return photosArray.filter((photo: Photo) => photo.liked_by_user);
    return photosArray;
  }

  function nextPage() {
    setPhotosPageAC(page + 1);
  }
  function removePhoto(cardId: string) {
    removePhotoAC(cardId);
  }
  function toggleLike(cardId: string) {
    toggleLikeAC(cardId);
  }
  function showLikedPhotos(value: boolean) {
    toggleDisplayLikedPhotosAC(value);
  }
  function toggleShowImagePopup(value: string | null) {
    toggleShowImagePopupAC(value);
  }
  
   React.useCallback(() => {
    fetchPhotosAC(page) 
  }, [ fetchPhotosAC, page  ]);
  
  
  return (
    <div className={ styles.main }>
      <div className={ styles.filterBlock }>
        <p className={ styles.filterText }>Показать понравившиеся фотографии</p>
        <Switcher onChange={ showLikedPhotos } />
      </div>
      {
        !!currentPhotos.length ?
        <>
          <CardsList>
            {
              currentPhotos.map((photo: Photo, id) => {
                return (
                  <Card
                    key={id}
                    id={ photo.id }
                    url={ photo.links.html }
                    imageSmall={ photo.urls.small }
                    imageRegular={ photo.urls.regular }
                    photographerName={ photo.user.name }
                    photographerProfile={ photo.user.links.html }
                    description={ photo.description }
                    liked={ photo.liked_by_user }
                    removePhoto={ removePhoto }
                    toggleLike={ toggleLike }
                    toggleImagePopup={ toggleShowImagePopup }
                  />
                )
              })
            }
          </CardsList>
          { popupImageUrl && <PopupImage url={ popupImageUrl } toggleImagePopup={ toggleShowImagePopup } /> }
          { isLoading ? <Loader/> : <button className={ styles.moreButton } onClick={ nextPage }>Ещё фотографии</button> }
          <ErrorMessage error={ error } />
        </>
        :
        <>
          <p className={ styles.informText }>Нет фотографий =(</p>
          <ErrorMessage error={ error } />
          { isLoading && !photos.length && <Loader/> }
        </>
      }
    </div>
  )
}
