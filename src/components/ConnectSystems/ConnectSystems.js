import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";

// import "./ConnectSystems.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(2),
      textAlign: "center",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function ConnectSystems() {
  const classes = useStyles();

  return (
    <div>
      <Header to={"/runAudit"} />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h1>Connect Systems</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item xs={6}>
              <div className="SystemsConnectedContainer">
                <div>ERP</div>
                <div>CRM</div>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div className="SystemstoConnect">Systems Connected:</div>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Progress percent={33} />
          </Grid>
          {/* <button>save</button>
          <Link to="/chooseControls" style={{ textDecoration: "none" }}>
            <button>continue</button>
          </Link> */}
          <SaveContinue to={"/chooseControls"}/>
        </Grid>
      </div>
    </div>
  );
}

export default ConnectSystems;
