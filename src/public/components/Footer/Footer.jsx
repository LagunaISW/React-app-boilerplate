import React, { Component } from 'react';
import styles from './Footer.css';
import { Container } from '../../../common/Components';

export default class Footer extends Component {
  render () {
    return (
      <div className={styles.base}>
        <Container className={styles.container}>
          <span>
            &copy; {(new Date()).getFullYear()} Facturapi. Todos los derechos reservados.
          </span>
          <a href='mailto:contacto@facturapi.io'>
            contacto@facturapi.io
          </a>
        </Container>
      </div>
    );
  }
}
