import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-max">
        <div className="m-auto pt-16 h-min w-screen border-1 rounded border-slate-300 flex ">
          <div className="mr-10 ml-10 bg-slate-300 p-20 rounded-lg shadow ">
            <h2 className="text-gray-800 text-lg font-bold mb-3 ">Examples</h2>
            <div className="grid gap-5 border-shadow-md">
              <h4 className="text-slate-600">
                "Explain quantum computing in simple terms"
              </h4>
              <h4 className="text-slate-600">
                "Got any creative ideas for a 10 year olds birthday?"
              </h4>
              <h4 className="text-slate-600">
                "How do I make an HTTP request in Javascript?"
              </h4>
            </div>
          </div>
          <div className="mr-10 ml-10 bg-slate-300 p-20 rounded-lg mb-3 shadow">
            <h2 className="text-gray-800 text-lg font-bold">Capabilities</h2>
            <div className="grid gap-5">
              <h4 className="text-slate-600">
                Remembers what user said earlier in the conversation
              </h4>
              <h4 className="text-slate-600">
                Allows user to provide follow-up corrections
              </h4>
              <h4 className="text-slate-600">
                Trained to decline inappropriate requests
              </h4>
            </div>
          </div>
          <div className="mr-10 ml-10 bg-slate-300 p-16 rounded-lg mb-3 shadow">
            <h2 className="text-gray-800 text-lg font-bold">Limitations</h2>
            <div className="grid gap-5">
              <h4 className="text-slate-600">
                May occasionally generate incorrect information
              </h4>
              <h4 className="text-slate-600">
                May occasionally produce harmful instructions or biased content
              </h4>
              <h4 className="text-slate-600">
                Limited knowledge of world and events after 2021
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
