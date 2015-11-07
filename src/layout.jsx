var React = require('react');
var Header = require('./header');
var Header_drawer = require('./header_drawer');
var Menus = require('./menus');
module.exports = React.createClass({
  getInitialState: function() {
    return {
      logined:false
    };
  },
  render:function(){
      return (
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Header loginState={this.state.logined} />
        <Header_drawer />
        <main className="mdl-layout__content">
            <div className="page-content">
              <Menus />
              {this.renderRoute()}
            </div>
        </main>
        </div>
        );
  },
  renderRoute:function(){
    return this.props.children;
  }
});
