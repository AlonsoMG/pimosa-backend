const SETTINGS = require("../settings/settings");
const MACHINERY_ENDPOINTS = require("../database/machinery/queries");
const APP = SETTINGS.APP;
const POOL = SETTINGS.POOL;
const PORT = SETTINGS.PORT;

APP.post("/machinery/machinery-type/list", (request, response) => {
    MACHINERY_ENDPOINTS.getMachineryTypeList(request, response, POOL);
});

APP.listen(PORT, () => {
    console.log(`Pimosa Backend started at port : ${PORT}`);
});