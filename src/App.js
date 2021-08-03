import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import RestaurantPage from './pages/restaurant/restaurant.component';
import Header from './components/header/header.component';
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
      </Switch>
    </div>
  );
}

export default App;
