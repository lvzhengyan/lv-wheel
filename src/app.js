import Vue from 'vue';
import Button from './button';
import Icon from './icon';

Vue.component('lv-button', Button);
Vue.component('lv-icon', Icon);

new Vue({
    el: '#app'
});
