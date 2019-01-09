<?php

namespace App\Http\Middleware;

use Closure;
use Sentinel;

class IsAuthenticated
{

    public function handle($request, Closure $next)
    {
        $user = Sentinel::check();
        if( $user )
        {
            return $next($request);
        }
        return redirect( route('welcome') );
    }

}
