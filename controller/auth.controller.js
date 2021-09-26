
const registerController = async (req, res) => {
    try{
        res.status(200).send({ success: 1 });
    }
    catch(err){
        res.status(400).send({ success: 0 });
    }
    
};

const loginController = async (req, res) => {
    try{
        res.status(200).send({ success: 1 , message: 'login success' });
    }
    catch(err){
        res.status(400).send({ success: 0 });
    }
    
};

module.exports = {
    registerController,
    loginController
};