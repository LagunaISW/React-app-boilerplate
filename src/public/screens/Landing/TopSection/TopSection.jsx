import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './TopSection.css';
import TopBar from '../../../components/TopBar/TopBar';
import { Container } from '../../../../common/Components';

class TopSection extends Component {
  render () {
    return (
      <div className={styles.base}>
        <TopBar landing={this.props.landing} />
        <Container className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              React App
            </h1>
            <h2 className={styles.subtitle}>
              This is a good place to start.
            </h2>
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
  isLoggedIn: false
});

export default connect(mapStateToProps)(TopSection);
