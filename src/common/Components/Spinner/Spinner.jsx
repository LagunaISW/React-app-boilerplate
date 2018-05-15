import React, { Component } from 'react';
import styles from './Spinner.css';

export default class Spinner extends Component {
  render () {
    const style = [styles.spinner, this.props.className].join(' ');
    const ballStyle = { backgroundColor: this.props.color };
    return (
      <div className={style}>
        <div className={styles.bounce1} style={ballStyle} />
        <div className={styles.bounce2} style={ballStyle} />
        <div className={styles.bounce3} style={ballStyle} />
      </div>
    );
  }
}

Spinner.defaultProps = {
  className: '',
  color: '#818899'
};
