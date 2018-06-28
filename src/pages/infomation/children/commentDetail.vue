<template>
	<div class="infomationIndex">
		<header1 title="详情"></header1>

		<section class="content">
			<div class="commentWrap">
				<ul class="commentList">
					<li>
						<img src="/static/images/defaultPerson.png" alt="头像">
						<div class="infoWrap">
							<div class="title">
								<span>ID207581</span>
								<b>0</b>
							</div>
							<div class="main">
								<a>
									<div class="text">
										没上车下车
									</div>
								</a>
							</div>
							<div class="end">
								<span>刚刚</span>
								&nbsp·&nbsp
								<a>回复</a>
								<b @click="deleteComment()" class="delete">删除</b>
							</div>
						</div>
					</li>
				</ul>

				<div class="title">
					最新评论
				</div>

				<div class="defaultText">
					您对这条资讯有什么看法？
				</div>

				<ul class="commentList1">
					<li v-for="commentList in 5"> 
						<img src="/static/images/defaultPerson.png" alt="头像">
						<div class="infoWrap">
							<div class="title">
								<span>ID207581</span>
								<b class="like">0</b>
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
								<b @click="deleteComment(index)" class="delete">删除</b>
							</div>
						</div>
					</li>
				</ul>

				<div class="loading">
					<span>正在加载中...</span>
					<em>全部加载完毕...</em>
				</div>
			</div>

			<div class="pubComment">
				<span @click="showInput=true">发表评论...</span>
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
				.commentList1{
					@include commentList1;		
					li{
						background-color: $mc;
						border-bottom: 1px solid $pc;
					}
				}
			}

			.pubComment{
				@include pubComment1;
			}

			.inputWrap{
				@include inputWrap1;
			}
		}
	}
</style>
