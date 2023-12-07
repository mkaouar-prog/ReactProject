// AuthDetails.js
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../fireConfig";

const useAuthDetails = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    auth.signOut().then(() => {
      console.log('signOut');
    }).catch((error) => {
      console.log(error);
    });
  };

  return { isLoggedIn, authUser, logOut };
};

export default useAuthDetails;
