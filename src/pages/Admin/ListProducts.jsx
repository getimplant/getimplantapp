import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import "./admin.css";
import { AuthContext } from "../Academy/AuthProvider";
import EditProduct from "./EditProduct";
import { Getfirestore } from "../Academy/Usefirestore";
import Table from "@mui/material/Table";
import cloneDeep from "lodash/cloneDeep";
import clone from "just-clone";
import Product from "./Product";
import { CircularProgress } from "@mui/material";
const ListProducts = ({ setNavbar }) => {
  const [edit, setEdit] = useState(0);
  const [editproduct,setEditproduct]=useState();
  const [iD, setID] = useState();
  const [p, setP] = useState([]);
  let ch = [];
  const [k, setK] = useState(false);
  useEffect(async () => {
    setNavbar(0);
    // console.log(p)
    let d = await Getfirestore();
    let r = await d;
    await setP(r);
    // setfunc(r);
    // console.log(p)
  }, []);
  useEffect(async () => {
    await sleep(2000);

    ch = p;
   
    setK(ch);
  }, [p]);
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return !edit?(k ? (
    <div>
      <AdminNavbar />
      <div className="maincontentdiv">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Product Images</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Product Price</TableCell>
               
                <TableCell>Product Description</TableCell>
                <TableCell>Product Catagory</TableCell>
                <TableCell>Actios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {k.map((product) => {
                return <Product product={product} setEditproduct={setEditproduct} setEdit={setEdit} setID={setID}/>;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  ) : (
    <div>{
      <div style={{marginLeft:"45%",marginTop:"300px"}}>{<CircularProgress/>}</div>
      }</div>
  )):<EditProduct iD={iD} setNavbar={setNavbar} editproduct={editproduct} setEdit={setEdit}/>
};

export default ListProducts;
