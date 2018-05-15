import React, { Component } from 'react';
import styles from './Landing.css';
import TopSection from './TopSection/TopSection';
import ContactSectionContainer from './ContactSection/ContactSectionContainer';
import Footer from '../../components/Footer/Footer';

export default class Landing extends Component {
  render () {
    return (
      <div className={styles.base}>
        <TopSection landing />
        <ContactSectionContainer />
        <Footer />
      </div>
    );
  }
}
