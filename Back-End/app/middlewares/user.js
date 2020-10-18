const userMiddleware = (req, res, next) => {

    if(!req.session.user) {
        req.session.user = {connected_user: false};
    };
  
    next();
  };
  
  
module.exports = userMiddleware;