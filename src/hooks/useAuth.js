"use client";

import { useEffect, useState } from "react";
import { auth } from "../firebase";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setIsLoggenIn(user && user.uid ? true : false);
      setUser(user);
    });
  });
  return { user, isLoggedIn };
};
export default useAuth;
