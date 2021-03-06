import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Header from "../Header/Header";
import Progress from "../ProgressBar/ProgressBar";
import SaveContinue from "../SaveContinue/SaveContinue";
import SystemList from "../SystemsList/SystemList";
import ConnectedSystem from "../ConnectedSystem/ConnectedSystem";

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

function ConnectSystems(props) {
  const [systemsToRender, setsystemsToRender] = useState([]);
  const [systemsAndSubSystems, setSystemsAndSubSystems] = useState([]);
  
  const classes = useStyles();

  function onListChange(systems) {
    setsystemsToRender(systems);
  }

  function onSubmit(subSystems) {
    let subSystemsToSave = subSystems;

    setSystemsAndSubSystems((prevState) => [...prevState, subSystems]);
    props.onPageSubmitChange(subSystemsToSave);
  }

  function onDelete(subSystemDelete) {
    let subSystemsToDelete = subSystemDelete;
    setSystemsAndSubSystems((prevState) =>
      prevState.filter(
        (subSystem) =>
          JSON.stringify(subSystem) !== JSON.stringify(subSystemsToDelete)
      )
    );
    props.onPageSubmitDelete(subSystemsToDelete);
  }

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
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                {systemsToRender.map((system) => {
                  return (
                    <ConnectedSystem
                      key={system}
                      systemName={system}
                      onSubmit={onSubmit}
                      onDelete={onDelete}
                    />
                  );
                })}
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <div>Systems Connected:</div>
              <SystemList onListChange={onListChange} />
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Progress percent={33} />
          </Grid>

          <SaveContinue to={"/chooseControls"} />
        </Grid>
      </div>
    </div>
  );
}

export default ConnectSystems;
