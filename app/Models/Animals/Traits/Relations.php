<?php

namespace App\Models\Animals\Traits;

trait Relations
{

    public function rasa()
    {
        return $this->belongsTo(\App\Models\System\Breeds\Breed::class, 'breed_id');
    }

    public function company()
    {
        return $this->belongsTo(\App\Models\System\Companies\Company::class, 'company_id');
    }

    public function father()
    {
        return $this->belongsTo(\App\Models\Animals\Animals\Animal::class, 'father_id');
    }

    public function mother()
    {
        return $this->belongsTo(\App\Models\Animals\Animals\Animal::class, 'mother_id');
    }

}
