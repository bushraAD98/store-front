import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { connect } from "react-redux";
import { changeActive } from "../store/categories";
import { getCategoryItems } from "../store/products";

function Categories(props) {
  return (
    <>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ marginLeft: "43%", fontSize: "25px" }}
      >
        {props.categories.map((element, i) => {
          return (
            <Link
              key={i}
              color="inherit"
              onClick={() => {
                props.changeActive(element.name);
              }}
            >
              {element.name}
            </Link>
          );
        })}
      </Breadcrumbs>
      <div style={{ marginLeft: "45%", fontSize: "50px", marginTop: "5%" }}>
        {props.activeCategory.name}
      </div>
      <div
        style={{
          marginLeft: "35%",
          fontSize: "25px",
          marginTop: "2%",
          color: "GrayText",
        }}
      >
        {props.activeCategory.description}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return state.categories;
};

const mapDispatchToProps = {
  changeActive,
  getCategoryItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
