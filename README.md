# calorieCounter
full stack project



## Stories

### New repository
Create a repository on your github profile, make sure that all the necessary
files are ignored, and you are able to push your changes to github.
Initialize your app with npm and create your package.json file.

### Main page
The app should contain a server.js file that runs the server.
It should have a directory called client, that contains all the client related assets.
You should be able to run the server with: `node server.js`
If your server is running it should be accesible from: `http://localhost:3000`
It should show "Calorie counter" as a title in a `<h1>` element.

### Add meal backend
#### Create a database scheme for meals.
Each meal should have:
a name (string),
a calorie (number),
a date (date)
#### Create an endpoint: "/meals"
When receiving the meal in the post data in a "POST" request, the server should add a new meal to the database.
Use the "body-parser" module for decoding the post data.
You can try your application with the following command:
`curl --data '{"name": "something", "calories": 200, "date": "2016-01-26:12:03:10"}' -H 'content-type:application/json'  http://localhost:3000/meals`
It should reply with `{"status": "ok"}` if the request was successful.


### Add meal frontend
#### Create a form for adding a new meal
- Create an input field for the name of the meal
- Create an input field for the calories
- Create an input field for the date
- Create a button that sends an "POST" http request to the server, to the
"/meals" endpoint with the fields from the inputs.

### List meals backend
#### Create an endpoint: "/meals"
When receiving a "GET" request, the server should respond with the list of meals.
like:
```json
{
  "meals": [
    {"id": 1, "name": "steak", "calories": 890, "date": "2016-01-04T23:00:00.000Z"},
    {"id": 2, "name": "carrot", "calories": 200, "date": "2016-01-04T23:00:00.000Z"}
  ]
}
```
You can try your application with the following command:
`curl -H 'content-type:application/json'  http://localhost:3000/meals`

### List meals frontend
The fronted should list all the added meals below the form.
It should show the name, calories and date for each.

### Delete meals backend
#### Create an endpoint: "/meals/:id"
When receiving a "DELETE" request, the backend should delete the meal with the given id.
If the delete was successful, it should respond `{"status": "ok"}`, otherwise it should respond
`{"status": "not exists"}`

You can try your application with the following command:
`curl -H 'content-type:application/json' -X 'DELETE' http://localhost:3000/meals/3`

### Filter meals frontend
Add a form for filtering the meal list for days. The form should have a date input, a button called 'filter', and one called 'all'.
If the 'filter' button is clicked, it should only show meals for the given day.
If the 'all' button is clicked, it should show all meals.

### Sum calories
Add a field that always shows the sum of calories.

