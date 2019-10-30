<template>
    <div class="eInput">
        <input v-model="modelValue" :type="eType?'text':type" :eType="eType" :maxlength="maxlength" @focus="focusFn" @blur="blurFn" @input="inputFn" @change="changeFn" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            regJson: { //输入字符串过滤类型正则
                int: /[0-9]+/g, //整型
                number: /[0-9\.]+/g, //数字
                aa: /[a-z]+/g, //小写字母
                AA: /[A-Z]+/g, //大写字母
                aA: /[a-zA-Z]+/g, //字母
                aa1: /[a-z0-9]+/g, //小写字母或数字
                AA1: /[A-Z0-9]+/g, //大写字母或数字
                aA1: /\w+/g, //字母和数字
                zh: /[\u2E80-\u9FFF]+/g, //中文
                zhEn: /[\u2E80-\u9FFFa-zA-Z]+/g, //中文或英文
                mobile: /[0-9]+/g, //手机号
                identity: /[\dxX]+/g, //身份证号码
                bankCard: /[0-9]+/g, //银行卡号
                user: /[\w-]+/g, //用户名
                password: /[^\u2E80-\u9FFF\s]+/g, //密码
                email: /[\w\.-@]+/g, //邮箱
                verifyCode: /[0-9]+/g, //6位数字验证码
            },
        }
    },

    /*
        <eInput type="number" eType="number" v-model="text" />
    */

    model: { //v-model对应的prop和event
        prop: 'modelValue',
        event: 'updateInput',
    },

    props: {
        modelValue: { //v-model的prop
            type: [String, Number],
            default: '',
        },
        type: { //原生type
            type: String,
            default: 'text',
        },
        eType: { //输入框的强制类型，如果存在强制类型，则原生类型为text，但是输入不符合强制类型的字符串会被过滤
            type: String,
            default: '',
        },
        maxlength: { //原生maxlength
            type: [String, Number],
            default: '',
        },
    },

    created() {
        //执行一遍输入字符串过滤
        this.inputFn();
    },

    methods: {
        focusFn() {
            this.$emit('focus', this.modelValue);
        },
        blurFn() {
            this.$emit('blur', this.modelValue);
        },
        inputFn() {
            let { eType, regJson } = this;
            let reg = regJson[eType];

            if (reg) {
                let matchResult = this.modelValue.match(reg) || [];

                matchResult = matchResult[0] ? matchResult[0] : '';
                if (eType == 'number') {
                    let arr = matchResult.split('.');

                    if (arr.length > 1) {
                        let dotLeft = arr.splice(0, 1);

                        arr = [].concat(dotLeft, ['.'], arr);
                        arr = arr.join('');
                        matchResult = arr;
                    }
                }
                this.modelValue = matchResult;
            }

            this.$emit('input', this.modelValue);
            this.$emit('updateInput', this.modelValue);
        },
        changeFn() {
            this.$emit('change', this.modelValue);
        },
    },
}

</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.eInput {
    width: 100%;
    height: 40px;
    >input {
        width: 100%;
        height: 100%;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        &:focus {
            border-color: #409EFF;
        }
    }
}

</style>
