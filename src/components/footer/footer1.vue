<template>
    <footer class="footer1">
        <div class="footerWrap">
            底部
        </div>
    </footer>
</template>

<script>
    export default{
        props:{

        },

        methods:{

        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .footer1{
        height: 50px;
        background-color: #fff;
        border-top: $border1;
        .footerWrap{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 100;
        }
    }
</style>