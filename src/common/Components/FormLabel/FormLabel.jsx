import React, { Component } from 'react';
import styles from './FormLabel.css';

export default class FormLabel extends Component {
  render () {
    return (
      <label className={styles.label}>
        {this.props.children}
      </label>
    );
  }
}
