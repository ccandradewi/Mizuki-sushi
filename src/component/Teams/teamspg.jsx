import { useState, useEffect } from "react";
import { EXPERTISE, JOB_TITLES } from "../../expertise";
function Teamspg() {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const USER_API = "https://randomuser.me/api/?results=10";
        const response = await fetch(USER_API);
        const responseData = await response.json();
        setTeamMember(responseData.results);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchTeams();
  }, []);

  return (
    <>
      <h1 className="text-5xl text-white font-bold my-14 text-center tracking-wider">
        The Member
      </h1>
      <div className="overflow-x-scroll hide-scroll-bar text-white flex flex-row gap-4 md:grid md:grid-cols-3 m-9 ">
        {teamMember.map((member, index) => (
          <div
            className=" bg-zinc-900 border border-gray-600 rounded shadow-lg"
            key={index}
          >
            <div className="flex flex-col items-center text-center m-4">
              <div className="flex">
                <img
                  className="object-cover w-52 h-52"
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">{`${member.name.first} ${member.name.last}`}</h3>
                <h4 className="text-red-800">{JOB_TITLES[index + 1]}</h4>
                <p>{EXPERTISE[index + 1]}</p>
              </div>
              <div>
                <p>{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Teamspg;
