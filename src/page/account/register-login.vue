<template>
  <div class="phone-login-box">
    <headerNav title="注册" />
		<div class="m-logo"></div>
		<div class="form-box">
			<van-cell-group>
				<van-field
					v-model="phone"
					required
					label="手机号"
					placeholder="请输入手机号"
					:error-message="phoneError"
					maxlength="11"
				/>

				<van-field
					v-model="password"
					type="password"
					label="密码"
					placeholder="请输入密码"
					required
				/>

				 <van-field
					v-model="sms"
					center
					required
					clearable
					label="短信验证码"
					placeholder="请输入短信验证码"
					maxlength="6"
				>
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
				</van-field>
			</van-cell-group>
			<van-button type="primary" size="large" class="login" @click='register'>注册</van-button>
		</div>
  </div>
</template>

<script>
import headerNav from '../../components/header/headerNav'
import { Dialog } from 'vant'

export default {
	name: 'password-login',
	data () {
		return {
			phoneError: '',
			phone: '',
			password: '',
			sms: ''
		}
	},
	components: {
		headerNav
	},
	methods: {
		register () {
			if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
				this.phoneError = '手机号码格式有误，请重填'
				// Dialog({ message: '手机号码格式有误，请重填' })
        return false
			} else {
					this.phoneError = ''
			}
			if (this.phone === '13621200547' && this.password === '123456' && this.sms === '123456') {
				Dialog({ message: '注册成功' })
			} else if (this.password === '') {
				Dialog({ message: '密码不能为空' })
			} else if (this.sms === '') {
				Dialog({ message: '验证码不能为空' })
			} else {
				Dialog({ message: '注册失败' })
			}
		}
	}
}
</script>

<style lang="stylus">
	.phone-login-box
		.m-logo
			background:url(https://haitao.nos.netease.com/f866dd18-12f0-4bb2-be6d-5cac85cf2627.png) center 18px no-repeat;
			background-size:161px;
			text-align: center;
			padding: 60px 0 0;
		.login
			margin-top: 20px;
</style>
