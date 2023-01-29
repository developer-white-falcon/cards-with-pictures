import React from 'react';
import styles from './PopupImage.module.scss';

function PopupImage(props: { url: string, toggleImagePopup: (value: null) => void }) {
  return (
    <div className={ styles.wrapper } onClick={ () => props.toggleImagePopup(null) }>
      <img src={ props.url } alt='Фотография' className={ styles.image } />
    </div>
  );
}

export default PopupImage;
