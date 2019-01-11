<?php

namespace App\Models\System\Regions\Traits;

trait Queryable
{

    public static function makeQuery()
    {
        return
			self::query()
			->leftJoin('geo_countries', 'geo_countries.id', '=', 'geo_regions.country_id')
			->select('geo_regions.*', 'geo_countries.name as tara')
			->with(['country'])
			->withCount(['judete']);
    }

}