import React, { useEffect, useState } from "react";
import Userview from "./Userview";
import '../css/todo.css'
function Todos(props) {
  const[search,setsearch]=useState("");
  const [todoid,settodoid]=useState(0);
  const [toDoTitle,settoDoTitle]=useState("");
  const [todo, setTodo] = useState([]);
  const [userviewed, setUserViewd] = useState(false);
  const [user, setuser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json().then((result) => {
        setTodo(result);
        console.log(result);
      })
    );
  }, []);
  const viewUser = async(id) => {
    const data=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const res= await data.json();
    setuser(res);
  
    setUserViewd(true);
  };
  return (
    <div className="todo-container"><form className="container-fluid">
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1"><span class="material-symbols-outlined">
search
</span></span>
      <input type="text" className="form-control" placeholder="search.." aria-label="Username" aria-describedby="basic-addon1" value={search} onChange={(e)=>setsearch(e.target.value)}/>
    </div>
  </form>
    <div className="d-flex flex-row justify-content-evenly">
      <div className="todomeet w-50">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ToDo ID</th>
              <th scope="col" className="w-50">
                Title
              </th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr> 
          </thead>
          <tbody className="table-group-divider">
            {todo.filter((item)=>item.title.includes(search)).map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed ? "complete" : "incomplete"}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => {
                      viewUser(item.userId);
                      settoDoTitle(item.title);
                      settodoid(item.id);
                    }}
                  >
                    view user
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {userviewed && <Userview user={user} todoid={todoid} toDoTitle={toDoTitle} />}
    </div>
    </div>
  );
}

export default Todos;
