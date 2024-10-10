import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthPage from '../pages/AuthPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={AuthPage} />
      </Switch>
    </Router>
  );
};

export default Routes;