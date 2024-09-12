import backlog from "../assets/Backlog.svg";
import todo from "../assets/To-do.svg";
import inProgress from "../assets/in-progress.svg";
import done from "../assets/Done.svg";
import cancelled from "../assets/Cancelled.svg";
import noPriority from "../assets/No-priority.svg";
import urgent from "../assets/SVG-Urgent-Priority-colour.svg";
import high from "../assets/Img - High Priority.svg";
import low from "../assets/Img - Low Priority.svg";
import medium from "../assets/Img - Medium Priority.svg";

export const priorityMap = {
  0: "No priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

export const initialState = {
  status: {
    Backlog: { list: [], svg: backlog },
    Todo: { list: [], svg: todo },
    "In progress": { list: [], svg: inProgress },
    Done: { list: [], svg: done },
    Cancelled: { list: [], svg: cancelled },
  },
  priority: {
    "No priority": { list: [], svg: noPriority },
    Urgent: { list: [], svg: urgent },
    High: { list: [], svg: high },
    Medium: { list: [], svg: medium },
    Low: { list: [], svg: low },
  },
};
