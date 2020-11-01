$(document).ready(function () {
  //  Splash screen
  let percentage = 0;
  let timer = setInterval(() => {
    percentage++;
    $(".loading-bar").css("width", `${percentage}%`);
    if (percentage === 100) {
      $(".start-button").attr("disabled", false).removeClass("disabled-btn");
      clearInterval(timer);
    }
  }, 25);

  $(".start-button").on("click", () => {
    removeElemByClass(["heading", "loading-container", "start-button"]);
    let { home, leftPanel, rightPanel } = createHomepage();
    let { userInput, messagePanel, sendButton } = buildLeftPanel(leftPanel);
    buildRightPanel(messagePanel, rightPanel);

    $(sendButton).click(() => {
      console.log("Send message button was clicked!");
      let userMsg = $(userInput).val();
      if (userMsg === "") return;
      else {
        // check message for errors here
        message(userMsg, "user", messagePanel);
        // reset the input
        $(userInput).val("");
      }
      // check if users message ended with question mark
      if (userMsg.charAt(userMsg.length - 1) === "?") {
        console.log("User asked a question");
        setTimeout(() => {
          // choose a randome duck response
          const response = Math.floor(
            Math.random() * duckQuestionResponses.length
          );
          message(duckQuestionResponses[response], "duck", messagePanel);
        }, 1000);
      }
    });
  });
});
