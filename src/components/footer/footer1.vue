<template>
	<footer class="footer1 clear">		
		<router-link to="/home" :class="{'active':index==0}">
			<i></i>
			首页
		</router-link>
		<router-link to="/download" :class="{'active':index==1}">
			<i></i>
			下载app
		</router-link>
		<router-link to="/rim" :class="{'active':index==2}">
			<i></i>
			小车圈
		</router-link>
		<router-link to="/user/userIndex" :class="{'active':index==3}"> 
			<i></i>
			我的
		</router-link>
	</footer>
</template>
 
<script>
	export default{
		props:['index'],
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss'; 

	.footer1{ width:100%; height:50px; background-color:rgba(255,255,255,0.98); position:fixed; left:0; bottom:0; z-index:1000; border-top:1px solid #ddd;}
	.footer1 a{ float:left; width:25%; text-align:center; background: url('/static/images/icon/icon (65).png') no-repeat center 5px; background-size: 20px; color:#999;}
	.footer1 a:nth-of-type(2){ background-image: url('/static/images/icon/icon (74).png'); color: #3CB29D;}
	.footer1 a:nth-of-type(3){ background-image: url('/static/images/icon/icon (143).png'); background-size: 18px; }
	.footer1 a:nth-of-type(4){ background-image: url('/static/images/icon/icon (67).png'); background-size: 18px; }
	
	.footer1 a:nth-of-type(1).active{ background-image: url('/static/images/icon/icon (66).png'); }
	.footer1 a:nth-of-type(2).active{ background-image: url('/static/images/icon/icon (74).png'); }
	.footer1 a:nth-of-type(3).active{ background-image: url('/static/images/icon/icon (144).png'); background-size: 18px; }
	.footer1 a:nth-of-type(4).active{ background-image: url('/static/images/icon/icon (68).png'); }

	.footer1 a i{ display:block; width:100%; height:26px; line-height:26px; font-size:20px;}
	
	.footer1 a.active{ color:#0CA4EA;}
</style>