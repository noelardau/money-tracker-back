

function sendResponse(res, data, status){

    res.send({
        status,
        body: data
    })
}

function sendError(res, error){
    res.send({
        status:500,
        error: error
    })
}

module.exports = {
    sendResponse,
    sendError
}