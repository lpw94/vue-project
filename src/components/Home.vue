<!-- Home.vue -->
<template>
	<div class="container">
		<!-- 由于html不区分大小写，所以js中驼峰命名方式在html中要改成用短横线连接的形式 -->
		<HomeHeader></HomeHeader>
		<p>{{ total }}</p>


		<Button v-on:increment="incrementTotal"></Button>
		
		<Button v-on:increment="incrementTotal"></Button>

		<a href="javascript:;" :to="{ name: 'Tip'}">跳转</a>
		<div class="content">
			<ul class="cont_ul">
				<List v-for="item in items" :price="item.price" :title="item.title" :img="item.img" ></List>
			</ul>
		</div>
	</div>
</template>
<style>
    a{text-decoration: none}
	.container {
		max-width: 640px;
		margin: 0 auto;
		overflow-x: hidden;
	}
	.cont_ul {
		padding-top: 0.05rem;
		margin: 0 -0.12rem;
	}
	.cont_ul:after {
		content: "";
		display: block;
		width: 0;
		height: 0;
		clear: both;
	}
</style>
<script>
	// 导入要用到的子组件
	import HomeHeader from './HomeHeader'
	import Button from './Button'
	import List from './List'
	

	export default {
		data () {
			return {
				total: 0,
				// items: []
				items: [
					{ price: "129.00", title: "大学sdafdsf" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "256.00", title: "中庸" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "399.00", title: "论语" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "998.00", title: "孟子" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "99.00", title: "道德经" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "89.00", title: "老子" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "188.00", title: "金刚经" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
					{ price: "209.00", title: "易筋经" ,img:'http://shopimg.kongfz.com.cn/20130826/1746508/1746508YTGtm0_b.jpg'},
				]
			}
		},
		// 在components字段中，包含导入的子组件
		components: {
			HomeHeader,
			Button,
			List
		},
		methods: {
		    incrementTotal: function () {
		      this.total += 1
		    }
		}

	}
</script>