import React, { Component } from 'react';
import styles from './DropdownLink.css';
import { Link } from 'react-router-dom';

export default class DropdownLink extends Component {
  render () {
    if (this.props.to) {
      return (
        <Link className={styles.link} {...this.props}>
          {this.props.children}
        </Link>
      );
    }
    return (
      <div className={styles.link} {...this.props}>
        {this.props.children}
      </div>
    );
  }
}
