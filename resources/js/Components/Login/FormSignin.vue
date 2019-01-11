<template>
    <div class="m-login__signin">
		<div class="m-login__head">
			<h3 class="m-login__title">Sign In To Admin</h3>
		</div>

		<form-element
			:f_class="{
				'm-login__form': true,
				'm-form': true,
			}"
			:result="formManager ? formManager.result : null"
            @close="formManager.result = null"
		>
			<template slot="form-controls">
				<text-box
					id="user-email"
					field="email"
					placeholder="Adresa de email"
					
					v-model="record.email"
					:errors="formManager ? formManager.getErrors() : null"
				>
				</text-box>

				<text-box
					type="password"
					id="user-password"
					field="password"
					placeholder="Parola"
					v-model="record.password"
					:errors="formManager ? formManager.getErrors() : null"
				>
				</text-box>

				<div class="row m-login__form-sub">
					<div class="col m--align-left">
						<check-box
							type="checkbox"
							id="remember_me"
							field="remember_me"
							label="Tine-mă minte!"
							v-model="record.remember_me"
						>
						</check-box>
					</div>
					<div class="col m--align-right">
						<a href="javascript:;" id="m_login_forget_password" class="m-link">Forget Password ?</a>
					</div>
				</div>
			</template>

			<template slot="form-actions">
				<div class="m-login__form-action">
					<button 
						type="button" 
						id="m_login_signin_submit" 
						class="btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air"
						@click="onClickLogin"
					>
						Sign In
						<i v-if="formManager && formManager.processing" class="fa fa-spinner fa-spin"></i>
					</button>
				</div>
			</template>
		</form-element>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				record: {
					email: null,
					password: null,
					remember_me: false,
				},
				formManager: null,
			}
		},

		methods: {
            onClickLogin(e) {
                this.formManager.onSubmit()
			}
		},

		mounted() {
            this.formManager = new ComptechApp.FormManager(
				this, 
				'login', 
				data => ComptechApp.Http.redirect(), 
				data => {
					console.log(data)
				}
			)
        },
	}
</script>

