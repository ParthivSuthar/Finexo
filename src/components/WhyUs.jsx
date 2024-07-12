import { whyChoose } from "../constants/data"

function WhyUs() {
  return (
    <div className="p-7 space-y-7">
      <h2 className="font-bold text-2xl text-center">Why Choose <span className="text-cyan-500">Us</span></h2>
      <div className="flex flex-col w-full space-y-9">
          {whyChoose.map((dets, index) => (
            <div className="flex flex-col gap-3 items-center max-w-xl mx-auto" key={index}>
              <img src={dets.image} alt="img" className="w-16 rounded-full border-fuchsia-600 p-2 border-4" />
              <h3>{dets.title}</h3>
              <p>{dets.desc}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default WhyUs