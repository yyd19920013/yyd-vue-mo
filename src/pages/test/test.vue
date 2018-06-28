<template>
	<div>		
		<section class="content1">
			<!-- <autoplay1></autoplay1> -->
			
			<div class="nav1">
				<ul class="clear">
					<li>
						<router-link to="/noviceArea">
							新手专区
						</router-link>
					</li>
					<li>
						<router-link to="/infomation">
							资讯
						</router-link>
					</li>
				</ul>
			</div>	
		</section>
	</div>
</template>

<script>

	export default{	
		data(){
			return{
				hint:'提示'
			}
		},
		mounted(){
			let This=this;
			let {setPromise}=This.method;  

			// setPromise(allProvince,function(data){
			// 	console.log(data); 
			// })  
			// .then(function(data){
			// 	console.log(data);
			// 	return setPromise(allCity);
			// }).then(function(data){
			// 	console.log(data);
			// }); 
		},
		methods:{
			alerts1(){
				console.dir(this)
     			this.$refs.toast1.show = true
     			this.hint='这个是弹窗'
			}
		},
		components:{} 
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss'; 
	
	.nav1 ul li{ float:left; width:.8rem; height:.8rem; line-height:.8rem; text-align:center;}
</style>