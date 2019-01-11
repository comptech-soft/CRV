<?php

namespace App\Models\System\Companies;

use Illuminate\Database\Eloquent\Model;
use Comptech\Database\Traits\Databaseable;

class Company extends Model
{
	use Databaseable;

	protected $table = 'companies';
	protected $guarded = ['id'];

}
