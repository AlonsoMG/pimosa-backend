const mssql = require("mssql");

const createProject = (request, response, pool) => {
  const {
    code,
    name,
    purchaseOrder,
    description,
    industry,
    startDate,
    plannedEndDate,
  } = request.body;
  pool.then(pool => {
    const request = new mssql.Request(pool);
    request.input("inCode", mssql.VarChar(124), code);
    request.input("inName", mssql.VarChar(254), name);
    request.input("inPurchaseOrder", mssql.VarChar(254), purchaseOrder);
    request.input("inDescription", mssql.VarChar(400), description);
    request.input("inIndustry", mssql.UniqueIdentifier, industry);
    request.input("inStarDate", mssql.Date, startDate);
    request.input("inPlannedEndDate", mssql.Date, plannedEndDate);
    request.output("outCreated", mssql.Bit);
    request.output("outMessage", mssql.VarChar(254));
    request.output("outProjectPk", mssql.UniqueIdentifier);
    request.execute("uspCreateProject", (error, results) => {
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

const getIndustryList = (request, response, pool) => {
  const { } = request.body;
  pool.then(pool => {
    const request = new mssql.Request(pool);
    request.execute("uspGetIndustryList", (error, results) => {
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

const getProject = (request, response, pool) => {
  const { projectPk } = request.body;
  pool.then(pool => {
    const request = new mssql.Request(pool);
    request.input("inProjectPK", mssql.UniqueIdentifier, projectPk);
    request.execute("uspGetProject", (error, results) => {
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

const getProjectList = (request, response, pool) => {
  pool.then(pool => {
    const request = new mssql.Request(pool);
    request.execute("uspGetProjectList", (error, results) => {
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

const updateProject = (request, response, pool) => {
  const {
    projectPk,
    code,
    name,
    purchaseOrder,
    description,
    industry,
    startDate,
    plannedEndDate,
  } = request.body;
  pool.then(pool => {
    const request = new mssql.Request(pool);
    request.input("inProjectPk", mssql.UniqueIdentifier, projectPk);
    request.input("inCode", mssql.VarChar(124), code);
    request.input("inName", mssql.VarChar(254), name);
    request.input("inPurchaseOrder", mssql.VarChar(254), purchaseOrder);
    request.input("inDescription", mssql.VarChar(400), description);
    request.input("inIndustry", mssql.UniqueIdentifier, industry);
    request.input("inStarDate", mssql.Date, startDate);
    request.input("inPlannedEndDate", mssql.Date, plannedEndDate);
    request.output("outUpdated", mssql.Bit);
    request.output("outMessage", mssql.VarChar(254));
    request.execute("uspUpdateProject", (error, results) => {
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

module.exports = {
  createProject,
  getIndustryList,
  getProject,
  getProjectList,
  updateProject
}
