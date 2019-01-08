<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Roles\Traits;

trait Validator
{
    protected static function Rules($action, $record = NULL)
    {
        if($action == 'delete')
        {
            return [];
        }
        $result = [
            'name' => 'required|max:191|unique:roles,name',
            'slug' => 'required|max:191|unique:roles,slug',
        ];
        if( $action == 'update')
        {
            $result['name'] .= (',' . $record['id']);
            $result['slug'] .= (',' . $record['id']);
        }
        return $result;
    }

	protected static function Messages($action)
    {
        return [
            'name.required' => 'Numele rolului trebuie completat.',
            'name.max' => 'Numele rolului nu poate conține mai mult de 191 caractere.',
            'name.unique' => 'Numele rolului este deja folosit.',

            'slug.required' => 'Codul rolului trebuie completat.',
            'slug.max' => 'Codul rolului nu poate conține mai mult de 191 caractere.',
            'slug.unique' => 'Codul este deja folosit.',
        ];
    }

}
