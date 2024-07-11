import { services } from "../constants/data"

function Services() {
  return (
    <div className="p-11">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-bold text-2xl">Our <span className="text-cyan-500">Services</span></h2>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
        </div>
        <div className="grid grid-cols-3 place-items-center">
          {services.map((dets, index) => (
            <div key={index} className="max-w-sm text-center space-y-4">
              <img src={dets.image} alt="wallet" className="w-12 mx-auto" />
              <h3>{dets.title}</h3>
              <p>{dets.desc}</p>
              <a href="#">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services