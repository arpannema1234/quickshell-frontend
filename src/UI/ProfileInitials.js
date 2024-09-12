import classes from "./ProfileInitials.module.css";

function ProfileInitials({ name, available }) {
  const clas = classes["status-dot"];
  // Function to generate initials
  const getInitials = () => {
    const [firstName, lastName] = name.split(" ");
    const firstInitial = firstName ? firstName[0].toUpperCase() : "";
    const lastInitial = lastName ? lastName[0].toUpperCase() : "";
    return `${firstInitial}${lastInitial}`;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes["profile-initials"]}>{getInitials()}</div>
      <span
        className={`${clas} ${available ? classes.online : classes.offline}`}
      ></span>
    </div>
  );
}

export default ProfileInitials;
