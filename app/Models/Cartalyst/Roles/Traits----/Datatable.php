<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Roles\Traits;

trait Datatable
{

    public static function getDatatableQuery()
	{
        return self::query();
	}
}
