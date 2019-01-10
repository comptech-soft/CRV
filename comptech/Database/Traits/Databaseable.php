<?php

namespace Comptech\Database\Traits;

use Comptech\Database\Action;
use Comptech\Database\Dataset;

trait Databaseable {

    public static function getRecords($data) {
        $query =  method_exists(__CLASS__, 'makeQuery') ? self::makeQuery() : self::query();
        if( ! array_key_exists('per_page', $data) )
        {
           $data['per_page'] = self::count();
        }
        return Dataset::getRecords($query, $data);
    }

    public static function actionDispatch($action, $data) {
        return Action::actionDispatch(__CLASS__, $action, $data);
    }

}