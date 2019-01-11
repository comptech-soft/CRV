<?php

namespace App\Models\System\Countries\Traits;

trait Relations
{

    public function regions()
    {
        return $this->hasMany(\App\Models\System\Regions\Region::class);
    }

}
