<?php

namespace App\Models\System\Breeds;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;

class Breed extends Model
{
	use Databaseable;

	protected $table = 'breeds';
	protected $guarded = ['id'];

}
