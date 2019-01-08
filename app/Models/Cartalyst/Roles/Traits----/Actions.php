<?php

namespace Comptechsoft\Helpers\Models\Cartalyst\Roles\Traits;

use Illuminate\Http\Request;
use Sentinel;

trait Actions
{

    protected static function InsertRecord($user_id, $record)
    {
        $record = self::create([
            'name' => $record['name'],
            'slug' => $record['slug'],
            'permissions' => $record['permissions'] ? $record['permissions'] : [],
            'created_by' => $user_id,
            'updated_by' => $user_id,
        ]);
        return $record;
    }

    protected static function UpdateRecord($user_id, $current, $record)
    {
        $current->update([
            'name' => $record['name'],
            'slug' => $record['slug'],
            'permissions' => $record['permissions'] ? $record['permissions'] : [],
            'updated_by' => $user_id,
        ]);
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
        return self::find($id);
    }

    protected static function getAllRecords()
    {
        return self::all();
    }
}
