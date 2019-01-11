<?php

namespace App\Models\System\Companies\Traits;

trait Rules {

    public static function getRules($action, $data) {
        if($action == 'delete')
        {
            return [];
        }
        $rules = [
            'name' => 'required|unique:companies,name',
        ];
        if($action == 'update') 
        {
            $rules['name'] .= (',' . $data['id']); 
        }
        return $rules;
    }

    public static function getMessages($action, $data) {
        return [
            'name.required' => 'Denumirea trebuie completată',
            'name.unique' => 'Denumirea ' . $data['name'] . ' există.',
        ];
    }

}