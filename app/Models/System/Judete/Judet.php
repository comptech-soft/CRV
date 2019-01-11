<?php

namespace App\Models\System\Judete;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Judete\Traits\Relations;
use App\Models\System\Judete\Traits\Queryable;

class Judet extends Model
{
	use Databaseable, Relations, Queryable;

	protected $table = 'geo_judete';
	protected $guarded = ['id'];

}
