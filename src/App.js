import { useState, useEffect } from "react";
import Board from "./components/Board";
import Navbar from "./components/Navbar";

const App = () => {
  const [tickets, setTickets] = useState([]); // Store tickets
  const [userData, setUserData] = useState({}); // Store user data
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  ); // Default group by 'status'
  const [sorting, setSorting] = useState(
    localStorage.getItem("grouping") || "priority"
  ); // Default sort by 'priority'
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const ticketData = await response.json();

      const userData2 = ticketData.users.reduce((users2, user) => {
        users2[user.id] = { name: user.name, available: user.available };
        return users2;
      }, {});

      setUserData(userData2);
      setTickets(
        ticketData.tickets.map((ticket) => {
          return {
            ...ticket,
            name: userData2[ticket.userId].name,
            available: userData2[ticket.userId].available,
          };
        })
      );
    }
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    localStorage.setItem("sorting", sorting);
  }, [grouping, sorting]);

  return (
    <div className="App">
      <Navbar
        grouping={grouping}
        sorting={sorting}
        handleGroupingChange={setGrouping}
        handleSortingChange={setSorting}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Board
        tickets={tickets}
        userData={userData}
        grouping={grouping}
        sorting={sorting}
        click={setToggle}
      />
    </div>
  );
};

export default App;
