import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styles from './Main.css';
import e404 from '../../../common/ErrorPages/e404';
import * as screens from './../../screens';

class Main extends Component {
  render () {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <Switch>
            <Route exact path='/' component={screens.LandingContainer} />
            <Route path='*' component={e404} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
