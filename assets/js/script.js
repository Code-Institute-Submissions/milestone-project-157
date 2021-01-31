$(document).ready(function () {
  //  Initial Splash screen
  localStorage.setItem('chat', JSON.stringify([]));
  let percentage = 0;
  // Splash screen loading bar
  let timer = setInterval(() => {
    percentage++;
    $('.loading-bar').css('width', `${percentage}%`);
    if (percentage === 100) {
      $('.start-button').attr('disabled', false).removeClass('disabled-btn');
      clearInterval(timer);
    }
  }, 1);

  // When a user clicks start from Splash screen
  $('.start-button').on('click', () => {
    // Clear the page
    removeElemByClass(['heading', 'loading-container', 'start-button']);
    // Create the Home page
    let { home, leftPanel, rightPanel } = createHomepage();
    // Build Left Panel
    let { userInput, messagePanel, sendButton } = buildLeftPanel(
      leftPanel,
      home
    );
    // Build Right Panel
    buildRightPanel(home, messagePanel, rightPanel);
    // Build Info Button
    buildInfoButton(home);
    // User sends a message
    $(sendButton).click(() => {
      let userMsg = $(userInput).val();
      // If message input is empty do nothign
      if (userMsg === '') return;
      else {
        // add to local storage
        updateChatHistory(userMsg, true);
        // check message for errors here
        message(userMsg, 'user', messagePanel);
        // reset the input
        $(userInput).val('');
      }
      // check if users message ended with question mark
      if (userMsg.charAt(userMsg.length - 1) === '?') {
        setTimeout(() => {
          // choose a random duck response
          const response = Math.floor(
            Math.random() * duckQuestionResponses.length
          );
          updateChatHistory(duckQuestionResponses[response], false);
          message(duckQuestionResponses[response], 'duck', messagePanel);
        }, 1000);
      }
    });
  });
});
