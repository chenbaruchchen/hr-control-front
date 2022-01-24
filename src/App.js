import "./App.css";
import React, { useState } from "react";
import Gusts from "./Components/Gusts/Gusts";
import Users from "./Components/Users/Users";

///create one time user context
export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  if (user) {
    return (
      <UserContext.Provider value={[user, setUser]}>
        <Users />
      </UserContext.Provider>
    );
  }

  return <Gusts setUser={setUser} />;
}

export default App;
