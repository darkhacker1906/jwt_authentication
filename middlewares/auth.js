const {getUser}=require('../service/auth')
const checkForAthentication=(req,res,next)=>{
     const authorisationValue=req.headers['authorization'];
     req.user=null;
     if(!authorisationValue ||!authorisationValue.startsWith('Bearer')){
        //  return res.status(401).send('Unauthorized');
         return next();
         const token=authorisationHeaderValue.split('Bearer')[1];
         const user=getUser(token);
         req.user=user;
         next()
     }
}
// async function restrictToLoggedinUserOnly(re,res,next){
//     const userUid=req.cookies?.uid;
//     if(!userUid){
//         return res.redirect('/login');
//     };
//     const user=getUser(userUid);
//     if(!user){
//         return res.redirect('/login');
//     }
//     req.user=user;
//     next();
// }
function restrictTo(roles=[]){
    return function(req,res,next){
        if(!req?.user) return res.redirect('/login');
        if(!roles.includes(req?.user?.role)){
            return res.status(403).send('Unauthorized');
        }
        next();
        }
}
module.exports={checkForAthentication,restrictTo};