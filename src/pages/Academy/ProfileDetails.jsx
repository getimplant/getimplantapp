import React from "react";
import { useEffect, useState, useContext } from "react";
import MembersNavbar from "./MembersNavbar";
import "./Academy.css";
import { FormLabel } from "react-bootstrap";
import { Button } from "@mui/material";
import "../../firebase/config";
import { AuthContext } from "./AuthProvider";
import { readuserdata } from "./Usefirestore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableHead from "@material-ui/core/TableHead";

import TableRow from "@material-ui/core/TableRow";
import pic from "../../assets/logoblack.png";

const ProfileDetails = ({ setEditprofile }) => {
  const profiledata = useContext(AuthContext);
  return (
    <>
      <div style={{ width: "50%" }}>
        <Table className="table">
          <TableHead>
            <span>
              <b>Profile Details and editing</b>
            </span>{" "}
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Profile Image</TableCell>
              <TableCell>
                <img src={pic} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>{profiledata.value.user.email}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>{profiledata.value.userdata.username}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address</TableCell>
              <TableCell>
                {profiledata.value.userdata.address
                  ? profiledata.value.userdata.address
                  : "not updated yet"}
              </TableCell>
            </TableRow>
            <br />
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => setEditprofile(true)}
                >
                  Update Profile
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ProfileDetails;
