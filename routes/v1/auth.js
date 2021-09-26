const router                =   require("express").Router()
const controller            =   require('../../controller')
const joiMiddleWare         =   require('../../middlewares/validate')
const validateSchema        =   require('../../validations/')

router.post('/register', 
    joiMiddleWare(validateSchema.authValidation.registerValidation),
    controller.authController.registerController
);

router.post('/login', 
    joiMiddleWare(validateSchema.authValidation.loginValidation),
    controller.authController.loginController
);

module.exports=router;