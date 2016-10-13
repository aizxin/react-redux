import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Page1, Page2, Link } from '../../components';
class App extends Component {
    render () {
        return (
        	<DocumentTitle title="Ant Design Mobile | 移动端设计规范">
            <div className="main-wrapper">
            	<Link />
	        	<Page1 />
	        	<Page2 />
	        	<style dangerouslySetInnerHTML={{ __html: getStyle() }} />
	      	</div>
	      	</DocumentTitle>
        );
    }
}
function getStyle() {
  return `
    #react-content,
    #react-content > div {
      height: 100%;
    }
    .main-wrapper {
      background: transparent;
      width: auto;
      margin: 0;
      border-radius: 0;
      padding: 0;
      overflow: unset;
      display: inline;
      min-height: 600px;
    }
    #header {
      position: fixed;
      z-index: 999;
      background: rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid transparent;
      transition: border .5s cubic-bezier(0.455, 0.03, 0.515, 0.955), background .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    #header .ant-select-selection,
    #header .ant-menu {
      background: transparent;
    }
    #header.home-nav-white {
      background: rgba(255, 255, 255, 0.9);
      border-bottom-color: #EBEDEE;
    }
    .home-nav-white #search-box {
      border-left-color: #EBEDEE;
    }
    .home-nav-white #nav a {
      color: #666;
    }
    .home-nav-white .lang:not(:hover) {
      color: #666;
      border-color: #666;
    }
    .nav-phone-icon:before {
      background: #eee;
      box-shadow: 0 7px 0 0 #eee, 0 14px 0 0 #eee;
    }
    .home-nav-white .nav-phone-icon:before {
      background: #777;
      box-shadow: 0 7px 0 0 #777, 0 14px 0 0 #777;
    }
    .lang,
    #nav a {
      color: #eee;
      transition: color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    #search-box {
      border-left-color: rgba(235, 237, 238, .5);
      transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    section {
      height: 100%;
      width: 100%;
      background: #fff;
    }
    #footer {
      background: #000;
    }
    #footer,
    #footer h2 {
      color: #999;
    }
    #footer a {
      color: #eee;
    }
    .down {
      animation: upDownMove 1.2s ease-in-out infinite;
    }
  `;
}
export default App;