async function getQuote() {
  const response = await fetch("http://quotes.rest/qod.json?category=inspire");
  const data = await response.json();
  return data;
}
