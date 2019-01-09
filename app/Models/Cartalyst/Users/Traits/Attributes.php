<?php

namespace App\Models\Cartalyst\Users\Traits;

trait Attributes
{

    public function getFullNameAttribute()
    {
        return collect([
			$this->last_name,
            $this->first_name,
		])->filter( function($value) {
			return strlen(trim($value)) != 0;
		})->implode(' ');
    }

}
