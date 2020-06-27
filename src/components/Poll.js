import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

// componenets
import PollLayout from "./PollLayout";
import PollModal from "./PollModal";

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

  const handleAddNewPoll = (newPoll) => {
    const newPollId = "poll" + (Object.keys(allPoll).length + 1);
    setAllPoll((prevState) => {
      return {
        ...prevState,
        [newPollId]: newPoll,
      };
    });
  };

  useEffect(() => {
    console.log(Object.keys(allPoll).length);
  }, [allPoll]);

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
      <PollModal handleAddNewPoll={handleAddNewPoll} />
    </div>
  );
};

export default Poll;
