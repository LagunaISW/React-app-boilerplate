import React, { Component } from 'react';
import styles from '../InputText/InputText.css';

export default class TextArea extends Component {
  render () {
    const style = [
      styles.input,
      this.props.className
    ].join(' ');
    return (
      <textarea {...this.props} className={style}>
        {this.props.children}
      </textarea>
    );
  }
}

TextArea.defaultProps = {
  rows: '4',
  className: ''
};
