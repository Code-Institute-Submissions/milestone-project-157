$(document).ready(function () {
  //  Splash screen
  let percentage = 0;
  while (percentage < 100) {
    percentage++;
    $(".loading-bar").css("width", `${percentage}%`);
  }
  if (percentage === 100) {
    $(".start-button").attr("disabled", false).removeClass("disabled-btn");
  }

  $(".start-button").on("click", function () {
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
        console.log("User asked question");
        message(
          "I can see you asked me a question, I'd love to help, but I am a duck...",
          "duck",
          messagePanel
        );
      }
    });
  });
});
