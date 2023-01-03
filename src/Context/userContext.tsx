import React, { useContext, useEffect, useState } from "react";

type Resp = {
  firstName: string;
  lastName: string;
  email: string;
  admin: boolean;
};

const Usercontext = React.createContext({
  firstName: "",
  lastName: "",
  email: "",
  admin: false,
  logged: false,
  token: localStorage.getItem("token") ?? "",
  handleSetValues: (key: string, value: string | boolean) => {},
});

const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    logged: false,
    admin: false,
    token: localStorage.getItem("token") ?? "",
  });

  const handleSetValues = (key: string, value: string | boolean) => {
    setValue((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/me", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${value.token}`,
      },
    }).then((res) => {
      res.json().then((data: Resp) => {
        const newValues = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          admin: data.admin,
          logged: data.email ? true : false,
          token: value.token,
        };

        setValue(newValues);
      });
    });
  }, [value.token]);

  return (
    <Usercontext.Provider value={{ ...value, handleSetValues }}>
      {children}
    </Usercontext.Provider>
  );
};
export const useUserContext = () => useContext(Usercontext);
export default UserProvider;
