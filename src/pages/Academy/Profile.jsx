import React from "react";
import { useEffect, useContext, useState } from "react";
import MembersNavbar from "./MembersNavbar";
import "./Academy.css";
import "../../firebase/config";
import ProfileDetails from "./ProfileDetails";
import OrderDetails from "./shop/OrderDetails";
import { AuthContext } from "./AuthProvider";
import EditProfileDetails from "./EditProfileDetails";
const Profile = ({ setNavbar }) => {
  const usercontext = useContext(AuthContext);
  const [editprofile, setEditprofile] = useState(false);
  useEffect(
    () => {
      setNavbar(0);
    },
    { setNavbar }
  );
  return (
    <>
      <MembersNavbar />

      <div
        className="academycontentMain"
        style={{ marginTop: "80px", marginLeft: "55px" }}
      >
        <span style={{ fontSize: "14px" }}>
          <b>Welcome Mr. {usercontext.value.userdata.username}</b>
        </span>
        <div className="profilecontent" style={{ marginTop: "40px" }}>
          <OrderDetails />
          {editprofile ? (
            <EditProfileDetails setEditprofile={setEditprofile} />
          ) : (
            <ProfileDetails setEditprofile={setEditprofile} />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
