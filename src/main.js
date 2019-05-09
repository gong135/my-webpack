import Vue from 'vue';
import App from './App';
import Router from './router/index';


/* eslint-disable no-new */
window.root = new Vue({
  el: '#app',
  Router,
  render: h => h(App),
});
