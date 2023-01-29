import React from 'react';
import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={ styles.loader }>
      <div className={ styles.spinner }/>
      <p className={ styles.text }>Загрузка...</p>
    </div>
  )
}
