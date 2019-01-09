<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Users\Traits;

trait Validator
{
    protected static function Rules($action, $record = NULL)
    {
        if($action == 'delete')
        {
            return [];
        }
        $result = [
            'first_name' => 'required|max:191',
            'last_name' => 'required|max:191',
            'email' => 'required|email|unique:users,email',
        ];
        if( $action == 'update')
        {
            $result['email'] .= (',' . $record['id']);
        }
        if( $action == 'insert' )
        {
            $result['password'] = 'required|min:6';
        }
        return $result;
    }

	protected static function Messages($action)
    {
        return [
            'first_name.required' => 'Prenumele trebuie completat.',
            'first_name.max' => 'Prenumele nu poate conține mai mult de 191 caractere.',

            'last_name.required' => 'Numele trebuie completat.',
            'last_name.max' => 'Numele nu poate conține mai mult de 191 caractere.',

            'email.required' => 'Adresa de email trebuie completată.',
            'email.email' => 'Se pare ca adresa de email nu are un format corect.',
            'email.unique' => 'Adresa de email este deja folosită de un alt utilizator.',

            'password.required' => 'Parola trebuie completată.',
            'password.min' => 'Parola nu poate conține mai puțin de 6 caractere.',
        ];
    }

}
