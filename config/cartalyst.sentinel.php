<?php

return [

    'session' => 'cartalyst_sentinel',

    'cookie' => 'cartalyst_sentinel',

    'users' => [
        'model' => App\Models\Cartalyst\Users\User::class,
    ],

    'roles' => [
        'model' =>  App\Models\Cartalyst\Roles\Role::class,
    ],

    'permissions' => [
        'class' => 'Cartalyst\Sentinel\Permissions\StandardPermissions',
    ],

    'persistences' => [
        'model' =>  App\Models\Cartalyst\Persistences\Persistence::class,
        'single' => false,
    ],

    'checkpoints' => [
        'throttle',
        'activation',
    ],

    'activations' => [
        'model' => App\Models\Cartalyst\Activations\Activation::class,
        'expires' => 259200,
        'lottery' => [2, 100],
    ],

    'reminders' => [
        'model' =>  App\Models\Cartalyst\Reminders\Reminder::class,
        'expires' => 14400,
        'lottery' => [2, 100],
    ],

    'throttling' => [
        'model' =>  App\Models\Cartalyst\Throttling\Throttle::class,
        'global' => [
            'interval' => 900,
            'thresholds' => [
                10 => 1,
                20 => 2,
                30 => 4,
                40 => 8,
                50 => 16,
                60 => 12
            ],
        ],
        'ip' => [
            'interval' => 900,
            'thresholds' => 5,
        ],
        'user' => [
            'interval' => 900,
            'thresholds' => 5,
        ],

    ],

];
