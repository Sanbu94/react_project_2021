import React, { Component } from "react";

//Info page set up and instructions.

class Info extends Component {
  render() {
    return (
      <div>
        <h2>INFO</h2>
        <p>
          Welcome ! <br></br> <br></br>
          This is a React project made by Santeri Seppälä. This exercise is part
          of a react course. <br></br>
          <br></br>
          To use the app itself, navigate to "TODO" to start using your app.
          <br></br>
          <br></br>
          Using the app: You can write your tasks in the "add task" box and
          press "Add task" to insert your desired task into the list.
          <br></br>
          <br></br>
          You can also add a tag for your tasks by typing a sort of keyword for
          your task. For example in the "add task" box write "Do homework" and
          then in the box right next to it the "Tags" box you can write
          "homework".
          <br></br>
          <br></br>
          This will ensure that you can find your tasks easily if your todo list
          is long and has many items in it.
          <br></br>
          <br></br>
          To search for given tags, use the "Search for a given tag" box and
          press the button next to when you are ready. After the search you can
          press the "Back" button to go back to the list. And for an added bonus
          feature you can shuffle the whole list if you want.
          <br></br>
          <br></br>
          You can also update items in the list by pressing "update" or delete
          them using "delete" button.
          <br></br> <br></br> <br></br>
          <br></br>
          Photo by Aditya Vyas on Unsplash.com <br></br>
          Usage under Unsplash License
        </p>
      </div>
    );
  }
}

export default Info;
