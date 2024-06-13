/** @format */

const Router = require("express");
const { addNewEvent } = require("../controllers/eventController");
const { addNewEvent, getEvents } = require("../controllers/eventController");

const eventRouter = Router();

eventRouter.post("/add-new", addNewEvent);
eventRouter.get("/get-events", getEvents);

module.exports = eventRouter;
