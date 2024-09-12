import React from "react";
import Ticket from "./Ticket";
import add from "../assets/add.svg";
import dot3 from "../assets/3 dot menu.svg";
import classes from "./Column.module.css";

const Column = ({ title, tickets, grouping, svg }) => {
  return (
    <div className={classes.column}>
      <div className={classes["column-title"]}>
        <div className={classes.title}>
          {(typeof svg === "string" && <img src={svg} />) || svg}
          <h4>{title}</h4>
          <span>{tickets.length}</span>
        </div>
        <div className={classes["column-svg"]}>
          <img src={add} alt="add sign" />
          <img src={dot3} alt="dot sign" />
        </div>
      </div>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} grouping={grouping} />
      ))}
    </div>
  );
};

export default Column;
