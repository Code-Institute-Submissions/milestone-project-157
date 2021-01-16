function removeElemByClass(args) {
  args.map((arg) => $(`.${arg}`).remove());
}

function removeElemById(args) {
  args.map((arg) => $(`#${arg}`).remove());
}

const duckQuestionResponses = [
  "I can see you asked me a question, I'd love to help, but I am a duck...",
  "Wait... you're seriously asking me? ... you do realise I'm a duck?",
  'Well I mean, I guess, the question is what do YOU think about it?',
  "Interesting question, I know a guy who might be able to help you with that...he's YOU!",
  "That's a tough one for me to answer, maybe try to rephrase it for me?",
  "It's like my father used to say, 'Quack quack quack qua-' oh wait, you don't speak duck do you? Well tough, I'm not repeating myself...",
];

async function questionButton(messagePanel) {
  console.log('Question Button Clicked!');
  // make call to 8-ball API
  try {
    const { magic } = await eightBallAPI();
    console.log(magic.answer);
    updateChatHistory(magic.answer, false);
    message(magic.answer, 'duck', messagePanel);
  } catch (err) {
    updateChatHistory('Messed up...', false);
    message('Messed up...', 'duck', messagePanel);
  }
}

async function inspirationButton(messagePanel) {
  console.log('Inspiration Button Clicked!');
  try {
    // make API call to inspirational Quotes
    const { contents } = await getQuote();
    const quote = contents.quotes[0].quote;
    updateChatHistory(quote, false);
    message(quote, 'duck', messagePanel);
  } catch (err) {
    updateChatHistory(
      "I'm all out of quotes for now, you'll have to wait until I can think of more...",
      false
    );
    message(
      "I'm all out of quotes for now, you'll have to wait until I can think of more...",
      'duck',
      messagePanel
    );
  }
}

function successButton() {
  console.log('Success Button Clicked!');
  // create modal window
  $();
}

function updateChatHistory(msg, userType) {
  let chatHistory = JSON.parse(localStorage.getItem('chat'));

  var chatMessage = {
    name: userType ? 'user' : 'duck',
    text: msg,
    createdAt: new Date(),
  };
  chatHistory.push(chatMessage);
  localStorage.setItem('chat', JSON.stringify(chatHistory));
}
