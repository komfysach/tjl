import './App.scss';
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurant/restaurant.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* Header Component*/}
        <Header currentUser={this.state.currentUser} />
        {/* Switch Component*/}
        <Switch>
          {/* Route to Home Page Component*/}
          <Route exact path='/' component={HomePage} />
          {/* Route to Food Page Component*/}
          <Route path='/restaurant' component={RestaurantPage} />
          {/* Route to Sign In and Sign Up Page Component*/}
          <Route path='/signin' component={SignInSignUp} />
        </Switch>
      </div>
    );

  }
}

export default App;
