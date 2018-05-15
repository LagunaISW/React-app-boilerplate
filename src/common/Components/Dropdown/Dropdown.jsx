import React, { Component } from 'react';
import styles from './Dropdown.css';

export default class Dropdown extends Component {
  constructor (props) {
    super(props);
    this.state = { isOpen: false };
    this.toggleOpen = this.toggleOpen.bind(this);
  }
  componentWillReceiveProps (newProps) {
    if (newProps.isOpen !== this.state.isOpen) {
      this.toggleOpen();
    }
  }
  toggleOpen () {
    this.setState({ isOpen: !this.state.isOpen }, () => {
      this.props.onChange(this.state.isOpen);
    });
  }
  render () {
    const containerStyle = [
      styles.container,
      this.props.className
    ].join(' ');
    const overlayStyle = [
      styles.overlay,
      styles[this.props.placement],
      this.state.isOpen ? styles.open : ''
    ].join(' ');
    return (
      <div className={containerStyle} onClick={this.toggleOpen}>
        <div>
          {this.props.children}
        </div>
        <div className={overlayStyle}>
          {this.props.overlay}
        </div>
        {this.state.isOpen &&
          <div className={styles.dismiss} />
        }
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: '',
  trigger: 'click',
  placement: 'bottomRight',
  isOpen: false,
  onChange: (isOpen) => {}
};
