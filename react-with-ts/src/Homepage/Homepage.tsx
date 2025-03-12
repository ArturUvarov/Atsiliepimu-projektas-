import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <Link to="/homepage" className="flex items-center">
              Home
            </Link>
            <Link to="/comments" className="flex items-center">
              Comments
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <a href="">Hello</a>
            <div className="flex gap-4">
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Homepage;
