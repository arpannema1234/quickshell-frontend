// import React, { useState } from "react";
// import down from "../assets/down.svg";
import classes from "./Navbar.module.css";
import display from "../assets/Display.svg";
import down from "../assets/down.svg";
import { useState } from "react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleOptions = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={classes.display}>
//       <button className={classes["dropdown-button"]} onClick={toggleOptions}>
//         <span>Display</span>
//         <img src={down} alt="" />
//       </button>
//       {isOpen && (
//         <div className={classes["options-container"]}>
//           <div className={classes["option-row"]}>
//             <span className={classes["option-label"]}>Grouping</span>
//             <button className={classes["dropdown-button option-dropdown"]}>
//               <span>Status</span>
//               <img src={down} alt="" />
//             </button>
//           </div>
//           <div className={classes["option-row"]}>
//             <span className={classes["option-label"]}>Ordering</span>
//             <button className={classes["dropdown-button option-dropdown"]}>
//               <span>Priority</span>
//               <img src={down} alt="" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Navbar;

export default function Navbar({
  grouping,
  sorting,
  handleGroupingChange,
  handleSortingChange,
  toggle,
  setToggle,
}) {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div
          className={classes["display-menu"]}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <img src={display} alt="menu logo" height={"10px"} />
          <span>Display</span>
          <img src={down} alt="down symbol" height={"10px"} />
        </div>
        {toggle && (
          <div className={classes.menu}>
            <label>
              Grouping
              <select
                value={grouping}
                onChange={(e) => {
                  handleGroupingChange(e.target.value);
                }}
              >
                <option value="status">Status</option>
                <option value="userId">User</option>
                <option value="priority">Priority</option>
              </select>
            </label>
            <label>
              Ordering
              <select
                value={sorting}
                onChange={(e) => handleSortingChange(e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
