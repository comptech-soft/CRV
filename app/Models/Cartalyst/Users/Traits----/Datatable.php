<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Users\Traits;

trait Datatable
{

    public static function getDatatableQuery()
	{
        return self::query()->with(['roles']);
    }
    
}
