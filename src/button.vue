<template>
    <button class="lv-button" :class="{ [`icon-${iconPosition}`]: true }">
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#icon-${icon}`" />
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
export default {
    props: ['icon', 'iconPosition'],
}
</script>
<style lang="scss">
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