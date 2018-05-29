import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import lodable from 'react-loadable';

import AppFrame from './AppFrame';

/**
 * Return router
 * @return {Router}
 */
export default class Router extends React.Component {
  /**
   * @param  {Object} props
   */
  constructor(props) {
    super(props);

    this.ButtonGroup = lodable({
      loader: () => {
        return import('./ButtonGroup');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Chip = lodable({
      loader: () => {
        return import('./Chip');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Dialog = lodable({
      loader: () => {
        return import('./Dialog');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Snackbar = lodable({
      loader: () => {
        return import('./Snackbar');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Stepper = lodable({
      loader: () => {
        return import('./Stepper');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Table = lodable({
      loader: () => {
        return import('./Table');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });

    this.Theme = lodable({
      loader: () => {
        return import('./Theme');
      },
      loading: () => {
        return <div>Loading...</div>;
      },
    });
  }

  /**
   * @return {Component}
   */
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AppFrame
            navs={[{
              icon: <use xlinkHref="#icon-icon_line"></use>,
              matchPath: '/buttonGroup',
              path: '/buttonGroup',
              text: 'ButtonGroup',
            }, {
              icon: <use xlinkHref="#icon-icon_board"></use>,
              matchPath: '/chip',
              path: '/chip',
              text: 'Chip',
            }, {
              icon: <use xlinkHref="#icon-icon_board"></use>,
              matchPath: '/dialog',
              path: '/dialog',
              text: 'Dialog',
            }, {
              icon: <use xlinkHref="#icon-icon_board"></use>,
              matchPath: '/snackbar',
              path: '/snackbar',
              text: 'Snackbar',
            }, {
              icon: <use xlinkHref="#icon-icon_board"></use>,
              matchPath: '/stepper',
              path: '/stepper',
              text: 'Stepper',
            }, {
              icon: <use xlinkHref="#icon-icon_car"></use>,
              matchPath: '/table',
              path: '/table',
              text: 'Table',
            }, {
              icon: <use xlinkHref="#icon-icon_changz"></use>,
              matchPath: '/theme',
              path: '/theme',
              text: 'Theme',
            }]}
            rootUrl={{
              matchPath: '/buttonGroup',
              path: '/buttonGroup',
            }}
          >
            <Route exact path='/' render={() => (
              <Redirect to='/buttonGroup' />
            )} />
            <Route exact path='/buttonGroup' component={this.ButtonGroup} />
            <Route exact path='/chip' component={this.Chip} />
            <Route exact path='/dialog' component={this.Dialog} />
            <Route exact path='/snackbar' component={this.Snackbar} />
            <Route exact path='/stepper' component={this.Stepper} />
            <Route exact path="/table" component={this.Table}></Route>
            <Route exact path="/theme" component={this.Theme}></Route>
          </AppFrame>
        </Switch>
      </BrowserRouter>
    );
  }
}
