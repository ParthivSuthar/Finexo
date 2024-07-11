import homeimg from "../assets/slider-img.png"

function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-slate-800">
        <div className="grid grid-cols-2 place-items-center">
            <div className="space-y-4 p-16">
                <h1 className="text-white text-2xl font-extrabold">CRYPTO CURRENCY</h1>
                <p className="text-gray-200">Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.</p>
                <button className="bg-cyan-300 text-black px-3 py-1">Read More</button>
            </div>
            <div>
                <img src={homeimg} alt="home-img" className="w-80 h-80" />
            </div>
        </div>
    </div>
  )
}

export default Home