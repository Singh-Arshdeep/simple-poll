import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "100px",
    backgroundColor: "beige",
    padding: 10,
    margin: 10,
    height: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  list: {
    width: "100%",
  },
});

const PollLayout = (props) => {
  const classes = useStyles();

  const [poll, setPoll] = useState(props.pollData);

  //The following function is nothing but a lot of spread operator
  /** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
   * run the following example somewhere and you will undertstand the power of spread opertor
   * const obj1 = { foo: "bar", x: 42 };
   * const obj2 = { foo: "baz", y: 13 };
   * //removes duplicate
   * let obj3 = { ...obj1, ...obj2 }; //only keep values from second in the case of a duplicate
   * console.log(obj3);
   */
  const handleOptionClick = (option) => {
    setPoll((prevState) => {
      return {
        ...prevState,
        options: {
          ...prevState.options,
          [option]: prevState.options[option] + 1,
        },
      };
    });

    // now we may choose to upload only single poll in the backend:
    // updatePollBackEnd(props.pollId, poll); // call backend

    // This is if we instead want to update the main data,
    // i.e. in the big data set
    // this is just for fun
    props.handleDataChange(props.pollId, poll);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {poll.ques}
        </Typography>
      </CardContent>
      <CardActions>
        <List className={classes.list}>
          {Object.entries(poll.options).map(([key, value]) => (
            <div key={key}>
              <ListItem
                button
                onClick={() => {
                  handleOptionClick(key);
                }}
              >
                <span>{key}</span>
                <span style={{ paddingLeft: 180, position: "absolute" }}>
                  {value}
                </span>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </CardActions>
    </Card>
  );
};

export default PollLayout;
