<template>
    <svg class="icon">
        <use :xlink:href="`#icon-${iconName}`" />
    </svg>
</template>
<script>
export default {
    props: ['iconName']
}
</script>
<style lang="scss">
</style>