<template>
    <button class="lv-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
        <lv-icon v-if="icon && !loading" :icon-name="icon" class="icon"></lv-icon>
        <lv-icon v-if="loading" class="loading icon" icon-name="loading"></lv-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props: {
        icon: {},
        loading: {
            type: Boolean,
            default: false
        },
        iconPosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                // 校验 iconPosition，防止用户定义除 left（默认） 和 right 的方向
                return value !== 'left' || value !== 'right';
            }
        }
    }
}
</script>
<style lang="scss">
@keyframes loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
.lv-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    /* 一般内联元素对不齐，加上 vertical-align 为 middle 或者 top，只要不是默认值 baseline 即可 */
    vertical-align: top;
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--button-bg);
    .icon {
        height: 1em;
        width: 1em;
        order: 1;
        margin-right: 0.2em;
    }
    .content {
        order: 2;
    }
    &.icon-right {
        .icon {
            order: 2;
            margin-left: 0.2em;
            margin-right: 0;
        }
        .content {
            order: 1;
        }
    }
    .loading {
        animation: loading 2s infinite linear;
    }
    &:hover {
        border-color: var(--border-color-hover);
    }
    &:active {
        background-color: var(--button-active-bg);
    }
    &:focus {
        outline: none;
    }
}
</style>