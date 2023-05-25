import { useState } from 'react';

function InputForm() {
    const [input, setInput] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
        console.log(input);
        fetch('http://localhost:3001/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              data: input
          }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
        console.error('Error:', error);
        });
  
    }
  
    return (
      <form className="form-container" onSubmit={handleSubmit}>
        <label>Enter text here:
          <textarea
            className="form-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
        </label>
        <input className="submit-button" type="submit" />
      </form>
    )
  }

  export default InputForm;