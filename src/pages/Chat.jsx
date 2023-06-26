import { useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Chat = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const { REACT_APP_API_ENDPOINT } = process.env;

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetchData();
  // },);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`${REACT_APP_API_ENDPOINT}/my-api/`);
  //     setResult(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${REACT_APP_API_ENDPOINT}/my-api/`, {
        userInput,
      });
      setResult(response.data);
    console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col items-center">
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter user input"
            className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500 flex-grow"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
          >
            Submit
          </button>
        </form>
        <div className="m-10 h-max border-2 rounded-md border-slate-200 bg-blue-100">
          <h5 className="text-grey-500">{result}</h5>
        </div>
      </div>
    </div>
  );
};

export default Chat;
