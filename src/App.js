import './App.scss';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurant/restaurant.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  unsubscribeFromAuth = null



  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* Header Component*/}
        <Header />
        {/* Switch Component*/}
        <Switch>
          {/* Route to Home Page Component*/}
          <Route exact path='/' component={HomePage} />
          {/* Route to Food Page Component*/}
          <Route path='/restaurant' component={RestaurantPage} />
          {/* Route to Sign In and Sign Up Page Component | Redirects is user is signed in*/}
          <Route exact path='/signin' render={() =>
            this.props.currentUser ?
              (<Redirect to='/' />) :
              (<SignInSignUp />)} />
        </Switch>
      </div>
    );

  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
