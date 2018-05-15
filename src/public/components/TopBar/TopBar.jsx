import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './TopBar.css';
import { Container, ButtonLink } from '../../../common/Components';
import { Link as ScrollLink } from 'react-scroll';

class TopBar extends Component {
  constructor (props) {
    super(props);
    this.state = { isMenuVisible: false };
    this.onToggleMenu = this.onToggleMenu.bind(this);
  }
  onToggleMenu () {
    this.setState({ isMenuVisible: !this.state.isMenuVisible });
  }
  render () {
    return (
      <Container className={styles.topBar}>
        <Link to='/' className={`${styles.logo} ${this.props.landing ? '' : styles.clear}`} />
        <ul className={`${styles.menu} ${this.state.isMenuVisible ? styles.visible : ''}`}>
          <li>
            <Link to='/pricing' className={styles.link}>Precios</Link>
          </li>
          <li>
            {this.props.landing &&
              <ScrollLink smooth to='contact' className={styles.link}>
                Contacto
              </ScrollLink>
            }
            {!this.props.landing &&
              <Link to='/' className={styles.link}>
                Contacto
              </Link>
            }
          </li>
          <li>
            <a href='http://docs.facturapi.io' target='_blank' className={styles.link}>
              Documentación
              <i className='fa fa-external-link' />
            </a>
          </li>
          {this.props.isLoggedIn &&
            <li>
              <ButtonLink href='/dashboard' buttonType='cta' className={`${styles.button} ${styles.link}`}>Ir a dashboard</ButtonLink>
            </li>
          }
          {!this.props.isLoggedIn &&
            <li>
              <ButtonLink to='/login' buttonType='cta' className={`${styles.button} ${styles.link}`}>Inicia sesión</ButtonLink>
            </li>
          }
        </ul>
      </Container>
    );
  }
}

TopBar.defaultProps = {
  landing: false
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
