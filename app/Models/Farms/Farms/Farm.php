<?php

namespace App\Models\Farms\Farms;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\Farms\Farms\Traits\Rules;

class Farm extends Model
{
	use Databaseable, Rules;

	protected $table = 'farms';
	protected $guarded = ['id'];

}
