<template>
    <div class="hw-field" :class="{'hw-field-hasIcon': !!icon, 'hw-filed-isError': isError}">
        <van-icon v-if="icon" :name="icon" class="hw-field-icon"></van-icon>
        <div class="hw-field-control">
            <input
                    :type="type"
                    v-on="listeners"
                    v-bind="$attrs"
                    :value="value"
            >
        </div>
        <div>
            <slot name="rightIcon">
                <van-icon :name="rightIcon" @click="rightClick" v-show="value"></van-icon>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hw-field",
        props: {
            value: {},
            icon: String,
            isError: Boolean,
            type: {
                type: String,
                default: 'text'
            },
            rightIcon: String
        },
        computed: {
            listeners(){
                return {
                    ...this.$listeners,
                    input: this.onInput
                }
            }
        },
        methods: {
            onInput(event){
                this.$emit('input', event.target.value)
            },
            rightClick(event){
                this.$emit('right-click', event)
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styles/common";
    .hw-field{
        position: relative;
        border: 1px solid $border-color;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        display: table;
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        > div{
            display: table-cell;
        }
        > .hw-field-control{
            padding-right: 10px;
            box-sizing: border-box;
            input{
                border: 0;
                line-height: 14px;
                font-size: 14px;
                width: 100%;
            }
        }
        .hw-field-icon{
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translate(0, -50%)
        }
    }
    .hw-field-hasIcon{
        padding-left: 40px;
    }
    .hw-field-isError{
        color: $red;
        background-color: #fcf5f5;
        border: 1px solid $red;
        input{
            color: $red;
            background-color: #fcf5f5;
        }
    }
</style>
