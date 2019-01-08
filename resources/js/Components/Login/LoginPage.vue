<template>
    <div class="m-grid m-grid--hor m-grid--root m-page">
		<div class="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--signin" id="m_login">

			<div class="m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside">
				<div class="m-stack m-stack--hor m-stack--desktop">
					<div class="m-stack__item m-stack__item--fluid">
						<div class="m-login__wrapper">
							<div class="m-login__logo">
								<a href="#">
									<img :src="$app.url + 'metronic/media/img/logos/logo-2.png'">
								</a>
							</div>
							
							<form-signin>
							</form-signin>
						</div>
					</div>
				</div>
			</div>

			<login-welcome>
			</login-welcome>
		</div>
	</div>
</template>
