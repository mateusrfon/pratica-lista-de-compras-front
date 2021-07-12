import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

export default function InsertForm({ onAddItem }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { text };
    // Save item to server
    axios.post('http://localhost:3000/list', newItem)
    .then(() => {
      setText("");
      onAddItem();
    })
    .catch(() => {
      alert('algo deu errado.');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Insert a new item..."
      />
    </form>
  );
}

const Input = styled.input`
  width: 400px;
  line-height: 40px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;
