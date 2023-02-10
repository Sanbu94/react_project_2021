import React from "react";
import "./index.css";
// Initializing states
const TODO = () => {
  const [items, setItems] = React.useState([]);
  const [filterItems, setFilteredItems] = React.useState([]);
  const [task, setTask] = React.useState("");
  const [itemTag, setTag] = React.useState("");
  const [itemEdit, setItemEdit] = React.useState(null);
  const [editText, setEditText] = React.useState("");
  const [searchTag, setSearchresult] = React.useState("");

  // generating the "database" where the items/tasks are stored.
  React.useEffect(() => {
    const json = localStorage.getItem("items");
    const savedItems = JSON.parse(json);
    if (savedItems) {
      setItems(savedItems);
      setFilteredItems(savedItems);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(items);
    localStorage.setItem("items", json);
  }, [items, filterItems]);

  // function to make new tasks.
  function Submits(e) {
    const newTask = {
      id: new Date().getTime(),
      text: task,
      tag: itemTag,
      completed: false,
    };
    setItems([...items].concat(newTask));
    setFilteredItems([...filterItems].concat(newTask));
    setTask("");
    setTag("");
  }
  // function to deleting an item.
  function deleteItem(id) {
    let updatedItems = [...items].filter((item) => item.id !== id);
    setItems(updatedItems);
    setFilteredItems(updatedItems);
  }

  function updateItems(id) {
    const updatedItems = [...items].map((item) => {
      if (item.id === id) {
        item.text = editText;
        item.id = new Date().getTime();
      }
      return item;
    });
    setItems(updatedItems);
    setItemEdit(null);
    setFilteredItems(updatedItems);
  }
  // able to show the listed items again after search for tags.
  function refreshItems() {
    setItems(items);
    setFilteredItems(items);
  }

  function searchTags() {
    let tagItems = [...items].filter((item) => item.tag === searchTag);
    setFilteredItems(tagItems);
  }
  // Making the items rearrange themselves. Hopefully this is enough, I couldn`t get anything else to work.
  function randomOrder() {
    var newTasks = [];
    while (items.length !== 0) {
      var newOrder = [Math.floor(items.length * Math.random())];
      newTasks.push(items[newOrder]);
      items.splice(newOrder, 1);
    }
    setItems(newTasks);
    setFilteredItems(newTasks);
  }
  // Generating input boxes and corresponding buttons for them.
  function display() {
    if (searchTag === "") {
      return (
        <>
          <div class="flex-container">
            <div className="theList">
              <h1>To Do list</h1>
              <div className="area">
                <div className="back-button">
                  <button onClick={() => refreshItems()}>Back</button>
                </div>
                <div className="rearrange-button">
                  <button onClick={() => randomOrder()}>Rearrange</button>
                </div>

                <div className="task-box">
                  <form onSubmit={Submits}>
                    <input
                      type="text"
                      placeholder="add task"
                      onChange={(e) => setTask(e.target.value)}
                      value={task}
                    />

                    <input
                      type="text"
                      placeholder="Tags"
                      onChange={(e) => setTag(e.target.value)}
                      value={itemTag}
                    />

                    <button type="submit">Add task</button>
                  </form>
                  <div className="search-box">
                    <input
                      type="text"
                      placeholder="Search for a given tag"
                      onChange={(e) => setSearchresult(e.target.value)}
                      value={searchTag}
                    />
                  </div>
                </div>
                <div className="search-button">
                  <button onClick={() => searchTags(searchTag)}>
                    Search for tags
                  </button>
                </div>

                {items.map((item) => (
                  <div key={item.id} className="TODO">
                    <div className="TODO-task">
                      {item.id === itemEdit ? (
                        <input
                          type="text"
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      ) : (
                        <div>{item.text}</div>
                      )}
                    </div>
                    <div className="TODO-inputs">
                      {item.id === itemEdit ? (
                        <button onClick={() => updateItems(item.id)}>
                          Update
                        </button>
                      ) : (
                        <button onClick={() => setItemEdit(item.id)}>
                          Edit
                        </button>
                      )}
                      <button onClick={() => deleteItem(item.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="theList">
            <h1>Todo</h1>
            <div className="area">
              <button onClick={() => refreshItems()}>Back</button>
              <button onClick={() => randomOrder()}>Rearrange</button>

              <form onSubmit={Submits}>
                <input
                  type="text"
                  placeholder="TO DO"
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                />
                <input
                  type="text"
                  placeholder="Tag"
                  onChange={(e) => setTag(e.target.value)}
                  value={itemTag}
                />
                <button type="submit">Add task</button>
              </form>
              <button onClick={() => searchTags(searchTag)}>Search tag</button>
              <input
                type="text"
                placeholder="search for tags"
                onChange={(e) => setSearchresult(e.target.value)}
                value={searchTag}
              />

              {filterItems.map((item) => (
                <div key={item.id} className="TODO">
                  <div className="TODO-task">
                    {item.id === itemEdit ? (
                      <input
                        type="text"
                        onChange={(e) => setEditText(e.target.value)}
                      />
                    ) : (
                      <div>{item.text}</div>
                    )}
                  </div>
                  <div className="TODO-inputs">
                    {item.id === itemEdit ? (
                      <button onClick={() => updateItems(item.id)}>
                        Update
                      </button>
                    ) : (
                      <button onClick={() => setItemEdit(item.id)}>Edit</button>
                    )}
                    <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
  }
  return <div className="theList">{display()}</div>;
};
export default TODO;
