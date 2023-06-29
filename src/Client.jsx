import React from "react";

const Client = ({ client, clients, setClients }) => {
  const gotClient = (e) => {
    if (e.target.checked) {
      addClient();
    } else {
      removeClient();
    }
  };

  const addClient = () => {
    let local = JSON.parse(JSON.stringify(clients));
    local.pop();
    local.unshift(true);
    setClients(local);
  };

  const removeClient = () => {
    let local = JSON.parse(JSON.stringify(clients));
    local.push(false);
    local.shift();
    setClients(local);
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={client}
      onChange={(e) => gotClient(e)}
    />
  );
};

export default Client;
