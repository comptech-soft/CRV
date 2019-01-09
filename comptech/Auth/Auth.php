<?php

namespace Comptech\Auth;

use Illuminate\Http\Request;
use Comptech\Http\Response;

class Auth
{

    public static function login(Request $request, $role)
    {
        $validator = \Validator::make(
            $record = $request->all(),
            $rules = [
                'email' => 'required|email',
                'password' => 'required',
            ],
            $messages = [
                'email.required' => 'Adresa de email trebuie completată.',
                'email.email' => 'Adresa de email nu pare să fie corectă.',
                'password.required' => 'Parola trebuie completată.',
            ]
        );
        if( $validator->fails() )
        {
            return Response::ValidationFail($validator, $record, $rules, $messages);
        }
        try
        {
            $user = \Sentinel::authenticate(
    			[
    				'email' => $request->email,
    				'password' => $request->password
    			],
    			(bool) $request->get('remember_me')
    		);
            if( ! $user )
            {
                throw new \Exception('wrong-credentials');
            }
            return Response::Success('Autentificarea a fost realizată cu succes!', ['user' => $user,]);
        }
        catch(ThrottlingException $e)
        {
            return Response::Exception($e, 'Activitate suspectă a apărut la IP-ul dumneavoastră și vă este interzis accesul pentru încă :delay de secunde.', [
                'delay' => $e->getDelay(),
            ]);
        }
        catch(NotActivatedException $e)
        {
            return Response::Exception($e, 'Contul tău nu a fost activat încă.');
        }
        catch(\Exception $e)
        {
            return Response::Exception($e, 'Emailul și parola introduse nu se potrivesc niciunui user din platforma noastră');
        }
    }

    public static function logout()
    {
        try
        {
            $user = \Sentinel::check();
            \Sentinel::logout();
            return Response::Success('La revedere :name: ! Te mai așteptăm!', ['user' => $user]);
        }
        catch(Exception $e)
        {
            return Response::Exception($e, 'Ceva nu funcționează corect! Ieșirea nu a reușit!');
        }
    }
}
