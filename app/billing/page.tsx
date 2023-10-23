import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import "./style.css";

export default function Billing() {
  return (
    <Card sx={{ maxWidth: 340 }} className="billingCard">
      <CardActionArea>
        <div className="priceTag">
          <h2 className="billingFstHeader">Noob</h2>
          <h5 className="billingSecHeader">Become a revenue machine</h5>
          <Typography
            variant="h2"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            ₹ 999{" "}
            <Typography style={{ display: "inline-block", marginLeft: "15px" }}>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", display: "block" }}
                color="textSecondary"
              >
                per user
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "12px", display: "inline" }}
                color="textSecondary"
              >
                /month
              </Typography>
            </Typography>
          </Typography>
        </div>

        <div className="card">
          <div className="button-container">
            <button className="custom-button">Upgrade</button>
          </div>
        </div>
        <CardContent>
          <h3>Growth features,plus</h3>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> 25 Users
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> Team Managament
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> includes essential features to get
            started
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> Secure data Storage
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> 24/7 customer support
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> Smart Activity Queue
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> More aduvanced features for increased
            productivity
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> IP Restriction
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> Customizable options to meet your
            specific needs
          </Typography>
          <Typography display={"flex"} gap={1.5} variant="overline">
            <DoneIcon color="success" /> increased workflow & sequence Limit
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
