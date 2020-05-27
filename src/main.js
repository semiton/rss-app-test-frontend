import Vue from 'vue';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMaterial);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

Vue.material = {
    ...Vue.material,
    locale: {
        ...Vue.material.locale,
        dateFormat: 'yyyy-MM-dd',
        firstDayOfAWeek: 1,
    },
};

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
