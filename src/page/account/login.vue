/* eslint-disable no-tabs */
<template>
  <div class="login-box">
    <div class="m-logo" ></div>
    <div class="login-btns">
			<router-link to="/login/phone">
				<van-button size="large" class="button-style">手机号登录</van-button>
			</router-link>
			<router-link to="/login/password">
				<van-button size="large" class="button-style">密码登录</van-button>
			</router-link>
			<router-link to="/login/register">
				<van-button size="large" type="primary">手机号一键注册</van-button>
			</router-link>
		</div>
  </div>
</template>

<script>
import 'vant/lib/button/style'
export default {
	
}
</script>

<style lang="stylus">
.login-box
  .m-logo
    background:url(//haitao.nos.netease.com/f866dd18-12f0-4bb2-be6d-5cac85cf2627.png) center 73px no-repeat;
    background-size:161px;
    text-align: center;
    padding: 130px 0 0;
    margin: 15px 0;
	.login-btns
		.button-style
			font-size: 14px;
			height: 42px;
			line-height: 42px;
			margin-bottom: 15px;

</style>
