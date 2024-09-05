const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    // Access query parameters using req.query
    const { filter, sortBy } = req.query;

    // Example response based on query parameters
    if (filter) {
        res.status(200).send(`Getting tasks with filter: ${filter}`);
    } else if (sortBy) {
        res.status(200).send(`Getting tasks sorted by: ${sortBy}`);
    } else {
        res.status(200).send("Getting all tasks");
    }
});


router.post("/", (req, res) => {
    // Access data sent in the body of the request using req.body
    const { title, description } = req.body;

    if (title && description) {
        res.status(201).send(`New task created with title: ${title}`);
    } else {
        res.status(400).send("Missing task title or description");
    }
});



router.patch("/", (req, res) => {
    // Access data sent in the body of the request using req.body
    const { id, title, description } = req.body;

    if (id) {
        // Assume we're updating the task based on its id
        res.status(200).send(`Task with id ${id} updated`);
    } else {
        res.status(400).send("Missing task id for update");
    }
});


router.delete("/", (req, res) => {
    const { id } = req.query;

    if (id) {
        res.status(200).send(`Task with id ${id} deleted`);
    } else {
        res.status(400).send("Missing task id for deletion");
    }
});
module.exports= router; // this is verry imp to export the module
