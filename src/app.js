import Vue from 'vue';
import Button from './button';
import ButtonGroup from './buttonGroup';
import Icon from './icon';

Vue.component('lv-button', Button);
Vue.component('lv-button-group', ButtonGroup);
Vue.component('lv-icon', Icon);

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});
