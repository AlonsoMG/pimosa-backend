const mssql = require("mssql");

const createMachinery = (request, response, pool) => {
    const { 
        code,
        name,
        brand,
        price,
        maintenanceCode,
        acquisitionDate,
        type,
        powerSource,
        displacement,
        operation,
        work,
    } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.input("inCode", mssql.VarChar(254), code);
        request.input("inName", mssql.VarChar(254), name);
        request.input("inBrand", mssql.VarChar(254), brand);
        request.input("inPrice", mssql.Money, price);
        request.input("inMaintenanceCost", mssql.Money, maintenanceCode);
        request.input("inAcquisitionDate", mssql.Date, acquisitionDate);
        request.input("inType", mssql.UniqueIdentifier, type);
        request.input("inPowerSource", mssql.UniqueIdentifier, powerSource);
        request.input("inDisplacement", mssql.UniqueIdentifier, displacement);
        request.input("inOperation", mssql.UniqueIdentifier, operation);
        request.input("inWork", mssql.UniqueIdentifier, work);
        request.output("outCreated", mssql.Bit);
        request.output("outMessage", mssql.VarChar(254));
        request.output("outMachineryPK", mssql.UniqueIdentifier);
        request.execute("uspCreateMachinery", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.output);
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

const getDisplacementList = (request, response, pool) => {
    const { } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.execute("uspGetDisplacementList", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.recordset);
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
            response.status(200).json(results.recordset);
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

const getOperationList = (request, response, pool) => {
    const { } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.execute("uspGetOperationList", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.recordset);
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

const getPowerSourceList = (request, response, pool) => {
    const { } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.execute("uspGetPowerSourceList", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.recordset);
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

const getWorkList = (request, response, pool) => {
    const { } = request.body;
    pool.then(pool => {
        const request = new mssql.Request(pool);
        request.execute("uspGetWorkList", (error, results) => {
            if (error) {
                response
                    .status(500)
                    .json({
                        "error": true,
                        "message": error.message
                    });
            }
            response.status(200).json(results.recordset);
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
    createMachinery,
    getDisplacementList,
    getMachineryTypeList,
    getOperationList,
    getPowerSourceList,
    getWorkList
}