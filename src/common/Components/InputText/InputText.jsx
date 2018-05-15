import React, { Component } from 'react';
import styles from './InputText.css';

export default class InputText extends Component {
  renderImput (props) {
    const { size, inputRef, className, borderless, ...inputProps } = props;
    return (
      <input
        {...inputProps}
        className={`${styles.input} ${styles[size]} ${className} ${borderless ? styles.borderless : ''}`}
        ref={inputRef} />
    );
  }
  render () {
    const { icon, ...inputProps } = this.props;
    if (!icon) return this.renderImput(inputProps);
    return (
      <div className={`${styles.inputContainer} ${styles[inputProps.size]}`}>
        {this.renderImput(inputProps)}
        <i className={`fa fa-${icon}`} />
      </div>
    );
  }
}

InputText.defaultProps = {
  type: 'text',
  className: '',
  icon: '',
  size: 'normal',
  borderless: false
};
