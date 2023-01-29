import React from 'react';
import styles from './Header.module.scss';
import { NBS } from '../../constants/constants';


export default function Header() {

  return (
    <header className={ styles.header }>
      <nav className={ styles.menu }>
        <a href='/some-cards/' className={ styles.logo }> Picture card</a>
        <p className={ styles.inform }>В проекте используется API{NBS}<a href='https://unsplash.com/documentation' target='_blank' rel='noreferrer' className={ styles.link }>Unsplash</a></p>
      </nav>
    </header>
  )
}
