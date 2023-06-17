import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Popup.css";
import { Button, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Popup(props) {
  const User = false;
  const [open, setOpen] = useState(!User);
  const handleClose = () => setOpen(false);
  return props.trigger ? (
    <div className="popup">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <button
            onClick={() => props.setTrigger(false)}
            style={{
              border: "none",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            {" "}
            <CloseRoundedIcon fontSize="small" />
          </button>
          <Typography id="modal-modal-title" variant="h7" component="h2">
            Sign in to Pokemon Adoption App
          </Typography>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button variant="outlined">Sign in with Google</Button>
            <br /><br />
            <div>
              <hr
                width="15%"
                style={{ display: "inline-block", marginRight: "20px" }}
              />{" "}
              <span>Or</span>
              <hr
                width="15%"
                style={{ display: "inline-block", marginLeft: "20px" }}
              />
            </div>
            <br />
            <TextField
              id="outlined-basic"
              label="Phone or email"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <br /> <br />
            <Button variant="contained">Sign in</Button>
            <br /> <br />
            <Button variant="outlined">forgot password ?</Button>
            <br /><br/>
            <Typography id="modal-modal-title" variant="h9" component="h5">
              Don't have an account ?{" "}
              <a
                href="http://localhost:3000"
                style={{ textDecoration: "none", color: "#78c3de" }}
              >
                Sign up
              </a>
            </Typography>
          </div>
        </Box>
      </Modal>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
