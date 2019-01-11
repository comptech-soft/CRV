<?php

namespace App\Models\System\Colors\Traits;

trait Rules {

    public static function getRules($action, $data) {
        if($action == 'delete')
        {
            return [];
        }
        $rules = [
            'color' => 'required|unique:colors,color',
        ];
        if($action == 'update') 
        {
            $rules['color'] .= (',' . $data['id']); 
        }
        return $rules;
    }

    public static function getMessages($action, $data) {
        return [
            'color.required' => 'Denumirea trebuie completată',
            'color.unique' => 'Denumirea ' . $data['color'] . ' există.',
        ];
    }

}