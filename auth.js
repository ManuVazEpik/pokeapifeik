const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = passport => {
    const opts = {
        //Obtiene el metodo de auth en el esquema del header de jwt
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
        secretOrKey: 'secretPassword'
    }
    //Hacemos que passport use una estrategia de autenticacion JWT
    passport.use(new JwtStrategy(opts, (decoded, done) => {
        console.log('jwt decodificado', decoded)
        return done(null, decoded)
    }))
}