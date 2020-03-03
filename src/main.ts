import Vue from 'vue';
import App from './App.vue';
import './plugins/service';
import router from './plugins/router';

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
