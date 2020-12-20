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
function buildLeftPanel(leftPanel) {
  let headerPanel = document.createElement("section");
  $(headerPanel).attr("class", "left-header-panel");
  let title = document.createElement("h2");
  $(title).text("Rubber Duck");
  // create 3 action buttons
  let { qBtn, iBtn, sBtn } = buildOptions();
  $(headerPanel).append(title, qBtn, iBtn, sBtn);
  $(qBtn).click(() => questionButton(messagePanel));
  $(iBtn).click(() => inspirationButton(messagePanel));
  $(sBtn).click(() => successButton());
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
  // append to footer panel
  $(footerPanel).append(userInput, sendButton);

  $(userInput).keydown(autosize);
  // create initial duck messages
  message(
    "Yes, I am a duck 🦆 Yes, I am listening 👂 What’s up?",
    "duck",
    messagePanel
  );
  setTimeout(() => {
    message(
      "I will try to preducked the best times to respond, but if you would like to get some feedback, click the <span class='red'>red</span> button.\n\n If instead you would like something more inspirational, click the <span class='yellow'>yellow</span> button.\n\n When you arrive at a solution to your problem, congratulations! Choose the <span class='green'>green</span> button to complete your Rubber Ducky session!",
      "duck",
      messagePanel
    );
  }, 1000);
  return { userInput, messagePanel, sendButton };
}

// CREATE THE RIGHT PANEL
function buildRightPanel(home, messagePanel, rightPanel) {
  // create darkmode toggle
  let modeToggle = document.createElement("input");
  $(modeToggle).attr("type", "checkbox");
  $(modeToggle).attr("id", "mode");
  // $(modeToggle).attr("value", "light");
  // create duck img element
  let duckImg = document.createElement("img");
  $(duckImg).attr("id", "duck-image");
  $(duckImg).attr("src", "assets/images/rubber_duck.png");
  $(duckImg).attr("alt", "Rubber Duck");
  // create button container
  let btnContainer = document.createElement("section");
  $(btnContainer).attr("class", "btn-container");
  $(rightPanel).append(modeToggle, duckImg, btnContainer);
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

// CREATE A MESSAGE BOX
function message(text, type, container) {
  const msg = document.createElement("div");
  $(msg).attr("class", `${type}-message`);
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

function buildSuccessModal(home) {
  const bg = document.createElement("div");
  $(bg).attr("class", "success-modal-container");
  const sModal = document.createElement("section");
  $(sModal).attr("class", "success-modal");
  $(bg).append(sModal);
  $(home).append(bg);
}

function autosize() {
  var el = this;
  if (el.scrollHeight > 120) {
    el.style.cssText = "overflow: scroll !important; height: 120px";
    el.removeEventListener("keydown", autosize);
  } else {
    setTimeout(function () {
      el.style.cssText = "height:auto; padding:0";
      el.style.cssText = "height:" + el.scrollHeight + "px";
    }, 0);
  }
}
