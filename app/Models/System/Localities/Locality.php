<?php

namespace App\Models\System\Localities;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Localities\Traits\Relations;
use App\Models\System\Localities\Traits\Queryable;

class Locality extends Model
{
	use Databaseable, Relations, Queryable;

	protected $table = 'geo_localities';
	protected $guarded = ['id'];

}
