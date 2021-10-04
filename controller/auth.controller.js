const catchAsync=require('../utils/catchAsyncError')
const {addUser,LoginUser}=require("../services/user.service")


const registerController= catchAsync( async (req, res) => {
    const user=await addUser(req.body)
    res.status(200).send({ success: 1 , user : user});
})


const loginController =catchAsync(async (req, res) => {
    const userLogin=await LoginUser(req.body)
    res.status(200).send({success:1,user:userLogin})
    
}) 

module.exports = {
    registerController,
    loginController
};