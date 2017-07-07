import { Router, Route, IndexRoute, hashHistory,Link } from 'react-router';
import { setup, LogicRender } from 'refast';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import FastClick from 'fastclick';
import { isDev } from 'variables';
import reducers from '../reducers/index';
import PageHome from 'pages/home';
import Index from 'pages/index';
const { TabBar } = window.SaltUI;

if (isDev && window.chrome && window.chrome.webstore) { // This is a Chrome only hack
  // see https://github.com/livereload/livereload-extensions/issues/26
  setInterval(() => {
    document.body.focus();
  }, 200);
}
const store = createStore(reducers, {}, applyMiddleware(thunk));
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }
    console.log(this.props)
  }
  render() {
    const onChange = (activeIndex)=> {
      if(activeIndex == 0){
        hashHistory.push('/index')
      }
      console.log(activeIndex);
    };
    const tabBarItemStyle = {
      titleStyle: { color: '#333', },
      titleActiveStyle: { color: '#3671D6', },
      iconStyle: { fill: '#333', },
      iconActiveStyle: { fill: '#3671D6', }
    };
    return (
      <div>
      {this.props.children}
      <TabBar activeIndex={this.state.activeIndex} onChange={onChange.bind(this)}>
        <TabBar.Item {...tabBarItemStyle} title="管理首页"></TabBar.Item>
        <TabBar.Item {...tabBarItemStyle} title="我的敬业福"></TabBar.Item>
      </TabBar>
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route name="app" path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="page1" component={PageHome}></Route>
        <Route path="index" component={Index}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('App'),
);
