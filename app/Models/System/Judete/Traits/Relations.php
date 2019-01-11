<?php

namespace App\Models\System\Judete\Traits;

trait Relations
{

    public function region()
    {
        return $this->belongsTo(\App\Models\System\Regions\Region::class);
    }

    public function localities()
    {
        return $this->hasMany(\App\Models\System\Localities\Locality::class);
    }

}
