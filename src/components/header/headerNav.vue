<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
	name: 'headerNav',
	props: {
		title: String
	},
	methods: {
		onClickLeft () {
			history.back()
		}
	}
}
</script>
