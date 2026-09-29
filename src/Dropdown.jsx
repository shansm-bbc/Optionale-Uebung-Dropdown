import { useState } from "react";
import styles from "./Dropdown.module.css";

function Dropdown() {
  const [Option, setOption] = useState("");
  const [Color, setColor] = useState("#f00");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

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
      <br />
      <input type="color" value={Color} onChange={handleChange} />
      <div style={{ background: Color }} className={styles.colorbox}></div>
    </>
  );
}

export default Dropdown;
