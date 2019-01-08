<!DOCTYPE html>

<html lang="{{ config('app.locale') }}">

    @include('Commons.head')
    
    <body 
        class="m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--fixed m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default">

        <main id="crv-app">
            <login-page
                v-if="$app.mounted"
            >
            </login-page>
        </main>

        @include('Commons.scripts')
        <script src="{{ config('app.url')}}/js/Apps/Login/index.js" type="text/javascript"></script>
    </body>
    
</html>
