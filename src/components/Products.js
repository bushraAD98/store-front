import React from "react";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { connect } from "react-redux";
import { getCategoryItems } from "../store/products";

function Products(props) {
  return (
    <>
      {props.activeProducts.map((element, i) => {
        return (
          <Card
            key={i}
            style={{
              display: "inline-block",
              marginLeft: "25%",
              height: "5%",
              width: "20%",
              marginTop: "3%",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={element.image}
                title={element.name}
              />
              {console.log(element.image)};
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {element.name} - ${element.price}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {element.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </>
  );
}
function mapStateToProps(state) {
  return state.products;
}
const mapDispatchToProps = {
  getCategoryItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
