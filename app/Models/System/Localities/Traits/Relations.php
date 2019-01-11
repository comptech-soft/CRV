<?php

namespace App\Models\System\Localities\Traits;

trait Relations
{

    public function judet()
    {
        return $this->belongsTo(\App\Models\System\Judete\Judet::class);
    }

}
