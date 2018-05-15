import React, { Component } from 'react';
import styles from './SearchBox.css';

export default class SearchBox extends Component {
  constructor (props) {
    super(props);
    this.state = { value: props.value || '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onClear = this.onClear.bind(this);
    this.focus = this.focus.bind(this);
  }
  focus () {
    this.searchInput.focus();
  }
  onClear () {
    this.setState({ value: '' }, function () {
      this.props.onChange(this.state.value);
      this.focus();
    });
  }
  onInputChange (e) {
    this.setState({ value: e.target.value }, function () {
      this.props.onChange(this.state.value);
    });
  }
  componentWillReceiveProps (newProps) {
    if ((newProps.value || newProps.value === '') && newProps.value !== this.state.value) {
      this.setState({ value: newProps.value || '' }, () => {
        this.props.onChange(this.state.value);
      });
    }
  }
  render () {
    const componentStyle = [
      styles.container,
      this.props.className
    ].join(' ');
    return (
      <div className={componentStyle}>
        <i className={`fa fa-search ${styles.searchIcon}`} onClick={this.focus} />
        <input
          type='text'
          placeholder={this.props.placeholder}
          className={styles.input}
          onChange={this.onInputChange}
          value={this.state.value}
          ref={(input) => { this.searchInput = input; }} />
        {this.state.value &&
          <i className={`fa fa-times ${styles.clearButton}`} onClick={this.onClear} />
        }
      </div>
    );
  }
}

SearchBox.defaultProps = {
  className: '',
  onChange: () => {},
  placeholder: 'Buscar'
};
