import { Link } from "react-router-dom";
const Navbar = () => {
  const myRoutes = [
    {
      name: "Chat",
      path: "/chat",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Sources",
      path: "/sources",
    },
  ];

  return (
    <nav className=" w-screen  bg-gray-80">
      <div className=" bg-slate-950">
        <div className=" h-20 flex items-center justify-between ml-7">
          <Link to="/">
            <h2 className="mr-0 pr-0 text-2xl text-sky-300">ConversaGPT</h2>
          </Link>
          <ul className="flex space-x-16 mr-12">
            {myRoutes.map((item, index) => (
              <li
                key={index}
                className="inline text-gray-300 hover:text-sky-200 text-l"
              >
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
