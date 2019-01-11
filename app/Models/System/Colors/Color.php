<?php

namespace App\Models\System\Colors;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Colors\Traits\Rules;

class Color extends Model
{
	use Databaseable, Rules;

	protected $table = 'colors';
	protected $guarded = ['id'];

}
