import Column from "./Column";
import ProfileInitials from "../UI/ProfileInitials";
import { priorityMap, initialState } from "../helper/InitialState";
import classes from "./Board.module.css";
const Board = ({ tickets, grouping, sorting, click, userData }) => {
  const initial = structuredClone(initialState);

  //sorting function according to ordering
  const sortTickets = (a, b) => {
    if (sorting === "priority") return b.priority - a.priority;
    if (sorting === "title") return a.title.localeCompare(b.title);
    return 0;
  };

  // grouping the data according to selected values
  let groupedTickets = tickets.reduce((groups, ticket) => {
    let groupKey =
      ticket[grouping] != undefined ? ticket[grouping] : "uncategorized";

    // if grouping by priority then from the priority number we get the corresponding value
    groupKey = priorityMap[groupKey] || groupKey;

    //if key is not present initialize its value with empty list and then push the value
    if (!groups[groupKey]) groups[groupKey] = { list: [] };
    groups[groupKey].list.push(ticket);

    if (grouping === "userId") {
      groups[groupKey] = {
        ...groups[groupKey],
        svg: (
          <ProfileInitials name={ticket.name} available={ticket.available} />
        ),
      };
    }
    return groups;
  }, initial[grouping] || {});

  if (grouping === "userId") {
    Object.keys(userData).forEach((key) => {
      if (!groupedTickets[key]) {
        groupedTickets[key] = {
          list: [],
          svg: (
            <ProfileInitials
              name={userData[key].name}
              available={userData[key].available}
            />
          ),
        };
      }
    });
  }

  return (
    <div className={classes.board} onClick={() => click(false)}>
      {Object.keys(groupedTickets).map((key) => (
        <Column
          key={key}
          title={grouping === "userId" ? userData[key].name : key}
          grouping={grouping}
          tickets={groupedTickets[key].list.sort(sortTickets)}
          svg={groupedTickets[key].svg}
        />
      ))}
    </div>
  );
};

export default Board;
