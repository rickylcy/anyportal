import React from "react";
import "../../App.css";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

function Channels() {
  return (
    <Grid container columnSpacing={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 1 }}>
      {["吹水台", "自選台", "創意台", "", "", "", "", "", "", ""].map(
        (text, index) => {
          var clink = `/category/` + index;
          return (
            <Grid
              item
              key={index}
              xs={6}
              sx={{ pt: 1 }}
              onClick={() => {
                console.log(text);
              }}
            >
              <Link to={clink} key={index} className="link">
                {text}
              </Link>
            </Grid>
          );
        }
      )}
    </Grid>
  );
}

export default Channels;
