var React = require('react');
module.exports = React.createClass({
  render:function(){
    return <div className="second_menu_grid mdl-grid">
      <div className="text-center mdl-cell mdl-cell--3-col"></div>
      <div className="text-center mdl-cell mdl-cell--6-col">
        <form>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="sample1" />
            <label className="mdl-textfield__label" for="sample1">ID</label>
          </div>
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2" />
            <label className="mdl-textfield__label" for="sample2">PASSWORD</label>
            <span className="mdl-textfield__error">Input is not a number!</span>
          </div>
          <div>
          <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
            Login
          </button>
          </div>
        </form>
      </div>
      <div className="text-center mdl-cell mdl-cell--3-col"></div>
    </div>
  }
})
