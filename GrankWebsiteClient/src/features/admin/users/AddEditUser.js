import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import UserContext from "./UserContext";
import UserForm from "./UserForm";
const AddEditUser = () => {
  const {
    openDialog = false,
    operation,
    handleDialogClose,
    initialUser,
  } = useContext(UserContext);
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={openDialog}
        onClose={handleDialogClose}
      >
        <DialogTitle>{operation == "edit" ? "Edit" : "Add"} User</DialogTitle>
        <DialogContent>
          <UserForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditUser;
