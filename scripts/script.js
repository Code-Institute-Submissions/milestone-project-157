$(document).ready(function () {
  //  SPLASH SCREEN
  let percentage = 0;
  let timer = setInterval(() => {
    percentage++;
    $(".loading-bar").css("width", `${percentage}%`);
    if (percentage === 100) {
      $(".start-button").attr("disabled", false).removeClass("disabled-btn");
      clearInterval(timer);
    }
  }, 1);

  // PRESS START
  $(".start-button").on("click", () => {
    // CLEAR THE PAGE
    removeElemByClass(["heading", "loading-container", "start-button"]);
    // RUN FUNCTION TO CREATE HOMEPAGE ELEMENTS
    let { home, leftPanel, rightPanel } = createHomepage();
    // BUILD LEFT PANEL
    let { userInput, messagePanel, sendButton } = buildLeftPanel(leftPanel);
    // BUILD RIGHT PANEL
    buildRightPanel(home, messagePanel, rightPanel);

    // USER SENDS A MESSAGE
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
