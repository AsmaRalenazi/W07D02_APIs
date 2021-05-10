
//q1
//Create a new server app.js and run it.
const express = require("express");
const app = express();
const port = 3000;


app.use(express.json()); 

//q2
//In the global scope create an array 
//const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];.
const todos = [{ todo: "wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }
];

//q3
//Create an API to handel a GET request to the 
//endpoint /todos that sends a response of all todos in the todos array.
app.get ("/todos",((req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);
  }))

  //q4
  //Create an API to handel a POST request to the 
  //endpoint /create/todo that adds the new todo object to the todos array
  // then sends a response of the newly added todo.


  app.post ("/create/todo",((req, res) => {
      const newUser = { todo: req.body.todo,isCompleted: req.body.isCompleted };
      todos.push(newUser);
    // set the response status code to 201
    res.status(201);
    // send back first user
    res.json(todos);
  }))

//q5
//Create an API to handel a PUT request to the 
//endpoint /update/todo/:name that updates the matched todo object 
//then sends a response of the of the newly updated todo object.
  app.put ("/update/todo/:name",((req, res) => {
    const user = req.params.name
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);

   let i; 
  const found = todos.find((element,index) => {
      i = index
    return element.todo === user;
  });

  if (found) {
      todos[i] = req.body.name
    // set the response status code to 200 (OK)
    // sends back a response of the found user
    res.status(200);
    res.json(todos[i]);
  } else {
    // set the response status code to 404 (Not Found)
    res.status(404);
    res.json("User not found");

  }}))


//q6
//Create an API to handel a DELETE request to the 
//endpoint /delete/todo/:name that deletes the matched todo object 
//then sends a response of the of the deleted todo object.
  app.delete('/delete/todo/:name', function (req, res) {

    let i;
    let found = todos.find((elm,index) => {
        i = index
        return elm.todo === req.params.name
    })
      
    if(found) {

        todos.splice(i, 1)
          res.json(todos)
    }
  })


  //q7
  //Create an API to handel a PUT request to the 
  //endpoint /complete/todo/:name that sets isCompleted to true for the matched todo object.
  app.put("/complete/todo/:name",((req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);
  })) 


  //q8
  //Create an API to handel a GET request to the 
  //endpoint /completed/todos that sends back a response of all the completed todo Objects.
  app.get("/completed/todos",((req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);
  })) 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });