import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { FeedMain } from "./pages/feed";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/auth/sign-in" replace />;
  }
  return children;
};

function App() {
  return (
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/auth/*" element={<Auth />} />
      <Route
        path="/feed"
        element={
          <ProtectedRoute>
            <FeedMain />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard/profile" replace />} />
    </Routes>
  );
}

export default App;
