import { Link } from "react-router";
function Navbar() {
  return (
    <div>
      <Link to="/">Home |</Link>
      <Link to="/mailBoxes">MailBoxes |</Link>
      <Link to="/mailBoxes/create">New MailBOx</Link>
    </div>
  );
}

export default Navbar;
