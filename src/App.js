import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { ContactApp } from './pages/ContactApp';
import { ContactDetails } from './pages/ContactDetails/ContactDetails';
import { ContactEdit } from './pages/ContactEdit';
import { HomePage } from './pages/HomePage/HomePage'
import { StatisticPage } from './pages/StatisticPage/StatisticPage'

export function App() {
  // const PrivateRoute = (props) => {
  //   return props.isAdmin ? <Route component={props.component} path={props.path} /> : <Redirect to="/" />
  // }
  return (
    <Router>
      <div className="App">
        <AppHeader />
        <Switch>
          <Route component={ContactEdit} path='/contact/edit/:id?' />
          <Route component={ContactDetails} path='/contact/:id' />
          <Route component={StatisticPage} path='/statistics' />
          <Route component={ContactApp} path='/contact' />
          <Route component={HomePage} path='/' />
        </Switch>
      </div>
    </Router>
  );
}

