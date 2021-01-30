/**
 * Create the Home page, returning the home section, left and right sections
 * @function
 */
const createHomepage = () => {
  let home = document.createElement('section');
  $(home).attr('id', 'home');
  let leftPanel = document.createElement('section');
  $(leftPanel).attr('class', 'left-panel');
  let rightPanel = document.createElement('section');
  $(rightPanel).attr('class', 'right-panel');
  $(home).append(leftPanel);
  $(home).append(rightPanel);
  $('body').html(home);
  return { home, leftPanel, rightPanel };
};

/**
 * Build the left section of the screen
 * @function
 * @param {HTMLElement} leftPanel - Container section element
 * @param {HTMLElement} home - Main section container
 */
function buildLeftPanel(leftPanel, home) {
  //   Create the header
  let headerPanel = document.createElement('section');
  $(headerPanel).attr('class', 'left-header-panel');
  let title = document.createElement('h2');
  $(title).text('Rubber Duck');
  // Create mini darkmode toggle
  let modeLabelMini = document.createElement('label');
  $(modeLabelMini).attr('class', 'switch small-toggle');
  let modeSpanMini = document.createElement('span');
  $(modeSpanMini).attr('class', 'slider round');
  let modeToggleMini = document.createElement('input');
  $(modeToggleMini).attr('type', 'checkbox');
  $(modeToggleMini).attr('id', 'mode');
  $(modeLabelMini).append(modeToggleMini, modeSpanMini);
  // Create 3 mini action buttons
  let miniBtnContainer = document.createElement('div');
  $(miniBtnContainer).attr('class', 'mini-btn-container');
  let { qMiniBtn, iMiniBtn, sMiniBtn } = buildMiniOptions();
  $(miniBtnContainer).append(modeLabelMini, qMiniBtn, iMiniBtn, sMiniBtn);
  $(headerPanel).append(title, miniBtnContainer);
  // Create the message panel section
  let messagePanel = document.createElement('section');
  $(messagePanel).attr('class', 'left-message-panel');
  //  Create the footer panel to hold input element
  let footerPanel = document.createElement('section');
  $(footerPanel).attr('class', 'left-footer-panel');
  $(leftPanel).append(headerPanel, messagePanel, footerPanel);
  // Create the input element
  let userInput = textArea('Type here', 'user-input');
  // Create send button
  let sendButton = document.createElement('button');
  $(sendButton).attr('class', 'send-msg-btn');
  let sendButtonIcon = document.createElement('img');
  $(sendButtonIcon).attr('class', 'send-msg-btn-icon');
  $(sendButtonIcon).attr('src', 'assets/images/send.png');
  $(sendButton).append(sendButtonIcon);
  // append input and send button to the footer
  $(footerPanel).append(userInput, sendButton);

  //   toggle dark mode from left panel
  $(modeToggleMini).change(function () {
    if (this.checked) {
      $(messagePanel).addClass('darkmode');
    } else {
      $(messagePanel).removeClass('darkmode');
    }
  });

  //   If mini question button clicked
  $(qMiniBtn).click(() => questionButton(messagePanel));
  //   If mini inspiration button clicked
  $(iMiniBtn).click(() => inspirationButton(messagePanel));
  //   If mini success button clicked
  $(sMiniBtn).click(() => buildSuccessModal(home));

  // When a user keys down within the message input, call autosize function
  $(userInput).keydown(autosize);
  // Create initial duck messages and append to message panel
  message(
    'Yes, I am a duck 🦆 Yes, I am listening 👂 What’s up?',
    'duck',
    messagePanel,
    true
  );
  setTimeout(() => {
    message(
      "If you want to ask me anything, be sure to end your message with a <b><em>'?'</em></b>. If you would like to get some direct feedback at any point, click the <span class='red'>red</span> button.\n\n If instead you would like something more inspirational, click the <span class='yellow'>yellow</span> button.\n\n When you arrive at a solution to your problem, congratulations! Choose the <span class='green'>green</span> button to complete your Rubber Duck session!",
      'duck',
      messagePanel,
      true
    );
  }, 1000);
  return { userInput, messagePanel, sendButton };
}

/**
 * Build the right section of the screen
 * @function
 * @param {HTMLElement} home - Main section container
 * @param {HTMLElement} messagePanel - Message panel section
 * @param {HTMLElement} rightPanel - Container section element
 */
function buildRightPanel(home, messagePanel, rightPanel) {
  // create darkmode toggle
  const modeLabel = document.createElement('label');
  $(modeLabel).attr('class', 'switch');
  const modeSpan = document.createElement('span');
  $(modeSpan).attr('class', 'slider round');
  let modeToggle = document.createElement('input');
  $(modeToggle).attr('type', 'checkbox');
  $(modeToggle).attr('id', 'mode');
  $(modeLabel).append(modeToggle, modeSpan);
  // create duck image element
  let duckImg = document.createElement('img');
  $(duckImg).attr('id', 'duck-image');
  $(duckImg).attr('src', 'assets/images/rubber_duck.png');
  $(duckImg).attr('alt', 'Rubber Duck');
  // create button container
  let btnContainer = document.createElement('section');
  $(btnContainer).attr('class', 'btn-container');
  $(rightPanel).append(modeLabel, duckImg, btnContainer);
  let { qBtn, iBtn, sBtn } = buildOptions();
  $(btnContainer).append(qBtn, iBtn, sBtn);

  // toggle dark mode from right panel
  $(modeToggle).change(function () {
    if (this.checked) {
      $(rightPanel).addClass('darkmode');
      $(messagePanel).addClass('darkmode');
    } else {
      $(rightPanel).removeClass('darkmode');
      $(messagePanel).removeClass('darkmode');
    }
  });

  // If question button clicked
  $(qBtn).click(() => questionButton(messagePanel));
  // If inspiration button clicked
  $(iBtn).click(() => inspirationButton(messagePanel));
  // If success button clicked
  $(sBtn).click(() => buildSuccessModal(home));
}

/**
 * Build the Information button
 * @function
 * @param {HTMLElement} home - Main section container
 */
function buildInfoButton(home) {
  const infoButton = document.createElement('button');
  $(infoButton).attr('class', 'info-btn');
  let infoButtonIcon = document.createElement('img');
  $(infoButtonIcon).attr('class', 'info-btn-icon');
  $(infoButtonIcon).attr('src', 'assets/images/question-mark.png');
  $(infoButton).append(infoButtonIcon);
  $(infoButton).on('click', () => buildInfoModal(home));
  $(home).append(infoButton);
}

/**
 * Build the 3 main option buttons
 * @function
 */
function buildOptions() {
  let qBtn = document.createElement('button');
  $(qBtn).attr('class', 'duck-btn');
  $(qBtn).attr('id', 'question-btn');
  let iBtn = document.createElement('button');
  $(iBtn).attr('class', 'duck-btn');
  $(iBtn).attr('id', 'inspiration-btn');
  let sBtn = document.createElement('button');
  $(sBtn).attr('class', 'duck-btn');
  $(sBtn).attr('id', 'success-btn');
  return { qBtn, iBtn, sBtn };
}

/**
 * Build the 3 mini option buttons
 * @function
 */
function buildMiniOptions() {
  let qMiniBtn = document.createElement('button');
  $(qMiniBtn).attr('class', 'duck-mini-btn');
  $(qMiniBtn).attr('id', 'question-mini-btn');
  let iMiniBtn = document.createElement('button');
  $(iMiniBtn).attr('class', 'duck-mini-btn');
  $(iMiniBtn).attr('id', 'inspiration-mini-btn');
  let sMiniBtn = document.createElement('button');
  $(sMiniBtn).attr('class', 'duck-mini-btn');
  $(sMiniBtn).attr('id', 'success-mini-btn');
  return { qMiniBtn, iMiniBtn, sMiniBtn };
}

/**
 * Build a message component
 * @function
 * @param {string} text - The message text
 * @param {string} type - Either 'duck' or 'user' message
 * @param {HTMLElement} container - The containing element to append the message
 * @param {boolean} isInitial - If the initial duck messages
 */
function message(text, type, container, isInitial) {
  const msg = document.createElement('div');
  $(msg).attr('class', `${type}-message`);
  if (isInitial) $(msg).attr('id', 'initial');
  $(msg).html(text);
  $(container).append(msg);
  return msg;
}

/**
 * Build the Text Area
 * @function
 * @param {string} placeholder - The text area placeholder text
 * @param {string} id - The text area id attribute
 */
function textArea(placeholder, id) {
  const ip = document.createElement('textarea');
  $(ip).attr('class', 'input');
  $(ip).attr('id', id);
  $(ip).attr('placeholder', placeholder);
  $(ip).attr('cols', '50');
  $(ip).attr('rows', '1');
  return ip;
}

/**
 * Build the Information Modal
 * @function
 * @param {HTMLElement} home - Main section container
 */
function buildInfoModal(home) {
  const sModal = document.createElement('section');
  $(sModal).attr('class', 'info-modal');
  let closeButton = document.createElement('button');
  $(closeButton).attr('class', 'close-modal-btn');
  let closeButtonIcon = document.createElement('img');
  $(closeButtonIcon).attr('class', 'close-modal-btn-icon');
  $(closeButtonIcon).attr('src', 'assets/images/close.png');
  $(closeButton).append(closeButtonIcon);
  const info = `<h2>How it works</h2>
                <h3><i>Insights are often found by simply describing the problem aloud.</i><br/>— Duck, Quack Overflow</h3>
                <div class='info-grid'>
                <button class="duck-btn info" id="question-mini-btn"></button>
                <h4>Quesion button - By default, when you end a message with a question mark, Rubber Duck will respond to your question. Click here if you want Rubber Duck to respond at any time.</h4>
                <button class="duck-btn info" id="inspiration-mini-btn"></button>
                <h4>Inspiration button - If you're not getting anywhere with your problem, clicking the yellow button will have Rubber Duck sending you an inspirational quote to help you out.</h4>
                <button class="duck-btn info" id="success-mini-btn"></button>
                <h4>Success button - So you've solved your problem, great! Click the green button to finish your Rubber Duck session. Clicking Done will clear the chat log, alternatively you have the option of downloading a JSON formatted copy of your chat.</h4>
                <img class='info' src='assets/images/darkmode.png' alt='dark-mode'>
                <h4>Dark mode - As with any good site, a dark mode toggle is provided to make everything a bit easier on the eyes!</h4>
                </div>
                `;
  $(sModal).append(closeButton, info);
  $(home).append(sModal);
  // When the user clicks the close button
  $(closeButton).on('click', () => {
    $(sModal).remove();
  });
}

/**
 * Build the Success Modal
 * @function
 * @param {HTMLElement} home - Main section container
 */
function buildSuccessModal(home) {
  const bg = document.createElement('div');
  $(bg).attr('class', 'success-modal-container');
  const sModal = document.createElement('section');
  $(sModal).attr('class', 'success-modal');
  let closeButton = document.createElement('button');
  $(closeButton).attr('class', 'close-modal-btn');
  let closeButtonIcon = document.createElement('img');
  $(closeButtonIcon).attr('class', 'close-modal-btn-icon');
  $(closeButtonIcon).attr('src', 'assets/images/close.png');
  $(closeButton).append(closeButtonIcon);
  const chat = downloadMessageHistory();
  const test = `<h2>Congrats!</h2>
                <h4>You solved your own problem! Would you like a copy of your own messages?</h4>
                <div class="modal-button-container">
                  <a id="modal-download-btn" download="rubber-duck-${new Date().toISOString()}.json" href=${chat}>Download</a>
                  <button id="modal-done-btn">Done</button>
                </div>`;
  $(sModal).append(closeButton, test);
  $(bg).append(sModal);
  $(home).append(bg);
  // When the user clicks the download button
  $('#modal-download-btn').on('click', () => {
    $(bg).remove();
    clearMessages();
  });
  // When the user clicks the done button
  $('#modal-done-btn').on('click', () => {
    $(bg).remove();
    clearMessages();
  });
  // When the user clicks the close button
  $(closeButton).on('click', () => {
    $(bg).remove();
  });
}

/**
 * Format the Text Area size based on what the user has entered
 * @function
 */
function autosize() {
  var el = this;
  if (el.scrollHeight > 120) {
    el.style.cssText = 'overflow-y: scroll !important; height: 120px';
    el.removeEventListener('keydown', autosize);
  } else {
    setTimeout(function () {
      el.style.cssText = 'height:auto; padding:0';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }, 0);
  }
}

/**
 * Clear all messages except the initial duck messages
 * @function
 */
function clearMessages() {
  $('.user-message').remove();
  $('.duck-message:not(#initial)').remove();
}
