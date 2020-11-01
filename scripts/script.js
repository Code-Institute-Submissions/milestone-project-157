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
    buildLeftPanel(leftPanel);
    // message("Initial text", leftPanel);
    // input("Enter your message here", "text", "user-input", leftPanel);
  });
});
