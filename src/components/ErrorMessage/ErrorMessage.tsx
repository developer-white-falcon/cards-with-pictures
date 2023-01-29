import React from 'react';
import styles from './ErrorMessage.module.scss';

export default function ErrorMessage(props: { error: string | null }) {
  if(props.error) return <p className={ styles.errorText }>{ props.error }</p>
  return null;
}
