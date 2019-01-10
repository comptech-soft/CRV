<?php

namespace Comptech\Database;

class Dataset {

    /**
     * Order By 
     */
    public static function orderBy($q, $data)
    {
        if( ! array_key_exists('orderable', $data) || ! $data['orderable'] )
        {
            return $q;
        }
        foreach($data['orderable']['fields'] as $i => $field)
        {
            $q = $q->orderBy($field, $data['orderable']['direction']);
        }
        return $q;
    }

    /**
     * Search By
     */
    public static function searchBy($q, $data)
    {
        if( ! array_key_exists('searchable', $data) )
        {
            return $q;
        }
        if( ! is_array($data['searchable']) || ! array_key_exists('value', $data['searchable']) )
        {
            return $q;
        }
        if( ! array_key_exists('fields', $data['searchable']) )
        {
            return $q;
        }
        $value = $data['searchable']['value'];
        if( ! $value )
        {
            return $q;
        }
        $values = explode(',', $value);
        $whereRaw = '';
        foreach($values as $i => $value)
        {
            $value = trim($value);
            if($value)
            {
                $value = \DB::connection()->getPdo()->quote('%' . $value . '%');
                foreach($data['searchable']['fields'] as $i => $field)
                {
                    $whereRaw .= "(" . $field . " LIKE " . $value . ") OR ";
                }
            }
        }
        if($whereRaw)
        {
            $q->whereRaw( '(' . substr($whereRaw, 0, strlen($whereRaw) - 4) . ')' );
        }
        return $q;
    }

    public static function filterBy($q, $data) {
        if( ! array_key_exists('conditions', $data) || ! is_array($data['conditions']) )
        {
            return $q;
        }
        foreach($data['conditions'] as $key => $item)
        {
            if($value = $item['value'])
            {
                $value = \DB::connection()->getPdo()->quote($value);
                $whereRaw = str_replace('[value]', $value, $item['where']);
                $q = $q->whereRaw($whereRaw);
            }
        }
        return $q;
    }

    public static function getRecords($q, $data) {

        $q = Dataset::orderBy($q, $data);
        $q = Dataset::searchBy($q, $data);
        $q = Dataset::filterBy($q, $data);
        
        return $q->paginate($data['per_page']); 
    }

}