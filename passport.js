const passport = require('passport'); 
const GoogleStrategy = require('passport-google-oauth2').Strategy; 
  
passport.serializeUser((user , done) => { 
    done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
    done(null, user); 
}); 
  
passport.use(new GoogleStrategy({ 
    clientID:"YOUR ID", // Данные из вашего аккаунта. 
    clientSecret:"YOUR SECRET", // Данные из вашего аккаунта. 
    callbackURL:"http://localhost:4000/auth/callback", 
    passReqToCallback:true
  }, 
  function(request, accessToken, refreshToken, profile, done) { 
    return done(null, profile); 
  } 
));
