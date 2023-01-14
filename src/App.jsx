import { BrowserRouter, Route, Switch } from 'react-router-dom';
import characterGen from './CharacterGen';
import logic from './logic';
import './style.css';

function App() {
    return (
      <div className="wrapper">
        <h1>Marine Mammals</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/characterGen">
              <characterGen />
            </Route>
            <Route path="/logic">
              <logic />
            </Route>
            <Route path="/character">
              <character />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  

}

export default App;

