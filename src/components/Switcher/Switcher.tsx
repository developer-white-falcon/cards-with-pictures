import React from 'react';
import styles from './Switcher.module.scss';

function Switcher(props: {
  onChange: (value: boolean) => void,
}) {

  return (
    <label className={ styles.switcherWrapper }>
      <input
        type='checkbox'
        className={ styles.input }
        onChange={ (event) => props.onChange(event.target.checked) }
      />
      <span className={ styles.switcher } />
    </label>
  )
}

export default Switcher;
