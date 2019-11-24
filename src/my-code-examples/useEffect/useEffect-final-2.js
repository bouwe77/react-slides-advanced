import React, { useEffect, useState } from "react";

export default function App() {
  const QUOTES = "QUOTES";
  const [newQuote, setNewQuote] = useState("");
  const [quotes, setQuotes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newQuotes = [...quotes, newQuote];
    setQuotes(newQuotes);
    localStorage.setItem(QUOTES, JSON.stringify(newQuotes));
  }

  // This effect is triggered on every render.
  // and it sets the document title with the new quote.
  useEffect(() => {
    document.title = newQuote;
  });

  // This effect is triggered on the first render
  // and it fetches all existing quotes from local storage.
  useEffect(() => {
    const quotes = JSON.parse(localStorage.getItem(QUOTES));
    if (quotes) setQuotes(quotes);
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={event => setNewQuote(event.target.value)}
          value={newQuote}
        />
        <button type="submit">Save</button>
      </form>
      <div>
        <ul>
          {quotes.map(quote => (
            <li>{quote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// What we'll learn in this example:
// (1) How to control if and when a useEffect function is executed:
//     * After every render.
//     * Only after the first render (on mount).
//     * Only when a dependency changes.
// (2) That useEffect can be used for separation of concern. (and many other situations...)
// (3) That the return value of a useEffect is a cleanup function.
//     A common use for this is cleaning up external resources
//     or to avoid setting state on unmounted components.
