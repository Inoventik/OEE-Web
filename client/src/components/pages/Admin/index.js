import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

export default function MaterialTableDemo() {
  const [state, setState] = useState({
    columns: [
      { title: "ID", field: "id" },
      { title: "Last Name", field: "last_name" },
      { title: "First Name", field: "first_name" },
      { title: "Email Address", field: "email_address" },
      { title: "Username", field: "username" },
      { title: "Role", field: "role" }
    ],
    data: []
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users")
      .then(result => {
        if (result.status === 200) {
          setState(prevState => {
            // const data = [...prevState.data];
            // const data = [...result.data];
            // data.push(result.data);
            return { ...prevState, data: result.data };
          });
        } else {
          console.log(result.status);
        }
        console.log(result);
      })
      .catch(e => {
        console.log(e);
      });
  }, []);

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
