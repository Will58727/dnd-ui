import { BrowserRouter, Route, Switch } from 'react-router-dom';
import characterGen from './CharacterGen';
import logic from './logic';
import './style.css';

function App() {
    return (
      <div className="wrapper">
        <h1>DnD.ui</h1>
        <nav>
        <ul>
          <li><a href="/characterGen">Character generator</a></li>
          <li><a href="/logic">logic</a></li>
          <li><a href="/character">character</a></li>
        </ul>
      </nav>
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

