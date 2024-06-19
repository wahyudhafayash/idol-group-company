"use client";

import { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const Myteams = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        const userDataFromApi: UserData = response.data.results[0];
        setUserData(userDataFromApi);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 border-2 border-purple-900 bg-purple-600 rounded-xl text-white p-4">
      <div className="flex flex-col items-center md:flex-row">
        <img
          className="w-20 h-20 md:w-32 md:h-32 rounded-full mr-4"
          src={userData.picture.large}
          alt={`${userData.name.first} ${userData.name.last}`}
        />
        <div className="mt-4 md:mt-0">
          <p className="text-xl font-bold">
            {userData.name.first} {userData.name.last}
          </p>
          <p className="text-purple-100">{userData.email}</p>
          <p className="text-purple-100">{userData.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Myteams;
