import React from "react";
import "./ProductsList.css";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import {
  openAddNewProduct,
  selectAddNewProduct,
  selectMenu,
} from "../../features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import AddNewForm from "./components/AddNewForm";
import ListItems from "./components/ListItems";

export default function ProductsList() {
  const dispatch = useDispatch();
  const selectAddNewIsOpen = useSelector(selectAddNewProduct);
  const selectMenuIsOpen = useSelector(selectMenu);
  return (
    <div className="productlist">
      {/* <div className="productlist_header">
        <p>This is the page you can view or create a new product. </p>
      </div> */}
      <div
        className={`productlist_body  ${
          !selectMenuIsOpen && "productlist_body--close"
        }`}
      >
        <h3>Products List</h3>
        <Button
          startIcon={<AddIcon fontSize="medium" />}
          className="addButton"
          onClick={() => dispatch(openAddNewProduct())}
        >
          Add new product
        </Button>
        {selectAddNewIsOpen && <AddNewForm />}
        <ListItems />
      </div>
    </div>
  );
}
