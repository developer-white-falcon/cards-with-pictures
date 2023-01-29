import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}
