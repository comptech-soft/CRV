<?php

namespace App\Models\Animals\Animals;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\Builder;

use Comptech\Database\Traits\Databaseable;
use App\Models\Animals\Traits\Queryable;
use App\Models\Animals\Traits\Rules;
use App\Models\Animals\Traits\Relations;

class Animal extends Model
{
	use Databaseable, Rules, Relations, Queryable;

	protected $table = 'animals';
	protected $guarded = ['id'];

}
