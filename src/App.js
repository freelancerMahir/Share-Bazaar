import styled from 'styled-components'
import { BrowserRouter as
    Router, 
    Switch,
    Route } from 'react-router-dom'
import Starter from './components/Starter'
import Signup from './components/Signup'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Starter />
          </Route>
          <Route path="/auth">
            <Signup />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
