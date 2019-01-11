<?php

namespace App\Models\System\Judete\Traits;

trait Queryable
{

    public static function makeQuery()
    {
        return
			self::query()
			->leftJoin(
				'geo_regions',
				function($j)
				{
					$j->on('geo_regions.id', '=', 'geo_judete.region_id')
					->leftJoin(
						'geo_countries',
						function($j)
						{
							$j->on('geo_countries.id', '=', 'geo_regions.country_id');
						}
					);
				}
			)
			->with(['region.country'])
			->withCount(['localities'])
		;
    }

}