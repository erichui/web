<template>
	<div class="tabWrap">
		<div class="tabContent">
			<div class="tabItem" v-for = '(item,index) of tabArr' key = index @click = 'goto(item, $event)'>{{ item.name }}</div>
		</div>
		<router-view class="content"></router-view>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				tabArr: [
					{
						name: 'tab1', url: 'tab1'
					},
					{
						name: 'tab2', url: 'tab2'
					},
					{
						name: 'tab3', url: 'tab3'
					}
				]
			}
		},
		methods: {
			goto (item,event) {
				this.$router.push(item.url);
				console.log(event.target.className);
			}
		}
	}
</script>

<style>
	.tabWrap {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.tabContent {
		display: flex;
		border: 1px solid #333;
	}
	.tabItem {
		flex: 1;
		height: 80px;
		line-height: 80px;
		text-align: center;
		font-size: 40px;
	}
	.content {
		flex: 1;
		background: yellowgreen;
		font-size: 40px;
	}
</style>