var React = require('react');
module.exports = React.createClass({
  render:function(){
    return <div className="second_menu_grid mdl-grid">
      <div className="text-center mdl-cell mdl-cell--3-col"></div>
      <div className="text-center mdl-cell mdl-cell--6-col">
        <label className="second_menu_checkbox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="second_menu_checkbox_tip">
          <input type="checkbox" id="second_menu_checkbox_tip" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">과외</span>
        </label>
        <label className="second_menu_checkbox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="second_menu_checkbox_str">
          <input type="checkbox" id="second_menu_checkbox_str" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">힘쓰는일</span>
        </label>
        <label className="second_menu_checkbox mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="second_menu_checkbox_etc">
          <input type="checkbox" id="second_menu_checkbox_etc" className="mdl-checkbox__input" />
          <span className="mdl-checkbox__label">기타</span>
        </label>
        <form action="#">
          <div className="mdl-textfield mdl-js-textfield">
            <input className="mdl-textfield__input" type="text" id="sample1" />
            <label className="mdl-textfield__label" for="sample1"><i className="material-icons">search</i></label>
          </div>
        </form>
      </div>
      <div className="text-center mdl-cell mdl-cell--3-col"></div>
    </div>
  }
});
