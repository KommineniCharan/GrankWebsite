import React, { useState } from "react";
import MuiDatatable from "mui-datatables";
import Button from "@mui/material/Button";
import UserService from "../../../services/UserService";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import UserContext from "./UserContext";
import AddEditUser from "./AddEditUser";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [operation, setOperation] = useState("add");
  const [initialUser, setInitialUser] = useState();

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const loadUsers = (query = "?role=admin") => {
    UserService.fetchAllUser(query)
      .then((response) => {
        setUsers(response?.data?.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    loadUsers();
  }, []);

  const addUser = () => {
    setInitialUser({});
    setOpenDialog(true);
    setOperation("add");
  }; //addUser
  const editUser = (user) => {
    setInitialUser(user);
    setOperation("edit");
    setOpenDialog(true);
  }; //addUser

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(id)
          .then((response) => {
            loadUsers();
            Swal.fire("Deleted!", "User has been deleted.", "success");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire("Not Deleted!", "User has not been deleted.", "error");
          });
      }
    });
  };

  const columns = [
    {
      label: "ID",
      name: "userId",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Name",
      name: "name",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return `${user?.name?.first} ${user?.name?.last}`;
        },
      },
    },
    {
      label: "Mobile",
      name: "mobile",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Email",
      name: "email",
      options: {
        sort: true,
        filter: false,
      },
    },
    // {
    //   label: "Gender",
    //   name: "gender",
    //   options: {
    //     sort: true,
    //     filter: false,
    //   },
    // },
    {
      label: "Role",
      name: "role",
      options: {
        sort: true,
        filter: false,
      },
    },
    {
      label: "Status",
      name: "status",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return user.status == 1 ? "Active" : "InActive";
        },
      },
    },
    {
      label: "Actions",
      name: "action",
      options: {
        sort: true,
        filter: false,
        customBodyRenderLite: (index) => {
          const user = users[index];
          return (
            <>
              <IconButton color="primary" onClick={() => editUser(user)}>
                <EditIcon />
              </IconButton>
              <IconButton color="error" onClick={() => deleteUser(user._id)}>
                <DeleteIcon />
              </IconButton>
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <Button
        variant="contained"
        onClick={() => addUser()}
        sx={{ backgroundColor: "#ccc" }}
      >
        Admin Add
      </Button>
      <MuiDatatable title="Admin list" data={users} columns={columns} />
      <UserContext.Provider
        value={{
          openDialog,
          operation,
          handleDialogClose,
          initialUser,
          loadUsers,
        }}
      >
        <AddEditUser />
      </UserContext.Provider>
    </>
  );
};

export default UserList;
