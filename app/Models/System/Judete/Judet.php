<?php

namespace App\Models\System\Judete;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
// use App\Models\System\Breeds\Traits\Rules;

class Judet extends Model
{
	use Databaseable;

	protected $table = 'geo_judete';
	protected $guarded = ['id'];

}
