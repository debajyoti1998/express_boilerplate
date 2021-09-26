
const allProduct = async (req, res) => {
    try{
        res.status(200).send({ success: 1 });
    }
    catch(err){
        res.status(400).send({ success: 0 });
    }
    
};

module.exports = {
    allProduct,
};