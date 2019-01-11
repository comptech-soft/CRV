<?php

namespace App\Models\Farms\Farms\Traits;

trait Queryable
{

    public static function makeQuery()
    {
        return self::query()->with(['locality.judet.region.country', /* 'oremulsori' */ ]);
    }

}