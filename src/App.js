import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const FoodPage = () => (
  <div>
    <h1> Food </h1>
  </div>
);

function App() {
  return (
    <div class="App">
      {/* Switch Component*/}
      <Switch>
        {/* Route to Home Page Component*/}
        <Route exact path='/' component={HomePage} />
        {/* Route to Food Page Component*/}
        <Route path='/food' component={FoodPage} />
      </Switch>
    </div>
  );
}

export default App;
