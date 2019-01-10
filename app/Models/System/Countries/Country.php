<?php

namespace App\Models\System\Countries;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;

class Country extends Model
{
	use Databaseable;

	protected $table = 'geo_countries';
	protected $guarded = ['id'];

}
