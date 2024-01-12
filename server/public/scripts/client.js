function onReady() {
  console.log("client.js is sourced!");
  // get DOM element where calc history will go
  let resultHistory = document.getElementById("resultHistory");
  let recentResult = document.getElementById("recentResult");

  const resultData = getCalcData();
  if (resultData) {
    console.log("Put this on the DOM", resultData);
    const mostRecent = getRecentResult(resultData);
    recentResult.append(mostRecent);
    resultHistory.append(resultData);
  } else {
    console.log("Nothing to see here..");
    resultHistory.innerHTML = "Nothing to see here..";
  }
}

function getCalcData() {
  console.log("go get calc history from server...");
  axios
    .get("/calculations")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(`Server Error: ${error}`);
    });
}

function getRecentResult(calcHistory) {
  return calcHistory.pop();
}

onReady();
