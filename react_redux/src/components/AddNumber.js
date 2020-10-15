import React from "react";

const AddNumber = (props) => {
  const onClick = () => {
    props.onClick();
  };
  const onChange = (e) => {
    props.onChange(e);
  };

  return (
    <>
      <div className="box">
        <h3>AddNumber</h3>
        <input type="button" value="+" onClick={onClick} />
        <input type="number" value={props.number} onChange={onChange} />
      </div>
    </>
  );
};

export default AddNumber;
