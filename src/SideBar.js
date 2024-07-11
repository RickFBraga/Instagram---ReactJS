import Suggestions from "./Suggestions";
import User from "./User";

export default function SideBar() {
  return (
    <div className="sidebar">
        <User />
        <Suggestions />
    </div>
  );
}
