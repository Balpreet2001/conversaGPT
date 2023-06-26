import Navbar from "../components/Navbar"

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center self-center">

      <div class="mr-10 ml-10 bg-slate-300 p-4 rounded-lg shadow">
        <h2 class="text-gray-800 text-lg font-semibold">Examples</h2>
        <div class="grid gap-2">
          <h4>"Explain quantum computing in simple terms"</h4>
          <h4>"Got any creative ideas for a 10 year old's birthday?"</h4>
          <h4>"How do I make an HTTP request in Javascript?"</h4>
        </div>
      </div>

      <div class="mr-10 ml-10 bg-slate-300 p-4 rounded-lg shadow">
        <h2 class="text-gray-800 text-lg font-semibold">Capabilities</h2>
        <div class="grid gap-2">
          <h4>Remembers what user said earlier in the conversation</h4>
          <h4>Allows user to provide follow-up corrections</h4>
          <h4>Trained to decline inappropriate requests</h4>
        </div>
      </div>

      <div class="mr-10 ml-10 bg-slate-300 p-4 rounded-lg shadow">
        <h2 class="text-gray-800 text-lg font-semibold">Limitations</h2>
        <div class="grid gap-2">
          <h4>May occasionally generate incorrect information</h4>
          <h4>
            May occasionally produce harmful instructions or biased content
          </h4>
          <h4>Limited knowledge of the world and events after 2021</h4>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About