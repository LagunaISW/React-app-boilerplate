import React, { Component } from 'react';
import styles from './Button.css';

export default class Button extends Component {
  render () {
    const buttonStyles = [
      styles.base,
      styles[this.props.buttonType],
      styles[this.props.size],
      this.props.block ? styles.block : '',
      this.props.className,
      this.props.round ? styles.round : ''
    ].join(' ');
    return (
      <button type={this.props.type} className={buttonStyles} onClick={this.props.onClick} form={this.props.form}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  buttonType: 'default',
  className: '',
  block: '',
  type: 'submit',
  size: 'normal',
  form: undefined,
  round: false
};
