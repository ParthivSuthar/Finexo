import { teams } from "../constants/data"


function Team() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-slate-800 p-7 space-y-12">
      <h2 className="text-white font-bold text-2xl text-center">Our <span className="text-cyan-500">Team</span></h2>
      <div className="grid grid-cols-4 place-items-center gap-4">
        {teams.map((dets, index) => (
          <div className="bg-slate-800 border h-full w-full rounded-lg p-4 space-y-1" key={index}>
            <img src={dets.image} alt="img" className="mx-auto w-14 border-2 rounded-full" />
            <h3 className="text-white text-lg pl-14">{dets.title}</h3>
            <p className="text-slate-200 text-sm pl-14">{dets.job}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team