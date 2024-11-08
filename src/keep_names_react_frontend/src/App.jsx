import { useState, useEffect } from 'react';
import { keep_names_react_backend } from 'declarations/keep_names_react_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [names, setNames] = useState('');

  useEffect(() => {
    // Fetch the submitted names when the component mounts
    fetchSubmittedNames();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    keep_names_react_backend.greet(name).then(() => {
      // After greeting, fetch the updated list of names
      fetchSubmittedNames();
    });
  }

  async function fetchSubmittedNames() {
    const submittedNames = await keep_names_react_backend.submittedNames();
    setNames(submittedNames);
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">
        <h2>Submitted Names:</h2>
        <p>{names}</p>
      </section>
    </main>
  );
}

export default App;