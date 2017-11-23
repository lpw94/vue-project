<!-- HomeHeader.vue -->
<template>
	<header class="header">
		<div class="header_inner">
			<div @click="get" class="header_cont">{{msg}}</div>
		</div>
	</header>
</template>

<style>
	.header {
		height: 2.88rem;
	}
	.header_inner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99;
		max-width: 640px;
		height: 2.88rem;
		box-sizing: border-box;
		margin: 0 auto;
		padding: 0 0.24rem;
		border-bottom: 0.02rem solid #80ccd6;
		background-color: #fff;
	}
	.header_cont {
		text-align: center;
		padding: 0 0.4rem;
		line-height: 1.86rem;
		font-size: 25px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>

<script>
	export default {
			data(){
					return {
						msg:'头部导航'
					}
				},
			methods:{
				get(){
					console.log("00000")
				}
			}
	}
</script>

