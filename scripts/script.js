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
    let { questionBtn, inspoBtn, successBtn } = buildRightPanel(rightPanel);

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
    });

    $(questionBtn).click(() => {
      console.log("questionBtn clicked!");
    });

    $(inspoBtn).click(() => {
      console.log("inspoBtn clicked!");
    });

    $(successBtn).click(() => {
      console.log("successBtn clicked!");
    });
  });
});
