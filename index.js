const express = require ("express");
const mongoose = require ("mongoose");
const routes = require('./routes/Todo');
const todoRoutes = require("./routes/Todo");
const router = express.Router();

// at start we required all the things which were nedded as it compulsary to mention

mongoose
	.connect("mongodb://localhost:27017/restfulapi", { useNewUrlParser: true }) // in this we connected our vscode with local mongodb server.

	.then(() => {
		const app = express()
		app.use(express.json())
    
		app.use("/api", todoRoutes);
      

		app.use((err, req, res, next )=>{
          console.error(err.stack);
		  res.status(500).send("it is an error!");
		});

		

		router.get("/", (req, res)=> {
			res.status(400).send ("getting tasks using router")
		
		
		})
		
		router.post("/", (req, res)=> {
			res.status(400).send ("new task created")
		})
		
		router.patch("/", (req, res)=> {
			res.status(400).send ("updating task")
		})
		
		router.delete("/", (req, res)=> {
			res.status(400).send ("delete task")
		})
		


		app.listen(3000, () => {              // this is used to alot a port 
			console.log("Server has started!")
		})
	})

	