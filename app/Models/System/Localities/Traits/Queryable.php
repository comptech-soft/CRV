<?php

namespace App\Models\System\Localities\Traits;

trait Queryable
{

    public static function makeQuery()
    {
        return
			self::query()
			->leftJoin(
				'geo_judete',
				function($j)
				{
					$j->on('geo_judete.id', '=', 'geo_localities.judet_id')
					->leftJoin(
						'geo_regions',
						function($j)
						{
							$j->on('geo_regions.id', '=', 'geo_judete.region_id')
							->leftJoin('geo_countries', 'geo_countries.id', '=', 'geo_regions.country_id');
						}
					);
				}
			)
			->select('geo_localities.*')
			->with(['judet.region.country'])
		;
    }

}