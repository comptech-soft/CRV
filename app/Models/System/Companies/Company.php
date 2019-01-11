<?php

namespace App\Models\System\Companies;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;
use App\Models\System\Companies\Traits\Rules;

class Company extends Model
{
	use Databaseable, Rules;

	protected $table = 'companies';
	protected $guarded = ['id'];

}
