import { useEffect, useState } from "react";
type userAttributes = {
  userName: string;
  userID: string;
  email: string;
  admin: boolean;
  iat: number;
  exp: number;
};
const noUser = {
  userName: "",
  userID: "",
  email: "",
  admin: false,
  iat: 0,
  exp: 0,
};
const User = () => {
  const [user, setUser] = useState<userAttributes>(noUser);
  const token: string = "Bearer " + localStorage.getItem("token");
  const url = "http://localhost:3000/api/me";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "appliaction/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUser({ ...data }))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <>
      <h1>welcome {user.userName}</h1>
    </>
  );
};

export default User;
