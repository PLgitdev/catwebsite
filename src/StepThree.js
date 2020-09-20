import React from "react";

const StepThree = (props) => {
  const { history } = props;
  const { location } = history;
  const { state } = location;
  const value = state;
  const url = "http://localhost:8080/api/user";
  const fullValue = JSON.stringify({
    ...value,
    //image: "image", //image,
  });

  const params = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    mode: "cors",
    body: fullValue,
    method: "POST",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (fullValue !== undefined) & (fullValue !== null)
      ? fetch(url, params)
          .then((res) => {
            console.log(res);
          })
          .then(history.push("/sign-up-finish"))
          .catch((err) => {
            console.log(err);
          })
      : console.log("You have an error, value = undefined or null", fullValue);
  };

  return (
    <div>
      <form>
        <input type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
      </form>
    </div>
  );
};

export default StepThree;
