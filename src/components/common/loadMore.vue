<template>
    <div
        :class="{
            loading,
            finished:finished&&parent[dataListName]&&parent[dataListName].length>0,
            loadMore:true,
        }"
    >
        <h3>
            正在加载中
        </h3>
        <h4>
            已经到底了
        </h4>
    </div>
</template>

<script>
    import {QSA,bind,unbind,getStyle,Type} from 'js/yydjs';

    export default{
        data(){
            return{
                exist:true,
                insideParams:[1,10],
                loading:false,
                finished:false,
                onOff:true,
                firstLoaded:false,
                parentDom:null,
                childDom:null,
            }
        },

        /*
            <loadMore
                :parent="this"
                :parentClass="'parentClass'"
                :childClass="'childClass'"
                :dataListName="'dataList'"
                :api="api"
                :params="params"
            />
        */

        props:{
            parent:{//父组件的this（必填）
                required:true,
                type:Object,
                default(){
                    return {};
                },
            },
            dataListName:{//父组件data里的列表（必填）
                required:true,
                type:String,
                default:'',
            },
            parentClass:{//父组件的content元素的class（必填）
                required:true,
                type:String,
                default:'',
            },
            childClass:{//子组件的list元素的class（必填）
                required:true,
                type:String,
                default:'',
            },
            api:{//请求数据的api（必填）
                required:true,
                type:Function,
                default(){
                    return {};
                },
            },
            params:{//请求的参数
                type:Array,
                default(){
                    return [];
                },
            },
            getListFromRes:{//从返回数据里取到对应的列表
                type:Function,
                default(res){
                    return res.body;
                },
            },
            paramsAdd:{//给内部参数的page++
                type:Function,
                default:null,//(insideParams)=>{}
            },
            onceLoad:{//是否只加载一次
                type:Boolean,
                default:false,
            },
            firstLoad:{//第一次加载数据完毕（用于展示缺省页）
                type:Function,
                default:()=>{},
            },
            load:{//每次加载数据完毕回调函数
                type:Function,
                default:()=>{},
            },
            limit:{//加载数量限制
                type:[Number,String],
                default:'',
            },
        },

        created(){
            //设置请求参数
            this.setParams();
        },

        mounted(){
            //获取元素
            this.getDom();

            //第一次加载列表
            if(!this.isLimit()){
                this.getDataList();
            }else{
                if(!this.firstLoaded){
                    this.firstLoaded=true;
                    this.firstLoad&&this.firstLoad({
                        code:200,
                        body:'超过限制加载的数量',
                    });
                }
            }
        },

        beforeDestroy(){
            let {parentDom}=this;

            this.exist=false;
            if(parentDom){
                unbind(parentDom,'scroll',this.pullUpList);
            }
        },

        methods:{
            getDom(){
                let {parentClass,childClass}=this;
                let parentDom=parentClass&&QSA(`.${parentClass}`)&&QSA(`.${parentClass}`)[0];
                let childDom=childClass&&QSA(`.${childClass}`)&&QSA(`.${childClass}`)[0];

                this.parentDom=parentDom;
                this.childDom=childDom;
            },
            setParams(){
                for(let i=0;i<this.params.length;i++){
                    this.insideParams[i]=this.params[i];
                }
            },
            getDataList(endFn){
                this.api(this.insideParams,(res)=>{
                    if(!this.exist)return;
                    let {parent,dataListName,parentDom}=this;

                    if(parent&&parent[dataListName]){
                        parent[dataListName]=[].concat(parent[dataListName],this.getListFromRes(res));
                    }

                    endFn&&endFn(res);
                    if(!this.firstLoaded){
                        this.firstLoaded=true;
                        this.firstLoad&&this.firstLoad(res);

                        //上拉加载列表
                        if(parentDom){
                            !this.onceLoad&&bind(parentDom,'scroll',this.pullUpList);
                        }
                    }
                    this.load&&this.load(res);
                });
            },
            isLimit(){
                let {limit,parent,dataListName}=this;

                return (!limit&&limit!='0')||(limit&&parent&&parent[dataListName]&&parent[dataListName].length<limit)?false:true;
            },
            pullUpList(){
                let {parent,dataListName,parentDom,childDom}=this;
                let pH=parseInt(getStyle(parentDom,'height'));
                let pS=parentDom.scrollTop;
                let cH=parseInt(getStyle(childDom,'height'));
                let cT=childDom.offsetTop;
                let pHeight=parseInt(pH+pS);
                let cHeight=parseInt(cH+cT);

                if(this.onOff&&!this.finished&&pHeight+50>cHeight){
                    this.onOff=false;
                    this.loading=true;

                    if(this.paramsAdd){
                        this.paramsAdd(this.insideParams);
                    }else{
                        if(Type(this.insideParams[0])=='object'){
                            let {page,pageNo}=this.insideParams[0];

                            if(page)this.insideParams[0].page++;
                            if(pageNo)this.insideParams[0].pageNo++;
                        }else{
                            this.insideParams[0]++;
                        }
                    }

                    if(!this.isLimit()){
                        this.getDataList((res)=>{
                            this.onOff=true;
                            this.loading=false;
                            if(parent[dataListName]&&this.getListFromRes(res)&&this.getListFromRes(res).length==0){
                                this.finished=true;
                            }
                        });
                    }
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import '~css/public.scss';

    .loadMore{
        height: 50px;
        line-height: 50px;
        text-align: center;
        display: none;
        h3,h4{
            display: none;
            color: #999;
        }
        h3{
            padding-right: 30px;
            background: url('../../images/loading.gif') no-repeat right center;
            background-size: 20px;
        }
        h4{
            position: relative;
            &:before,&:after{
                content: "";
                width: 50px;
                height: 1px;
                background-color: #999;
                position: absolute;
                top: 50%;
            }
            &:before{
                left: -10px;
                transform: translate3d(-100%,0,0);
            }
            &:after{
                right: -10px;
                transform: translate3d(100%,0,0);
            }
        }
        &.loading,&.finished{
            display: block;
        }
        &.loading{
            h3{
                display: inline-block;
            }
        }
        &.finished{
            h3{
                display: none;
            }
            h4{
                display: inline-block;
            }
        }
    }
</style>