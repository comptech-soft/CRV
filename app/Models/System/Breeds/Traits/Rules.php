<?php

namespace App\Models\System\Breeds\Traits;

trait Rules {

    public static function getRules($action, $data) {
        if($action == 'delete')
        {
            return [];
        }
        $rules = [
            'code' => 'required|unique:breeds,code',
            'breed' => 'required|unique:breeds,breed',
        ];
        if($action == 'update') 
        {
            $rules['code'] .= (',' . $data['id']); 
            $rules['breed'] .= (',' . $data['id']); 
        }
        return $rules;
    }

    public static function getMessages($action, $data) {
        return [
            'code.required' => 'Codul trebuie completat',
            'code.unique' => 'Codul ' . $data['code'] . ' exisită.',
            'breed.required' => 'Denumirea trebuie completată',
            'breed.unique' => 'Denumirea ' . $data['breed'] . ' exisită.',
        ];
    }

}