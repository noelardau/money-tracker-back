

function sendResponse(res, data, status){

    res.status(200).json({
        status,
        body: data
    })
}

function sendError(res, error){
    res.status(500).json({
        status:false,
        error: error
    })
}

module.exports = {
    sendResponse,
    sendError
}