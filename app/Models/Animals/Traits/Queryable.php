<?php

namespace App\Models\Animals\Traits;

trait Queryable
{
    public static function makeQuery()
    {
        return self::query()->with(['rasa', 'company', 'father', 'mother', 'mother.father']);
    }
}