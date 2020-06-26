import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// componenets
import PollLayout from "./PollLayout";

// data
import { ALL_POLL } from "./data";

const useStyles = makeStyles({
  poll: {
    padding: 20,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
});

const Poll = () => {
  const classes = useStyles();
  const [allPoll, setAllPoll] = useState(ALL_POLL);

  // ignore this function for now
  // come back to it at last
  const handleDataChange = (pollId, updatedPollData) => {
    setAllPoll((prevState) => {
      return {
        ...prevState,
        [pollId]: updatedPollData,
      };
    });
    // Now you may choose to send allPoll in the backend too
    // this also has updated data
    // updatePollBackEnd(allPoll); // call backend
  };

  return (
    <div className={classes.poll}>
      {Object.entries(allPoll).map(([key, value]) => (
        <PollLayout
          pollData={value}
          key={key}
          pollId={key}
          handleDataChange={handleDataChange}
        />
      ))}
    </div>
  );
};

export default Poll;
