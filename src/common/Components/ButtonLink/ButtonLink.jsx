import React, { Component } from 'react';
import styles from '../Button/Button.css';
import { Link } from 'react-router-dom';

export default class ButtonLink extends Component {
  render () {
    const { block, buttonType, size, className, ...linkProps } = this.props;
    const buttonStyles = [
      styles.base,
      styles[this.props.buttonType],
      this.props.block ? styles.block : '',
      styles[this.props.size],
      this.props.className
    ].join(' ');
    if (this.props.to) {
      return (
        <Link {...linkProps} className={buttonStyles}>
          {this.props.children}
        </Link>
      );
    }
    return <a {...linkProps} className={buttonStyles}>{this.props.children}</a>;
  }
}

ButtonLink.defaultProps = {
  buttonType: 'default',
  className: '',
  block: '',
  size: 'normal'
};
