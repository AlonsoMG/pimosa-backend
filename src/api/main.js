const SETTINGS = require("../settings/settings");
const MACHINERY_ENDPOINTS = require("../database/machinery/queries");
const APP = SETTINGS.APP;
const POOL = SETTINGS.POOL;
const PORT = SETTINGS.PORT;

APP.post("/machinery/machinery/create", (request, response) => {
    MACHINERY_ENDPOINTS.createMachinery(request, response, POOL);
});

APP.post("/machinery/displacement/list", (request, response) => {
    MACHINERY_ENDPOINTS.getDisplacementList(request, response, POOL);
});

APP.post("/machinery/machinery-type/list", (request, response) => {
    MACHINERY_ENDPOINTS.getMachineryTypeList(request, response, POOL);
});

APP.post("/machinery/operation/list", (request, response) => {
    MACHINERY_ENDPOINTS.getOperationList(request, response, POOL);
});

APP.post("/machinery/power-source/list", (request, response) => {
    MACHINERY_ENDPOINTS.getPowerSourceList(request, response, POOL);
});

APP.post("/machinery/work/list", (request, response) => {
    MACHINERY_ENDPOINTS.getWorkList(request, response, POOL);
});

APP.listen(PORT, () => {
    console.log(`Pimosa Backend started at port : ${PORT}`);
});