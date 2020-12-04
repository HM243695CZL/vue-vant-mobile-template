<template>
    <div class="hw-field-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "hw-field-group"
    }
</script>

<style scoped lang="scss">
    .hw-field-group{
        padding-right: 15px;
        padding-left: 15px;
        > div{
            margin-bottom: 15px;
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
</style>
