

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-slate-800">
      <div className="grid grid-cols-4 p-6 place-items-center h-[300px]">
        <div>
          <h3 className="text-white text-xl font-bold">Address</h3>
          <ul className="text-slate-300">
            <li>Location</li>
            <li>Call +01 123456789</li>
            <li>demo@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold">Info</h3>
          <p className="text-slate-300">necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
        </div>
        <div>
          <h3 className="text-white text-xl font-bold">Links</h3>
          <ul className="text-slate-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Why Us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-white text-xl font-bold">Subscribe</h3>
          <input type="text" placeholder="Enter email" className="p-2 w-full" />
          <button className="bg-cyan-500 text-white w-full py-2">Subscribe</button>
        </div>
      </div>
      <p className="bg-white text-center text-xl py-2">
      © 2024 All Rights Reserved By Free Html Templates
      </p>
    </footer>
  )
}

export default Footer