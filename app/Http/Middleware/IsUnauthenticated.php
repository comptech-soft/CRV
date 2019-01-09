<?php

namespace App\Http\Middleware;

use Closure;
use Sentinel;

/*
| Ruta trebuie să fie pentru utilizator neautentificat (visitor)
| Verifică dacă avem user autentificat.
| Dacă avem user autentificat, acesta va fi redirectat către pagina lui Home
*/
class IsUnauthenticated
{

    public function handle($request, Closure $next)
    {
        $user = Sentinel::check();
        if( ! $user )
        {
            return $next($request);
        }
        /*
        | Daca avem user
        | Daca userul nu are vreun rol asociat
        | --> va fi scos din sistem
        | --> Se ajunge pe pagina welcome fara user, pagina are optiunea de login
        */
        // Sentinel::logout($user, true);
        return redirect( route('welcome') );
    }

}
