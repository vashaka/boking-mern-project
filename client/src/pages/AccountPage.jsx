import React, { useContext } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { UserContext } from "./../UserContext";

const AccountPage = () => {
  const { user, ready } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  if (!ready) {
    return "Loading...";
  }

  if (!user && ready) {
    return <Navigate to={"/login"} />;
  }

  const linkClasses = (type = null) => {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full font-semibold";
    }

    return classes;
  };

  return (
    <div>
      <nav className="w-full flex mt-4 gap-4 justify-center">
        <Link className={linkClasses("profile")} to={"/account"}>
          My profile
        </Link>
        <Link className={linkClasses("bookings")} to={"/account/bookings"}>
          My bookings
        </Link>
        <Link className={linkClasses("places")} to={"/account/places"}>
          My accommodations
        </Link>
      </nav>
    </div>
  );
};

export default AccountPage;
