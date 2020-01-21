const SETTINGS = require("../settings/settings");
const MACHINERY_ENDPOINTS = require("../database/machinery/queries");
const PROJECT_ENDPOINTS = require("../database/project/queries");
const APP = SETTINGS.APP;
const POOL = SETTINGS.POOL;
const PORT = SETTINGS.PORT;

/**
 * *Endpoints used by @MachineryService
 */

APP.post("/machinery/machinery/create/", (request, response) => {
  MACHINERY_ENDPOINTS.createMachinery(request, response, POOL);
});

APP.post("/machinery/displacement/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getDisplacementList(request, response, POOL);
});

APP.post("/machinery/machinery/", (request, response) => {
  MACHINERY_ENDPOINTS.getMachinery(request, response, POOL);
});

APP.post("/machinery/machinery/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getMachineryList(request, response, POOL);
});

APP.post("/machinery/machinery-type/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getMachineryTypeList(request, response, POOL);
});

APP.post("/machinery/operation/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getOperationList(request, response, POOL);
});

APP.post("/machinery/power-source/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getPowerSourceList(request, response, POOL);
});

APP.post("/machinery/work/list/", (request, response) => {
  MACHINERY_ENDPOINTS.getWorkList(request, response, POOL);
});

APP.post("/machinery/machinery/update/", (request, response) => {
  MACHINERY_ENDPOINTS.updateMachinery(request, response, POOL);
});

/**
 * *Endpoints used by @ProjectService
 */

APP.post("/project/project/", (request, response) => {
  PROJECT_ENDPOINTS.getProject(request, response, POOL);
});

APP.post("/project/project/list/", (request, response) => {
  PROJECT_ENDPOINTS.getProjectList(request, response, POOL);
});

APP.post("/project/project/create/", (request, response) => {
  PROJECT_ENDPOINTS.createProject(request, response, POOL);
});

APP.post("/project/project/update/", (request, response) => {
  PROJECT_ENDPOINTS.updateProject(request, response, POOL);
});

APP.post("/project/industry/list/", (request, response) => {
  PROJECT_ENDPOINTS.getIndustryList(request, response, POOL);
});

APP.listen(PORT, () => {
  console.log(`Pimosa Backend started at port : ${PORT}`);
});
