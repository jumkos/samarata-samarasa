import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dino } from "../types.ts";

export default function Dinosaur() {
  const { selectedDinosaur } = useParams(); // nama const harus sama dengan yg ada pada route App.tsx 
  const [dinosaur, setDino] = useState<Dino>({ name: "", description: "" }); // state awal Dino name dan desc kosong

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/dinosaurs/${selectedDinosaur}`);
      const dino = await resp.json() as Dino;
      setDino(dino); // set state, isi sesuai balikan api
    })();
  }, [selectedDinosaur]);

  return (
    <div>
      {/* langsung render dengan nilai 'dinosaur' awal kosong lalu diupdate saat dapat balikan dari api */}
      <h1>{dinosaur.name}</h1>
      <p>{dinosaur.description}</p>
      <Link to="/">🠠 Back to all dinosaurs</Link>
    </div>
  );
}
