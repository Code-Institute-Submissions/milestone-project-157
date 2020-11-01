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

function buildLeftPanel(leftPanel) {
  let headerPanel = document.createElement("section");
  $(headerPanel).attr("class", "left-header-panel");
  let messagePanel = document.createElement("section");
  $(messagePanel).attr("class", "left-message-panel");
  let footerPanel = document.createElement("section");
  $(footerPanel).attr("class", "left-footer-panel");
  $(leftPanel).append(headerPanel, messagePanel, footerPanel);
  // create the input element
  let userInput = input("Pour out your thoughts", "text", "user-input");
  // create send button
  let sendButton = document.createElement("button");
  $(sendButton).attr("class", "send-msg-btn");
  // $(sendButton).html("send");
  // append to footer panel
  $(footerPanel).append(userInput, sendButton);
  // create initial duck messages
  message(
    "Yes. I am a duck. 🦆 Yes, I am listening. What’s up? 👂",
    "duck",
    messagePanel
  );
  message(
    "I will try to preducked the best times to respond, but if you would like to get some feedback, click the red button.\n\n If instead you would like something more inspirational, click the yellow button.\n\n When you arrive at a solution to your problem, congratulations! Choose the green button to complete your Rubber Ducky session!",
    "duck",
    messagePanel
  );
  return { userInput, messagePanel, sendButton };
}

function message(text, type, container) {
  const msg = document.createElement("div");
  $(msg).attr("class", `${type}-message`);
  $(msg).text(text);
  $(container).append(msg);
  return msg;
}

function input(placeholder, type, id) {
  const ip = document.createElement("input");
  $(ip).attr("class", "input");
  $(ip).attr("type", type);
  $(ip).attr("id", id);
  $(ip).attr("placeholder", placeholder);
  return ip;
}
