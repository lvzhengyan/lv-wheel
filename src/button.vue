<template>
    <button class="lv-button">按钮</button>
</template>
<script>
export default {}
</script>
<style lang="scss">
.lv-button {
    height: var(--button-height);
    font-size: var(--font-size);
    padding: 0 1em;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--button-bg);
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