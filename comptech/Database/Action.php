<?php

namespace Comptech\Database;

use Comptech\Http\Response;

class Action {

    protected static function getDataToValidate($model, $action, $data) {
        return method_exists($model, 'dataToValidate') ? call_user_func([$model, 'dataToValidate'], $action, $data) : $data;
    }

    protected static function getValidationRules($model, $action, $data) {
        return method_exists($model, 'getRules') ? call_user_func([$model, 'getRules'], $action, $data) : [];
    }

    protected static function getValidationMessages($model, $action, $data) {
        return  method_exists($model, 'getMessages') ? call_user_func([$model, 'getMessages'], $action, $data) : [];
    }

    protected static function beforeAction($model, $action, $data) {
        if( method_exists($model, 'before' . ucfirst($action)) )
        {
            return call_user_func([$model, 'before' . ucfirst($action)], $data);
        }
        return NULL;
    }

    protected static function afterAction($model, $action, $data) {
        if( method_exists($model, 'after' . ucfirst($action)) )
        {
            return call_user_func([$model, 'after' . ucfirst($action)], $data);
        }
        return NULL;
    }

    protected static function doAction($model, $action, $data) {
        if( method_exists($model, 'do' . ucfirst($action)) )
        {
            return call_user_func([$model, 'do' . ucfirst($action)], $data);
        }
        if( $action == 'insert')
        {
            return call_user_func([$model, 'create'], $data);
        }
        $record = call_user_func([$model, 'find'], $data['id']);
        if( $action == 'update')
        {
            $record->update($data);
            return $record;
        }
        if( $action == 'delete')
        {
            $record->delete();
            return $record;
        }
        return $result;
    }

    protected static function getSuccessActionMessage($model, $action, $data) {
        if( method_exists($model, 'getSuccessActionMessage' . ucfirst($action)) )
        {
            return call_user_func([$model, 'getSuccessActionMessage'], $data);
        }
        if( $action == 'insert')
        {
            return 'Adăugarea a fost efectuată cu success.';
        }
        if( $action == 'update')
        {
            return 'Modificarea a fost efectuată cu success.';
        }
        if( $action == 'delete')
        {
            return 'Ștergerea a fost efectuată cu success.';
        }
    }

    protected static function getFailActionMessage($model, $action, $data) {
        if( method_exists($model, 'getFailActionMessage' . ucfirst($action)) )
        {
            return call_user_func([$model, 'getFailActionMessage'], $data);
        }
        $result = 'Ceva greșit s-a întâmplat. ';
        if( $action == 'insert')
        {
            $result .= 'Adăugarea';
        }
        if( $action == 'update')
        {
            $result .= 'Modificarea';
        }
        if( $action == 'delete')
        {
            $result .= 'Ștergerea';
        }
        return $result . ' nu a putut fi efectuată. Vă rugăm âncercați mai târziu.';
    }

    public static function actionDispatch($model, $action, $data) {

        /**
         * Validate the inputs
         */
        $data_to_validate = Action:: getDataToValidate($model, $action, $data);
        $rules = Action::getValidationRules($model, $action, $data);
        $messages = Action::getValidationMessages($model, $action, $data);
        $validator = \Validator::make($data_to_validate, $rules, $messages);
        if( $validator->fails() )
        {
            return Response::ValidationFail($validator, $data_to_validate, $rules, $messages);
        }

        /**
         * Try to make the action in a DB Transaction
         */
        $payload = [];
        \DB::beginTransaction();
        try
        {
            $payload['before-action'] = Action::beforeAction($model, $action, $data);
            $payload['record'] = Action::doAction($model, $action, $data);
            $payload['after-action'] = Action::afterAction($model, $action, $data);
            
            \DB::commit();
            return Response::Success(Action::getSuccessActionMessage($model, $action, $data), $payload);
        }
        catch(\Exception $e)
        {
            \DB::rollBack();
            return Response::Exception($e, Action::getFailActionMessage($model, $action, $data));
        }
    }
}