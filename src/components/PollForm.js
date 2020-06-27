import React, { useState, useEffect } from "react";
import PollFormOption from "./PollFormOption";

const PollForm = (props) => {
  const [pollData, setPollData] = useState({
    question: "",
    options: {
      option1: { "": 0 },
    },
  });
  const [dynamicOption, setDynamicOption] = useState([]);
  const [optionId, setOptionId] = useState(2);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPollData((prevState) => {
      if (name === "question") {
        return {
          ...prevState,
          [name]: value,
        };
      } else {
        return {
          ...prevState,
          options: { ...prevState.options, [name]: { [value]: 0 } },
        };
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewPoll(pollData);
  };

  const addOption = () => {
    setDynamicOption((prevState) => {
      return [
        ...prevState,
        <PollFormOption
          key={optionId}
          id={optionId}
          handleChange={handleChange}
          pollData={pollData}
        />,
      ];
    });

    setOptionId(optionId + 1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="question"
            value={pollData.question}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Option:
          <input
            type="text"
            name="option1"
            value={Object.keys(pollData.options["option1"])[0]}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {dynamicOption}
      <br />
      <div>
        <span
          onClick={addOption}
          style={{ border: "solid", padding: "5px 10px" }}
        >
          + (Add option)
        </span>
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PollForm;
