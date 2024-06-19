import Navbar from "@/components/Navbar";
import Myteams from "@/components/page/Myteams";

const Teams = () => {
  return (
    <>
      <Navbar />
      <div className="bg-purple-300 min-h-screen pt-24">
        <div>
          <h1 className="text-5xl font-bold text-white text-center">
            MDN48 OPERATION TEAMS
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 lg:px-16 py-10">
          <Myteams />
          <Myteams />
          <Myteams />
          <Myteams />
          <Myteams />
          <Myteams />
        </div>
      </div>
    </>
  );
};

export default Teams;
