import React, { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = e => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Controlled Form</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
