const catchAsync=require('../utils/catchAsyncError')

const allProduct = catchAsync(async (req, res) => {
    res.status(200).send({ success: 1 });
})

module.exports = {
    allProduct,
};