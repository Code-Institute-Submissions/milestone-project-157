// CREATE THE HOMEPAGE
const createHomepage = () => {
  let home = document.createElement("section");
  $(home).attr("id", "home");
  let leftPanel = document.createElement("section");
  $(leftPanel).attr("class", "left-panel");
  let rightPanel = document.createElement("section");
  $(rightPanel).attr("class", "right-panel");
  $(home).append(leftPanel);
  $(home).append(rightPanel);
  $("body").html(home);
  return { home, leftPanel, rightPanel };
};

// CREATE THE LEFT PANEL
function buildLeftPanel(leftPanel, home) {
  let headerPanel = document.createElement("section");
  $(headerPanel).attr("class", "left-header-panel");
  let title = document.createElement("h2");
  $(title).text("Rubber Duck");
  // create darkmode toggle
  const modeLabel2 = document.createElement("label");
  $(modeLabel2).attr("class", "switch small-toggle");
  const modeSpan2 = document.createElement("span");
  $(modeSpan2).attr("class", "slider round");
  let modeToggle2 = document.createElement("input");
  $(modeToggle2).attr("type", "checkbox");
  $(modeToggle2).attr("id", "mode");
  $(modeLabel2).append(modeToggle2, modeSpan2);
  // create 3 action buttons
  let miniBtnContainer = document.createElement("div");
  $(miniBtnContainer).attr("class", "mini-btn-container");
  let { qMiniBtn, iMiniBtn, sMiniBtn } = buildMiniOptions();
  $(miniBtnContainer).append(modeLabel2, qMiniBtn, iMiniBtn, sMiniBtn);
  $(headerPanel).append(title, miniBtnContainer);
  let messagePanel = document.createElement("section");
  $(messagePanel).attr("class", "left-message-panel");
  let footerPanel = document.createElement("section");
  $(footerPanel).attr("class", "left-footer-panel");
  $(leftPanel).append(headerPanel, messagePanel, footerPanel);
  // create the input element
  let userInput = textArea("Type here", "user-input");
  // create send button
  let sendButton = document.createElement("button");
  $(sendButton).attr("class", "send-msg-btn");
  let sendButtonIcon = document.createElement("img");
  $(sendButtonIcon).attr("class", "send-msg-btn-icon");
  $(sendButtonIcon).attr("src", "assets/images/send.png");
  $(sendButton).append(sendButtonIcon);
  // append to footer panel
  $(footerPanel).append(userInput, sendButton);

  $(modeToggle2).change(function () {
    if (this.checked) {
      console.log("Checked");
      $(messagePanel).addClass("darkmode");
    } else {
      $(messagePanel).removeClass("darkmode");
    }
  });

  $(qMiniBtn).click(() => questionButton(messagePanel));
  $(iMiniBtn).click(() => inspirationButton(messagePanel));
  $(sMiniBtn).click(() => buildSuccessModal(home));

  $(userInput).keydown(autosize);
  // create initial duck messages
  message(
    "Yes, I am a duck 🦆 Yes, I am listening 👂 What’s up?",
    "duck",
    messagePanel,
    true
  );
  setTimeout(() => {
    message(
      "If you want to ask me anything, be sure to end your message with a <b><em>'?'</em></b>. If you would like to get some direct feedback at any point, click the <span class='red'>red</span> button.\n\n If instead you would like something more inspirational, click the <span class='yellow'>yellow</span> button.\n\n When you arrive at a solution to your problem, congratulations! Choose the <span class='green'>green</span> button to complete your Rubber Duck session!",
      "duck",
      messagePanel,
      true
    );
  }, 1000);
  return { userInput, messagePanel, sendButton };
}

// CREATE THE RIGHT PANEL
function buildRightPanel(home, messagePanel, rightPanel) {
  // create darkmode toggle
  const modeLabel = document.createElement("label");
  $(modeLabel).attr("class", "switch");
  const modeSpan = document.createElement("span");
  $(modeSpan).attr("class", "slider round");
  let modeToggle = document.createElement("input");
  $(modeToggle).attr("type", "checkbox");
  $(modeToggle).attr("id", "mode");
  $(modeLabel).append(modeToggle, modeSpan);
  // create duck img element
  let duckImg = document.createElement("img");
  $(duckImg).attr("id", "duck-image");
  $(duckImg).attr("src", "assets/images/rubber_duck.png");
  $(duckImg).attr("alt", "Rubber Duck");
  // create button container
  let btnContainer = document.createElement("section");
  $(btnContainer).attr("class", "btn-container");
  $(rightPanel).append(modeLabel, duckImg, btnContainer);
  let { qBtn, iBtn, sBtn } = buildOptions();
  $(btnContainer).append(qBtn, iBtn, sBtn);

  $(modeToggle).change(function () {
    if (this.checked) {
      console.log("Checked");
      $(rightPanel).addClass("darkmode");
      $(messagePanel).addClass("darkmode");
    } else {
      $(rightPanel).removeClass("darkmode");
      $(messagePanel).removeClass("darkmode");
    }
  });

  $(qBtn).click(() => questionButton(messagePanel));
  $(iBtn).click(() => inspirationButton(messagePanel));
  $(sBtn).click(() => buildSuccessModal(home));
}

// CREATE OPTION BUTTONS
function buildOptions() {
  // create three buttons
  let qBtn = document.createElement("button");
  $(qBtn).attr("class", "duck-btn");
  $(qBtn).attr("id", "question-btn");
  let iBtn = document.createElement("button");
  $(iBtn).attr("class", "duck-btn");
  $(iBtn).attr("id", "inspiration-btn");
  let sBtn = document.createElement("button");
  $(sBtn).attr("class", "duck-btn");
  $(sBtn).attr("id", "success-btn");
  return { qBtn, iBtn, sBtn };
}

// CREATE MINI OPTION BUTTONS
function buildMiniOptions() {
  // create three buttons
  let qMiniBtn = document.createElement("button");
  $(qMiniBtn).attr("class", "duck-mini-btn");
  $(qMiniBtn).attr("id", "question-mini-btn");
  let iMiniBtn = document.createElement("button");
  $(iMiniBtn).attr("class", "duck-mini-btn");
  $(iMiniBtn).attr("id", "inspiration-mini-btn");
  let sMiniBtn = document.createElement("button");
  $(sMiniBtn).attr("class", "duck-mini-btn");
  $(sMiniBtn).attr("id", "success-mini-btn");
  return { qMiniBtn, iMiniBtn, sMiniBtn };
}

// CREATE A MESSAGE BOX
function message(text, type, container, isInitial) {
  const msg = document.createElement("div");
  $(msg).attr("class", `${type}-message`);
  if (isInitial) $(msg).attr("id", "initial");
  $(msg).html(text);
  $(container).append(msg);
  return msg;
}

// CREATE THE INPUT
function textArea(placeholder, id) {
  const ip = document.createElement("textarea");
  $(ip).attr("class", "input");
  $(ip).attr("id", id);
  $(ip).attr("placeholder", placeholder);
  $(ip).attr("cols", "50");
  $(ip).attr("rows", "1");
  return ip;
}

// CREATE THE SUCCESS MODAL
function buildSuccessModal(home) {
  const bg = document.createElement("div");
  $(bg).attr("class", "success-modal-container");
  const sModal = document.createElement("section");
  $(sModal).attr("class", "success-modal");

  const chat = downloadMessageHistory();

  const test = `<h2>Congrats!</h2>
                <h4>You solved your own problem! Would you like a copy of your own messages?</h4>
                <div class="modal-button-container">
                  <a id="modal-download-btn" download="rubber-duck-${new Date().toISOString()}.json" href=${chat}>Download</a>
                  <button id="modal-done-btn">Done</button>
                </div>`;
  $(sModal).append(test);
  $(bg).append(sModal);
  $(home).append(bg);

  $("#modal-download-btn").on("click", () => {
    $(bg).remove();
    // clear all div class user-message
    // clear all but first 2 div class duck-message
    clearMessages();
  });

  $("#modal-done-btn").on("click", () => {
    $(bg).remove();
    clearMessages();
  });
}

function autosize() {
  var el = this;
  if (el.scrollHeight > 120) {
    el.style.cssText = "overflow-y: scroll !important; height: 120px";
    el.removeEventListener("keydown", autosize);
  } else {
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }
}

function clearMessages() {
  $(".user-message").remove();
  $(".duck-message:not(#initial)").remove();
}
