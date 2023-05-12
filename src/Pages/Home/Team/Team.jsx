import { useEffect, useState } from "react";
import TeamMateCard from "./TeamMateCard";


const Team = () => {
    const [teamMates, setTeamMates] = useState([]);

    useEffect(()=>{
        fetch("https://car-doctor-server-shanin18.vercel.app/team")
        .then(res => res.json())
        .then(data => setTeamMates(data))
    },[])

    return (
        <div className="space-y-12">
      <div className="text-center space-y-5">
        <h3 className="text-[#FF3811] font-bold">Team</h3>
        <h2 className="text-5xl font-bold">Meet Our Team</h2>
        <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            teamMates?.map(teamMate => <TeamMateCard key={teamMate._id} teamMate={teamMate}></TeamMateCard>)
        }
      </div>
    </div>
    );
};

export default Team;