<?php

namespace App\Models\System\Regions;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Regions\Traits\Rules;
use App\Models\System\Regions\Traits\Queryable;
use App\Models\System\Regions\Traits\Relations;

class Region extends Model
{
	use Databaseable, Rules, Relations, Queryable;

	protected $table = 'geo_regions';
	protected $guarded = ['id'];

}
