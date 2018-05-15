import React, { Component } from 'react';
import styles from './ResultLabel.css';

export default class ResultLabel extends Component {
  constructor (props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
  }
  getStyle () {
    switch (this.props.result.type) {
      case 'error':
        return styles.error;
      case 'success':
        return styles.success;
      default:
        return '';
    }
  }
  render () {
    if (!this.props.result) return null;
    const labelStyle = [
      styles.base,
      this.getStyle(),
      this.props.className
    ].join(' ');
    return (
      <div className={labelStyle}>{this.props.result.message}</div>
    );
  }
}

ResultLabel.defaultProps = {
  className: ''
};
