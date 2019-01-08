<!DOCTYPE html>

<html lang="{{ config('app.locale') }}">
	
	@include('Commons.head')
	
	<body class="m-page--wide m-header--fixed m-header--fixed-mobile m-footer--push m-aside--offcanvas-default">
		<main id="crv-app">
			<main-page
				v-if="$app.mounted"
			>
			</main-page>
			<quick-sidebar></quick-sidebar>
			<scroll-top></scroll-top>
			<quick-nav></quick-nav>
		</main>

		@include('Commons.scripts')
		<script src="{{ config('app.url')}}/js/Apps/Crv/index.js" type="text/javascript"></script>
	</body>

</html>