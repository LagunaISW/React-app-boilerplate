import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TopSection.css';
import TopBar from '../../../components/TopBar/TopBar';
import { ButtonLink, Container } from '../../../../common/Components';

class TopSection extends Component {
  render () {
    return (
      <div className={styles.base}>
        <TopBar landing={this.props.landing} />
        <Container className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Automatiza tu Facturación Electrónica
            </h1>
            <h2 className={styles.subtitle}>
              Nuestra poderosa API te permite programar la emisión de CFDIs válidos en minutos
            </h2>
            {!this.props.isLoggedIn &&
              <ButtonLink to='/register' buttonType='cta' size='large' className={styles.cta}>
                Regístrate gratis y obtén tu API Key
              </ButtonLink>
            }
            {this.props.isLoggedIn &&
              <ButtonLink href='/dashboard' buttonType='cta' size='large' className={styles.cta}>
                Ir al dashboard
              </ButtonLink>
            }
            <div className={styles.version}>
              CFDI versión 3.3 &#10003;
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

TopSection.defaultProps = {
  landing: false
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps)(TopSection);
