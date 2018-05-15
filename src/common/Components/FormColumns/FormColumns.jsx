import React, { Component } from 'react';
import styles from './FormColumns.css';

export default class FormColumns extends Component {
  render () {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}
