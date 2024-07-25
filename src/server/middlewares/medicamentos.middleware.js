//Parte 1: Parte 2 esta en personal.router.js
//Como se puede observar en este middlewere está segurizando por medio de JWT el router de medicamentos.
//Como se observa es por medio de un token para poder revisar, ingresar, modificar y eliminar los datos.

//Intente eliminar un dato de la tabla medicamentos pero me esta pidiendo el token, confirmando que esta segurizado, tambien gracias al authtoken.
//Eso es lo que le falta a la tabla de personal.

import { jwtVerify } from "../../util/auth/jwt.js";

export const authToken = (req, res, next) => {
    const authorization = req.header('Authorization')

    if (authorization === undefined){
       return res.status(401).json({ status: false, code: 401, message: 'Token no proporcionado' }) // valida que viene el jwt, sin validar aún
    }

    const [bearer, token] = authorization.split(' ')
    if (bearer !== 'Bearer'){
        return res.status(401).json({ status: false, code: 401, message: 'Formato de token inválido' }) //mal sintaxis en token
    }

    try {
        jwtVerify(token) && next() //si falla es error, sino no devuelve nada
    } catch (error) {
        res.status(401).json({ status: false, code: 401, message: 'Token inválido' })
    }
}

