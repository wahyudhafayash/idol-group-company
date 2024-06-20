import Navbar from "@/components/Navbar";
import Myteams from "@/components/page/Myteams";

const Teams = () => {
  return (
    <>
      <Navbar />
      <div className="bg-purple-400 min-h-screen pt-24 p-10">
        <div>
          <h1 className="text-5xl font-bold text-white text-center">
            MDN48 OPERATION TEAMS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 px-4 md:px-8 lg:px-16 py-10">
          <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-[#8e24aa] flex flex-col justify-center items-center p-4 md:p-8">
            <h1 className="text-white text-4xl font-bold">Ticketing</h1>
            <Myteams />
            <Myteams />
            <Myteams />
          </div>
          <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-[#8e24aa] flex flex-col justify-center items-center p-4 md:p-8">
            <h1 className="text-white text-4xl font-bold">Videographer</h1>
            <Myteams />
            <Myteams />
            <Myteams />
          </div>
          <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-[#8e24aa] flex flex-col justify-center items-center p-4 md:p-8">
            <h1 className="text-white text-4xl font-bold">Creative</h1>
            <Myteams />
            <Myteams />
            <Myteams />
          </div>
          <div className="border-2 rounded-xl border-purple-600 shadow-inner shadow-purple-100 bg-[#8e24aa] flex flex-col justify-center items-center p-4 md:p-8">
            <h1 className="text-white text-4xl font-bold">Web Dev</h1>
            <Myteams />
            <Myteams />
            <Myteams />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
