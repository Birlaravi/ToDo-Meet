import React from "react";
function Userview({user,todoid,toDoTitle}) {
  return (
    <div className="border-dark border rounded bg-success p-2 text-dark bg-opacity-10 h-25 p-3 m-5 w-50" style={{ position: "sticky", top: "110px"}}>
      <div className="d-flex ">
        <p className="w-50">ToDo ID</p>
        <p className="w-50">{todoid}</p>
      </div>
      <div className="d-flex ">
      <p className="w-50">ToDo Title</p>
      <p className="w-50">{toDoTitle}</p>
      </div>
      <div className="d-flex ">
      <p className="w-50">User ID</p>
      <p className="w-50">{user.id}</p>
      </div>
      <div className="d-flex ">
      <p className="w-50">Name</p>
      <p className="w-50">{user.name}</p>
      </div>
      <div className="d-flex ">
      <p className="w-50">Email</p>
      <p className="w-50">{user.email}</p>
      </div>
    </div>
  );
}

export default Userview;
