import Navbar from "../components/Navbar"
import image1 from "../images/chat-gpt-2.jfif"
import image2 from "../images/chat-gpt.jfif"

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen w-screen mt-28">
        <div className="container mx-auto p-10 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About ChatGPT</h2>
          <img
            src={image1}
            alt="ChatGPT"
            className="mb-4 rounded-lg border-2 border-gray-800"
          />
          <p className="text-gray-700">
            ChatGPT is an AI-powered language model developed by OpenAI. It is
            based on the GPT-3.5 architecture, which stands for Generative
            Pre-trained Transformer 3.5. It has been trained on a wide range of
            text data and can generate human-like responses to prompts or
            questions.
          </p>
          <p className="text-gray-700 mt-4">
            ChatGPT can be used for a variety of applications, including
            chatbots, content generation, language translation, and much more.
            Its natural language processing capabilities make it a powerful tool
            for interacting with text-based data.
          </p>
          <img
            src={image2}
            alt="OpenAI"
            className="mt-8 rounded-lg border-2 border-gray-800"
          />
          <p className="text-gray-800 mt-4 mr-4">
            ChatGPT was created using advanced machine learning techniques,
            specifically the Transformer model architecture. The model was
            trained on a massive amount of text data from the internet, allowing
            it to learn patterns, language structure, and generate coherent
            responses.
          </p>
          <p className="text-gray-800 mt-4 mr-4">
            OpenAI, an artificial intelligence research laboratory, is
            responsible for creating ChatGPT. OpenAI's mission is to ensure that
            artificial general intelligence benefits all of humanity. They have
            developed several groundbreaking AI models and continue to advance
            the field of artificial intelligence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About