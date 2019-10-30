<template>
    <div>
        <section class="content1">
            <!-- <richTextEdit
                :confirm="confirm"
            /> -->
            <eInput type="number" eType="number" v-model="text" />
            {{text}}
        </section>
    </div>
</template>
<script>
import richTextEdit from 'components/common/richTextEdit';
import eInput from 'components/common/eInput';
import { setPromise } from 'js/yydjs';

export default {
    data() {
        return {
            hint: '提示',
            text: '订单',
        }
    },

    mounted() {
        let This = this;

        // setPromise(allProvince,function(data){
        //  console.log(data);
        // })
        // .then(function(data){
        //  console.log(data);
        //  return setPromise(allCity);
        // }).then(function(data){
        //  console.log(data);
        // });
    },

    methods: {
        alerts1() {
            console.dir(this)
            this.$refs.toast1.show = true
            this.hint = '这个是弹窗'
        },
        confirm(res) {
            console.log(res);
        },
        inputFn(value) {
            console.log(value);
        },
    },

    components: {
        richTextEdit,
        eInput,
    },
}

</script>
<style lang="scss" scoped>
@import '~css/public.scss';

.nav1 ul li {
    float: left;
    width: .8rem;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
}

</style>
