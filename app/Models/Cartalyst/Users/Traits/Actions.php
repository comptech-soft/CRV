<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Users\Traits;

use Illuminate\Http\Request;
use Sentinel;

trait Actions
{

    protected function syncroles($record)
    {
        if( array_key_exists('roles', $record) )
        {
            if( is_array($record['roles']) )
            {
                $role_ids = [];
                foreach($record['roles'] as $id => $role)
                {
                    if($role['value'])
                    {
                        $role_ids[] = $id;
                    }
                }
                $this->roles()->sync($role_ids);
            }
        }
    }

    protected static function InsertRecord($user_id, $record)
    {
        $user = Sentinel::registerAndActivate($data = [
            'email' => $record['email'],
            'password' => $record['password'],
            'first_name' => $record['first_name'],
            'last_name' => $record['last_name'],
            'created_by' => $user_id,
            'updated_by' => $user_id,
        ]);
        $user->syncroles($record);
        return $user;
    }

    protected static function UpdateRecord($user_id, $current, $record)
    {
        $current->update([
            'email' => $record['email'],
            'first_name' => $record['first_name'],
            'last_name' => $record['last_name'],
            'updated_by' => $user_id,
        ]);
        $current->syncroles($record);
        return $current;
    }

    protected static function DeleteRecord($user_id, $current, $record)
    {
        $current->update([
            'deleted_by' => $user_id,
        ]);
        $current->delete();
        return $current;
    }

    protected static function getRecord($id)
    {
        return self::with(['roles'])->find($id);
    }
}
