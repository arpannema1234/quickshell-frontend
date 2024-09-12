import classes from "./Ticket.module.css";
import logo from "../assets/featured.svg";

import ProfileInitials from "../UI/ProfileInitials";
import { initialState, priorityMap } from "../helper/InitialState";
const Ticket = ({ ticket, grouping }) => {
  return (
    <div className={classes.ticket}>
      <div>
        <div className={classes["id-container"]}>
          <p className={classes.id}>{ticket.id}</p>
          {grouping !== "userId" && (
            <ProfileInitials name={ticket.name} available={ticket.available} />
          )}
        </div>
        <div className={classes.title}>
          {grouping !== "status" && (
            <img src={initialState.status[ticket.status].svg} />
          )}
          <p>{ticket.title}</p>
        </div>
      </div>
      <div className={classes.ui}>
        {grouping !== "priority" && (
          <span className={classes.avatar}>
            <img
              className={classes.logo}
              src={initialState.priority[priorityMap[ticket.priority]].svg}
            />
          </span>
        )}
        <div className={classes.tags}>
          {ticket?.tag?.map((tags) => (
            <div className={classes.tag}>
              <img src={logo} alt="grey dot" />
              <span>{tags}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
