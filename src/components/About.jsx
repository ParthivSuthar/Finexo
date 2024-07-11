import aboutimg from "../assets/about-img.png"

function About() {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-slate-800 py-4">
      <div>
        <div className="text-center">
          <h2 className="text-white font-bold text-2xl">About <span className="text-cyan-500">Us</span></h2>
          <p className="text-slate-200">Magni quod blanditiis non minus sed aut voluptatum illum quisquam aspernatur ullam vel beatae rerum ipsum voluptatibus</p>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <div>
            <img src={aboutimg} alt="about-img" />
          </div>
          <div className="space-y-3">
            <h3 className="text-white text-xl font-bold">We Are Finexo</h3>
            <p  className="text-slate-300">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
            <p className="text-slate-300">Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita.</p>
            <button className="bg-cyan-500 text-white px-3 py-1 hover:bg-cyan-700 transition duration-300">Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About