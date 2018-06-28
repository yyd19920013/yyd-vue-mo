<template>
	<div class="infomationIndex">
		<header1 title="资讯详情"></header1>

		<section class="content">
			<div class="htmlWrap">
				<img style="width:100%;" src="/static/images/newsImg.png" alt="图片">
			</div>

			<div class="commentWrap">
				<div class="title">
					最新评论
				</div>

				<div class="defaultText">
					您对这条资讯有什么看法？
				</div>

				<ul class="commentList">
					<li v-for="(commentList,index) in 5">
						<router-link :to="{path:'/infomation/commentDetail',query:{}}">
							<img src="/static/images/defaultPerson.png" alt="头像">
							<div class="infoWrap">
								<div class="title">
									<span>ID207581</span>
								</div>
								<div class="main">
									<div class="text">
										没上车打撒爱上的阿萨德案发生大污染共分为
									</div>
								</div>
								<div class="end">
									<span>刚刚</span>
									&nbsp·&nbsp
									<span>回复</span>
								</div>
							</div>
						</router-link>
						<b class="like">0</b>
						<b @click="deleteComment(index)" class="delete">删除</b>
					</li>
				</ul>

				<div class="loading">
					<span>正在加载中...</span>
					<em>全部加载完毕...</em>
				</div>
			</div>

			<div class="pubComment">
				<span @click="showInput=true">发表评论...</span>
				<em>
					<i>99+</i>
				</em>
			</div>

			<x-dialog :hide-on-blur="true" v-model="showInput" :dialog-style="{'width':'100%','max-width':'none','text-align':'left'}">
				<div class="inputWrap"> 
					<div class="title">
						<span>至少输入5个字</span>
						<b :class="{active:commentContent.length>=5}">发表</b>
					</div>
					<div class="main">
						<textarea v-model="commentContent" placeholder="输入您的评论..."></textarea>
					</div>
				</div>
			</x-dialog>
		</section>	
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
				showInput:false,
				commentContent:'',
			}
		},
		mounted(){
			
		},
		methods:{
			deleteComment(index){
				console.log(index);
				this.$vux.confirm.show({
					title:'',
					content:'确定删除此评论',
					onConfirm(){
					  	
					},	
					onCancel(){
						
					}
				});	
			},
		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.infomationIndex{
		.content{
			.commentWrap{
				>.title{
					width: 100%;
					padding: 0 10px;
					height: 30px;
					line-height: 30px;
					background-color: $mc;
				}
				.defaultText{
					width: 100%;
					padding: 40px 10px;
					height: 100px;
					line-height: 20px;
					text-align: center;
				}
				.commentList{
					@include commentList1;				
				}
			}

			.pubComment{
				@include pubComment1;
				em{
					width: 50px;
					height: 50px;
					background: url('/static/images/icon/icon (6).png') no-repeat center center;
					background-size: 20px;
					position: absolute;
					right: 10px;
					top: 0;
					i{
						min-width: 16px;
						height: 16px;
						line-height: 16px;
						text-align: center;
						background-color:#fd6060;
						color: #fff;
						border-radius: 8px;
						position: absolute;
						right: 5px;
						top: 8px;
						transform: scale(.8,.8);
						-webkit-transform: scale(.8,.8);
					}
				} 
			}

			.inputWrap{
				@include inputWrap1;
			}
		}
	}
</style>
