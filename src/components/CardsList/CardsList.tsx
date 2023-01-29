import React, { ReactElement } from 'react';
import styles from './CardsList.module.scss';


export default function CardsList(props: { children: ReactElement | ReactElement[] }) {

  return (
    <div className={ styles.cardsList }>
      { props.children }
    </div>
  )
}
