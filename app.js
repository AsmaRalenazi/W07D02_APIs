
const express = require("express");
const app = express();
const port = 3000;


app.use(express.json()); 

const todos = [{ todo: " wake up", isCompleted: false },
 { todo: "Eat Breakfast", isCompleted: false }
];


app.get ("/todos",((req, res) => {
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);
  }))

  app.post ("/create/todo",((req, res) => {
      const newUser = { todo: req.body.todo,isCompleted: req.body.isCompleted };
      todos.push(newUser);
    // set the response status code to 201
    res.status(201);
    // send back first user
    res.json(todos);
  }))


  app.put ("/update/todo/:name",((req, res) => {
    const user = req.params.name
    // set the response status code to 200 (OK)
    res.status(200);
    // send back first user
    res.json(todos);

    
  const found = todos.find((element) => {
    return element.name === todos;
  });

  if (found) {
    // set the response status code to 200 (OK)
    // sends back a response of the found user
    res.status(200);
    res.json(element.name);
  } else {
    // set the response status code to 404 (Not Found)
    res.status(404);
    res.json("User not found");

  }}))



  app.delete('/', function (req, res) {
    res.send('DELETE request ')
  })

  

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });