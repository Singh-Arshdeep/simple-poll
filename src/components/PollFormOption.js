import React from "react";

const PollFormOption = (props) => {
  let optionName = "option" + props.id;

  return (
    <div>
      <label>
        Option:
        <input
          type="text"
          name={optionName}
          onChange={props.handleChange}
          value={props.pollData.options["option" + props.id]}
          required
        />
      </label>
    </div>
  );
};

export default PollFormOption;
