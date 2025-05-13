import api from "./configuration/ApiConfiguration";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const authservice = {
  async register(userData) {
    try {
      const response = await api.post("/auth/signup", {
        email: userData.email,
        password: userData.password,
        username: userData.name,
      });

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Registration failed");
    }
  },

  async login(credentials) {
    try {
      console.log("Making login request with:", credentials); // Debug log

      const response = await api.post("/auth/signin", {
        email: credentials.email,
        password: credentials.password,
      });

      console.log("Server response:", response.data); // Debug log

      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
        const decodedToken = parseJwt(response.data.token);

        const userInfo = {
          id: decodedToken.id,
          email: decodedToken.email,
          username: credentials.email.split("@")[0],
          avatar: "/img/bruce-mars.jpeg",
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        return userInfo;
      } else {
        throw new Error("No token received from server");
      }
    } catch (error) {
      console.error("Login error details:", error.response || error); // Debug log
      throw new Error(error.response?.data?.message || "Login failed");
    }
  },

  async getProfile() {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch profile",
      );
    }
  },

  async updateProfile(updatedData) {
    try {
      const token = localStorage.getItem("token");
      const response = await api.put("/auth/profile", updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update profile",
      );
    }
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    window.location.href = "/auth/sign-in";
  },

  isAuthenticated() {
    const token = localStorage.getItem("token");
    if (!token) return false;

    const decodedToken = parseJwt(token);
    return decodedToken && decodedToken.exp * 1000 > Date.now();
  },
};
