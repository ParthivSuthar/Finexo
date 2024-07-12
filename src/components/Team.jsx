import { teams } from "../constants/data"

function Team() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-slate-800 p-7 space-y-12">
      <h2 className="text-white font-bold text-2xl text-center">Our <span className="text-cyan-500">Team</span></h2>
      <div className="grid grid-cols-4 place-items-center gap-4">
        {teams.map((dets, index) => (
          <div className="bg-slate-800 border rounded-lg p-4 flex flex-col items-center justify-center h-48 w-48" key={index}>
            <img src={dets.image} alt="img" className="w-14 h-14 border-2 rounded-full mb-2" />
            <h3 className="text-white text-lg text-center">{dets.title}</h3>
            <p className="text-slate-200 text-sm text-center">{dets.job}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
