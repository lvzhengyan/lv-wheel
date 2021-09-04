import Vue from 'vue';
import Button from './button';
import ButtonGroup from './buttonGroup';
import Icon from './icon';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);

Vue.component('lv-button', Button);
Vue.component('lv-button-group', ButtonGroup);
Vue.component('lv-icon', Icon);

new Vue({
    el: '#app',
    data: {
        loading1: false
    }
});
