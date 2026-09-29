import { use, useState } from "react";

function Dropdown() {
  const [Option, setOption] = useState("");

  return (
    <>
      <p>Wähle ein Tier: </p>
      <select value={Option} onChange={(e) => setOption(e.target.value)}>
        <option value="">Bitte wählen</option>
        <option value="Hund">Hund</option>
        <option value="Katze">Katze</option>
        <option value="Hamster">Hamster</option>
        <option value="Papagei">Papagei</option>
        <option value="Spinne">Spinne</option>
        <option value="Goldfisch">Goldfisch</option>
      </select>
      <p>Deine Wahl: {Option}</p>
    </>
  );
}

export default Dropdown;
