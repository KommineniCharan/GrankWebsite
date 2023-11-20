import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CustomerForm from "./CustomerForm";
import CustomerContext from "./CustomerContext";
const AddEditCustomer = () => {
  const {
    openDialog = false,
    operation,
    handleDialogClose,
    initialUser,
  } = useContext(CustomerContext);
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
          <CustomerForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddEditCustomer;
