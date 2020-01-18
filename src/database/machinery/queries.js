const mssql = require("mssql");

const getMachineryTypeList = (request, response, pool) => {
    const { } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.execute("uspGetMachineryTypeList", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.recordsets);
        })
    }).catch(error => {
        response
            .status(500)
            .json({
                "error": true,
                "message": error.message
            });
    });
}

module.exports = {
    getMachineryTypeList
}