import React, { Component } from 'react';
import styles from './Table.css';

export default class Table extends Component {
  render () {
    const style = [
      styles.base,
      this.props.className
    ].join(' ');
    return (
      <table className={style}>
        {this.props.children}
      </table>
    );
  }
}

Table.defaultProps = {
  className: ''
};
