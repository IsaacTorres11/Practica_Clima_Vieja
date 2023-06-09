import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router';
import './App.css';

//Vistas
import Home from './Paginas/Home/Home';
import WeatherInformation from './Paginas/WeatherInformation';

//jsx
function App() {

  const history =useHistory()
    
  
  return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>

          <Route path='/weather/:name' exact>
            <WeatherInformation />
          </Route>

        </Switch>
      </BrowserRouter>
  );
}

export default App;
