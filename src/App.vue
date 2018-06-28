<template>
  <div class="App">	
	<transition name="router-fade" mode="out-in">
		<router-view></router-view>	
	</transition>
	<div id="goTop"></div>	
  </div>
</template>

<script>
	import { Loading } from 'vux';
	import { mapState } from 'vuex';
	import { goTop } from 'js/yydjs.js';

	export default {
		computed:{
			...mapState({
		      isLoading: state => state.isLoading,
		    })
		},
		mounted(){
			//回到顶部
			goTop(document.getElementById('goTop'));
		},
		components:{Loading} 
	}
</script>

<style>
	@import './css/yydCommon.css';   	
</style>
