var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Layout = require('./layout');
var SecondMenu = require('./second_menu');
var CommunityView = require('./community_view');
var LoginView = require('./login_view');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Layout}>
      <Route path="errand" component={SecondMenu}/>
      <Route path="community" component={CommunityView}/>
      <Route path="login" component={LoginView}/>
    </Route>
  </Router>
);
