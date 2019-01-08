<head>
    <meta charset="utf-8" />

    <title>{{ config('app.name') }}</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta name="locale" content="{{ app()->getLocale() }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <meta name="base-url" content="{{ config('app.url') }}" />

    <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js"></script>
    <script>
        WebFont.load({
            google: {
                "families": ["Poppins:300,400,500,600,700", "Roboto:300,400,500,600,700"]
            },
            active: function() {
                sessionStorage.fonts = true;
            }
        });
    </script>


    <link href="{{config('app.url')}}/metronic/css/vendors.bundle.css" rel="stylesheet" type="text/css" />
    <link href="{{config('app.url')}}/metronic/css/style.bundle.css" rel="stylesheet" type="text/css" />

    <link rel="shortcut icon" href="{{config('app.url')}}/metronic/media/img/logo/favicon.ico" />

</head>