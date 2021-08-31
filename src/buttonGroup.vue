<template>
    <div class="lv-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    mounted() {
        for (let node of this.$el.children) {
            let name = node.nodeName.toLowerCase();
            if (name !== 'button') {
                console.warn('lv-button-grounp 的子元素应该全为 lv-button');
            }
        }
    }
}
</script>
<style lang="scss">
.lv-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .lv-button {
        border-radius: 0;
        &:not(:firtst-child) {
            margin-left: -1px;
        }
        &:first-child {
            border-top-left-radius: var(--border-radius);
            border-bottom-left-radius: var(--border-radius);
        }
        &:last-child {
            border-top-right-radius: var(--border-radius);
            border-bottom-right-radius: var(--border-radius);
        }
        &:hover {
            position: relative;
            z-index: 1;
        }
    }
}
</style>