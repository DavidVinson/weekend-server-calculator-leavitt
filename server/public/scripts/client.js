function onReady() {
  console.log("client.js is sourced!");
  // get DOM element where calc history will go
  let resultHistory = document.getElementById("resultHistory");
  // let recentResult = document.getElementById("recentResult");

  axios
    .get("/calculations")
    .then((response) => {
      // console.log("calc data response", response.data);
      const resultData = response.data;
      if (resultData) {
        console.log("Put this on the DOM", resultData);
        // const mostRecent = getRecentResult(resultData);
        // recentResult.append(mostRecent);
        // resultHistory.append(resultData);
      } else {
        console.log("Nothing to see here..");
        resultHistory.innerHTML = "Nothing to see here..";
      }
    })
    .catch((error) => {
      throw new Error(`Server Error: ${error}`);
    });
}

// function getCalcData() {
//   console.log("go get calc history from server...");
// }

// function getRecentResult(calcHistory) {
//   return calcHistory.pop();
// }

onReady();
