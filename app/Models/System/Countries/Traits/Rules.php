<?php

namespace App\Models\System\Countries\Traits;

trait Rules {

    public static function getRules($action, $data) {
        if($action == 'delete')
        {
            return [];
        }
        $rules = [
            'code' => 'required|unique:geo_countries,code',
            'name' => 'required|unique:geo_countries,name',
        ];
        if($action == 'update') 
        {
            $rules['code'] .= (',' . $data['id']); 
            $rules['name'] .= (',' . $data['id']); 
        }
        return $rules;
    }

    public static function getMessages($action, $data) {
        return [
            'code.required' => 'Codul trebuie completat',
            'code.unique' => 'Codul ' . $data['code'] . ' există.',
            'name.required' => 'Denumirea trebuie completată',
            'name.unique' => 'Denumirea ' . $data['name'] . ' există.',
        ];
    }

}