<?php

namespace App\Models\Farms\Farms\Traits;

trait Relations
{

    public function locality()
    {
        return $this->belongsTo(\App\Models\System\Localities\Locality::class, 'locality_id');
    }

    // /**
    //  * Orele de mulsori
    //  */
    // public function oremulsori()
    // {
    //     return $this->hasMany(\App\Models\Farms\OreMulsori\Ora::class, 'farm_id');
    // }

    // /**
    //  * Utilizatorii fermei
    //  */
    // public function users()
    // {
    //     return $this->belongsToMany(\Comptechsoft\Helpers\Models\Cartalyst\Users\User::class, 'farms_users', 'farm_id', 'user_id');
    // }

    // /**
    //  * Animalele fermei
    //  */
    // public function animals()
    // {
    //     return 
    //         $this->belongsToMany(\App\Models\Animals\Animals\Animal::class, 'farms_animals', 'farm_id', 'animal_id')
    //         ->withPivot([
    //             'short_number',
    //             'status_in_farm',
    //             'deleted_at',
    //             'deleted_by'
    //         ]);
    // }

}
