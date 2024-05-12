import { useState, useEffect } from "react";
import Client from "./Client";

function App() {
  const [clients, setClients] = useState(
    JSON.parse(localStorage.getItem("clients")) || [...Array(100).fill(false)]
  );

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const resetClients = () => {
    let local = JSON.parse(JSON.stringify(clients));
    for (let i = 0; i < local.length; i++) {
      local[i] = false;
    }
    setClients(local);
  };

  return (
    <section>
      <div className="modal">
        <div className="clients">
          {clients.map((client, i) => (
            <Client
              key={i}
              client={client}
              clients={clients}
              setClients={setClients}
            />
          ))}
        </div>
      </div>

      <button className="reset" onClick={() => resetClients()}>
        Reset
      </button>
    </section>
  );
}

export default App;
