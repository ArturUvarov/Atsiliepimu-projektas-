const API_URL = "http://localhost:3000/api/auth";

const handleResponse = async (response) => {
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }
    return data;
  }
  throw new Error('Invalid response from server');
};

export const authservice = {
  async register(userData) {
    try {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          username: userData.name
        }),
      });
      
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await handleResponse(response);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw new Error(error.message || 'Login failed');
    }
  },

  async getProfile() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch profile');
    }
  },

  async updateProfile(updatedData) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      });
      
      return await handleResponse(response);
    } catch (error) {
      throw new Error(error.message || 'Failed to update profile');
    }
  },

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/auth/sign-in';
  }
};