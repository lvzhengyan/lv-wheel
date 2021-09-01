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

// 单元测试 - settings
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    button.$mount();
    const useElement = button.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#icon-settings');
}

// loading
{
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    button.$mount();
    const useElement = button.$el.querySelector('use');
    const href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#icon-loading');
}

// iconPosition
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const button = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    });
    button.$mount(div);
    const svg = button.$el.querySelector('svg');
    const { order } = window.getComputedStyle(svg);
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
}

// @click
{
    const Constructor = Vue.extend(Button);
    const lvButton = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    lvButton.$mount();
    const spy = chai.spy(() => {});
    lvButton.$on('click', spy);
    const button = lvButton.$el;
    button.click();
    expect(spy).to.have.been.called();
}
