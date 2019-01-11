<?php

namespace App\Models\System\Regions\Traits;

trait Relations
{

    public function country()
    {
        return $this->belongsTo(\App\Models\System\Countries\Country::class);
    }


    public function judete()
    {
        return $this->hasMany(\App\Models\System\Judete\Judet::class);
    }

}