<?php

namespace App\Models\Animals\Sires;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

use Comptech\Database\Traits\Databaseable;

use App\Models\Animals\Traits\Queryable;
use App\Models\Animals\Traits\Rules;
use App\Models\Animals\Traits\Relations;


class Sire extends Model
{
	use Databaseable, Rules, Relations, Queryable;

	protected $table = 'animals';
	protected $guarded = ['id'];

	protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('sire', function (Builder $builder) {
            $builder->where('type', '=', 'sire')->where('gender', '=', 'male');
        });
    }
}
