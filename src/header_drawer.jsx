var React = require('react');
module.exports = React.createClass({
  render:function(){
    return <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">Kim 님</span>
            <nav className="mdl-navigation">
              <a className="mdl-navigation__link" href="">프로필</a>
              <a className="mdl-navigation__link" href="">심부름 현황</a>
              <a className="mdl-navigation__link" href="">내가 쓴 글</a>
              <a className="mdl-navigation__link" href="">내가 쓴 댓글</a>
              <a className="mdl-navigation__link" href=""><i className="material-icons">local_post_office</i></a>
            </nav>
          </div>
  }
});
