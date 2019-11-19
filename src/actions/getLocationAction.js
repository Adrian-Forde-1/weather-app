export const getLocationAction = location => {
  return dispatch => {
    var key = "ec6dfc0230acc96c5bb5440515bd8601";
    // var information = {};
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?zip=" +
        location +
        "&appid=" +
        key
    )
      .then(responce => {
        // Convert data to json
        return responce.json();
      })
      .then(data => {
        dispatch({
          type: "GET_WEATHER",
          data
        });
      })
      .catch(function() {
        // catch any errors
        console.log("error occured");
      });
  };
};
