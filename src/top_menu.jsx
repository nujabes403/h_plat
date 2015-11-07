var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
  render:function(){
    return <div className="top_menu_grid mdl-grid">
      <div className="text-center mdl-cell mdl-cell--6-col">
        <Link to="errand">
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
          <span className="top_menu_title">
            <i className="material-icons">directions_run</i>
            심부름
          </span>
        </button>
        </Link>
        </div>
      <div className="text-center mdl-cell mdl-cell--6-col">
      <Link to="community">
        <button className="mdl-button mdl-js-button mdl-js-ripple-effect">
          <span className="top_menu_title">
          <i className="material-icons">people</i>
          잡담
          </span>
        </button>
      </Link>
        <span className="top_menu_button">
        <button className="pull-right mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          심부름 등록
        </button>
        </span>
      </div>
    </div>
  }
});
