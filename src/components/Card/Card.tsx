import React from 'react';
import styles from './Card.module.scss';
import cn from 'classnames';
import Heart from '../../assets/icons/Heart';
import Trash from '../../assets/icons/Trash';
import NewTab from '../../assets/icons/NewTab';
export default function Card(props: {
  id: string,
  url: string,
  imageSmall: string,
  imageRegular: string,
  photographerName: string,
  photographerProfile: string,
  description: string | null,
  liked?: boolean,
  removePhoto: (cardId: string) => void,
  toggleLike: (cardId: string) => void,
  toggleImagePopup: (value: string) => void,
}) {
  const heartIconClass = cn(
    styles.icon,
    props.liked && styles.isLiked,
  );


  return (
    <figure className={ styles.card }>
      <div className={ styles.imageWrapper } onClick={ () => props.toggleImagePopup(props.imageRegular || props.imageSmall) }>
        <img src={ props.imageSmall || props.imageRegular } alt={ props.description || 'Фотография' } className={ styles.image } />
      </div>
      <figcaption className={ styles.figcaption }>
        <a className={ styles.photographer } href={ props.photographerProfile } target='_blank' title='Страница фотографа' rel='noreferrer'>{ props.photographerName }</a>
        { props.description && <span className={ styles.caption } title={ props.description || undefined }>{ props.description }</span> }
        <div className={ styles.iconsBlock }>
          <button className={ heartIconClass } title='Лайкнуть' onClick={ () => props.toggleLike(props.id) }><Heart width='16' height='14'/></button>
          <button className={ styles.icon } title='Удалить' onClick={ () => props.removePhoto(props.id) }><Trash width='14' height='16'/></button>
          <a className={ styles.icon } href={ props.url } target='_blank' title='Посмотреть фото на сайте' rel='noreferrer'><NewTab /></a>
        </div>
      </figcaption>
    </figure>
  )
}
