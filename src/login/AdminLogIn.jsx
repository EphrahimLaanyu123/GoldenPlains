import React from "react";
import { Link } from "react-router-dom"; // Ensure you import Link

function AdminLogIn() {
  return (
    <div>
      <div>
        <div>
          <div>
            <h1>Welcome to the admin login page</h1>
            <p>
              <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogIn;
