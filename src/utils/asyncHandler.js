const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.
        resolve(requestHandler(req, res, next)).
        catch((err) => {
            console.log(err);
            return res.status(400).json({...err, message : err.message});
        })
    }
}


export { asyncHandler }




// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }