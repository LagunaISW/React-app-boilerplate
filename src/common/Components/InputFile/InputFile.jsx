import React, { Component } from 'react';
import styles from './InputFile.css';

const getFileExtension = (filename) => {
  const splittedFilename = filename.name.split('.');
  return splittedFilename[splittedFilename.length - 1];
};

export default class InputFile extends Component {
  constructor (props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange (e) {
    if (e.target.files.length <= 0) return this.props.onChange(null);
    const file = e.target.files[0];
    const extension = getFileExtension(file);
    if (this.props.accept.length > 0 && !this.props.accept.includes(extension)) {
      return this.props.onFail(new Error('Incorrect file format'));
    }
    this.props.onChange(file);
  }
  render () {
    return (
      <label className={styles.button}>
        <input required={this.props.required} accept={this.props.accept.map(a => `.${a}`).join(',')} onChange={this.onInputChange} className={styles.input} type='file' />
        {this.props.children}
      </label>
    );
  }
}

InputFile.defaultProps = {
  className: '',
  accept: [],
  onChange: () => {},
  onFail: () => {},
  required: false
};
