<?php

namespace App\Models\System\Countries;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Countries\Traits\Rules;
use App\Models\System\Countries\Traits\Relations;

class Country extends Model
{
	use Databaseable, Rules, Relations;

	protected $table = 'geo_countries';
	protected $guarded = ['id'];

}
