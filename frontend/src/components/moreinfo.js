import React, { useEffect } from "react";
import Header from "../components/Navbar/header"
import Info from "../components/BasicAndPersonalInformation/conditionLibrary"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";

function MoreInfo() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null)
  var history = useHistory();
  var location = useLocation();

  useEffect(() => {
    if (location.state) {
      console.log(location)
      setUser(location.state.user);
      setToken(location.state.token)
    } else {
      history.push('/addinfo/conditionlibrary')
    }
  }, [location, history])

  return (
    <div>
      <Info />
    </div>
  );
}
export default MoreInfo;
