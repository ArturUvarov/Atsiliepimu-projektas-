import reactLogo from "../src/assets/react.png";
const CardComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-96 overflow-hidden">
        <div className="relative">
          <img src={reactLogo} className="w-full h-56 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <h2 className="text-white text-xl font-semibold"></h2>
            <p className="text-white text-sm">React</p>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-800">Project</h3>
          <p className="text-sm text-gray-600">
            Our project is a React based project.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
