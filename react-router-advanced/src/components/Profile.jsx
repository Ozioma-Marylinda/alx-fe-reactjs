import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      <Outlet />
    </div>
  );
}

export default Profile;