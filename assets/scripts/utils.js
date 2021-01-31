const duckQuestionResponses = [
  "I can see you asked me a question, I'd love to help, but I am a duck...",
  "Wait... you're seriously asking me? ... you do realise I'm a duck?",
  'Well I mean, I guess, the question is what do YOU think about it?',
  "Interesting question, I know a guy who might be able to help you with that...he's YOU!",
  "That's a tough one for me to answer, maybe try to rephrase it for me?",
  "It's like my father used to say, 'Quack quack quack qua-' oh wait, you don't speak duck do you? Well tough, I'm not repeating myself...",
];

/**
 * Removes an element(s) by targeting class name attribute.
 * @function
 * @param {string} args - The class name(s) associated with an element or multiple elements.
 */
function removeElemByClass(args) {
  args.map((arg) => $(`.${arg}`).remove());
}

/**
 * Removes an element(s) by targeting id attribute.
 * @function
 * @param {string} args - The id(s) associated with an element or multiple elements.
 */
function removeElemById(args) {
  args.map((arg) => $(`#${arg}`).remove());
}

/**
 * Makes call to 8-ball API and updates message panel with response message
 * @async_function
 * @param {HTMLElement} messagePanel - The panel that will be updated with
 * the message response
 */
async function questionButton(messagePanel) {
  try {
    const { magic } = await eightBallAPI();
    updateChatHistory(magic.answer, false);
    message(magic.answer, 'duck', messagePanel);
  } catch (err) {
    updateChatHistory('Something went wrong...', false);
    message('Messed up...', 'duck', messagePanel);
  }
}

/**
 * Makes call to quotes API and updates message panel with quote message
 * @async_function
 * @param {HTMLElement} messagePanel - The panel that will be updated with
 * the message response
 */
async function inspirationButton(messagePanel) {
  try {
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

/**
 * Updates local storage with a new message
 * @function
 * @param {string} msg - The message that's being sent
 * @param {boolean} userType - Boolean representing the message sender
 */
function updateChatHistory(msg, userType) {
  try {
    let chatHistory = JSON.parse(localStorage.getItem('chat'));
    const chatMessage = {
      name: userType ? 'user' : 'duck',
      text: msg,
      createdAt: new Date(),
    };
    chatHistory.push(chatMessage);
    localStorage.setItem('chat', JSON.stringify(chatHistory));
  } catch (_error) {
    const initialMessage = [
      {
        name: userType ? 'user' : 'duck',
        text: msg,
        createdAt: new Date(),
      },
    ];
    localStorage.setItem('chat', JSON.stringify(initialMessage));
  }
}

/**
 * Gets a copy of message history in local storage, and
 * formats it to be downloadable from an anchor href
 * @function
 */
function downloadMessageHistory() {
  const chatHistory = encodeURIComponent(
    JSON.stringify(localStorage.getItem('chat'))
  );
  const dataURL = `data:application/json,${chatHistory}`;
  return dataURL;
}
