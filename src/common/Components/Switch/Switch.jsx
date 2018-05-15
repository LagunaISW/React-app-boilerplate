import React, { Component } from 'react';
import styles from './Switch.css';

export default class Switch extends Component {
  render () {
    const containerStyle = [
      styles.container,
      this.props.className
    ].join(' ');
    return (
      <span className={containerStyle} onClick={this.props.onClick}>
        <span className={`${styles.switch} ${this.props.isOn ? styles.active : ''}`}>
          <span className={styles.circle} />
        </span>
      </span>
    );
  }
}

Switch.defaultProps = {
  className: '',
  isOn: false,
  onClick: () => {}
};
