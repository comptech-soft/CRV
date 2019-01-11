<?php

namespace App\Models\Farms\Farms;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\Farms\Farms\Traits\Rules;
use App\Models\Farms\Farms\Traits\Relations;
use App\Models\Farms\Farms\Traits\Queryable;

class Farm extends Model
{
	use Databaseable, Rules, Relations, Queryable;

	protected $table = 'farms';
	protected $guarded = ['id'];

}
