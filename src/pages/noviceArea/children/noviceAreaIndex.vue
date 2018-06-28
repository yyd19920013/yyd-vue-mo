<template>
	<div class="noviceAreaIndex">
		<header1 title="新手专区"></header1>

		<section class="content">
			<ul class="faqList">
				<li v-for="faqList in 3">
					<router-link :to="{path:'/noviceArea/noviceAreaDetail',query:{}}" class="multiLine">
						什么是K线  
					</router-link> 
				</li> 
			</ul>

			<ul class="faqList">
				<li v-for="faqList in 4">
					<a class="multiLine">
						什么是K线
					</a>
				</li>
			</ul>		
		</section>	
	</div>
</template>

<script>
	export default{	
		data(){
			return{
				query:this.$router.currentRoute.query,
			}
		},
		mounted(){
			
		},
		methods:{
			
		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss';   
	
	.noviceAreaIndex{
		.content{
			.faqList{
				width: 100%;
				padding-left: 10px;
				margin-top: 10px;
				background-color: $mc;
				li{
					padding-right: 10px;
					height: 50px;
					line-height: 49px;
					border-bottom: 1px solid $pc;
					a{
						width: 100%;
						height: 100%;
						padding-right: 10px;
						background: url('/static/images/icon/icon (1).png') no-repeat right center;
						background-size: 8px; 
					}
				}
			}
		}
	}
</style> 