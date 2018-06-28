<template>
	<header class='header1'>
		<a class="goBack" href="javascript:history.back();"> <x-icon type="ios-arrow-left" size="30"></x-icon></a>
		<h1>{{title||'标题'}}</h1>
		<slot name="right"></slot>
	</header>
</template>

<script>
	export default{
		props:['title'],
	}
</script>

<style lang="scss" scoped>
	@import '~css/yydcss.scss'; 

	.header1{
		width:100%; 
		height:44px; 
		line-height:44px; 
		background-color:$mc; 
		position:fixed; 
		left: 0; 
		top: 0; 
		z-index: 1000;
		.goBack{
			width:50px; 
			height:50px; 
			line-height:50px; 
			text-align:center; 
			position:absolute; 
			left:0; 
			top:0;
			svg[type="ios-arrow-left"]{ 
				height: 44px; 
				fill:$fc;
			}
		}
		h1{ 
			width:100%; 
			padding: 0 50px; 
			height: 44px; 
			line-height:44px; 
			text-align:center; 
			color:$fc;
		}
	}
</style>
