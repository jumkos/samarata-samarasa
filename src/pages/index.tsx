import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Dino } from "../types.ts";
import Header from "./Header.tsx";

export default function Index() {
  const [dinosaurs, setDinosaurs] = useState<Dino[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/dinosaurs/`);
      const allDinosaurs = await response.json() as Dino[];
      setDinosaurs(allDinosaurs);
    })();
  }, []);

  return (
      <div>
        <Header /><main>
      
        <h1>Welcome to Sama Rasa Sama Rata app</h1>
        <p>Selamat Urunan</p>
        <label>
          Text input: <input name="myInput" />
        </label>
        <button type="button"><FontAwesomeIcon icon={faPlus} /></button>
      </main></div>
  );
}
