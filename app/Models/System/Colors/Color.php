<?php

namespace App\Models\System\Colors;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;

class Color extends Model
{
	use Databaseable;

	protected $table = 'colors';
	protected $guarded = ['id'];

}
