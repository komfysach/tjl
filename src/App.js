import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurant/restaurant.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div class="App">
      {/* Header Component*/}
      <Header />
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

export default App;
