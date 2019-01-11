<?php

namespace App\Models\System\Breeds;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Breeds\Traits\Rules;

class Breed extends Model
{
	use Databaseable, Rules;

	protected $table = 'breeds';
	protected $guarded = ['id'];

}
