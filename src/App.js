import React from 'react';
import s from './App.module.scss';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { Route, withRouter, BrowserRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login.jsx';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Loader from './components/Users/Loader';
import store from './redux/redux-store';
import 'fontsource-roboto';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (this.props.initialized) {
      return <Loader />;
    }

    return (
      <div className={s.app}>
        <HeaderContainer />
        <Navbar />
        <Route
          className={s.links}
          path="/profile/:userId?"
          render={() => <ProfileContainer />}
        />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(null, { mapStateToProps, initializeApp })
)(App);

const SamuraiJSApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />  
      </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;
