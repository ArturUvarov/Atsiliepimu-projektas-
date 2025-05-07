import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authservice } from "./AuthService";
import { Card, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
}) => {
  return (
    <div className="relative mb-4">
      {label && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 bg-white
                  px-4 py-2 
                  placeholder-gray-400 shadow-sm
                  transition-all duration-200 ease-in-out
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500
                  disabled:cursor-not-allowed disabled:bg-gray-100
                  dark:border-gray-700 dark:bg-gray-800
                  dark:text-white"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    terms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authservice.login(formData);
      if (response.token) {
        // Redirect to profile page after successful login
        navigate("/dashboard/profile");
      }
    } catch (error) {
      setError(error.message || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="animate-gradient-xy absolute inset-0 bg-gradient-to-br from-blue-500/10 via-white/60 to-purple-500/10 backdrop-blur-xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex min-h-screen items-center justify-center">
          {/* Card with Glass Effect */}
          <Card className="w-full max-w-lg rounded-3xl border border-white/30 bg-white/90 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_8px_48px_rgba(59,130,246,0.2)]">
            {/* Header Section with Animation */}
            <div className="animate-fade-in mb-12 text-center">
              <Typography
                variant="h2"
                className="mb-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent"
              >
                Welcome Back
              </Typography>
              <Typography variant="paragraph" className="text-blue-gray-600">
                Sign in to continue your journey with us
              </Typography>
            </div>

            <form className="mb-2 mt-8 space-y-8" onSubmit={handleSubmit}>
              {/* Input Fields with Floating Labels */}
              <div className="space-y-8">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="name@mail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />

                <Input
                  type="password"
                  label="Password"
                  placeholder="********"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  className="focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <Checkbox
                  containerProps={{ className: "-ml-1" }}
                  className="transition-all checked:border-blue-500 checked:bg-blue-500"
                  ripple={false}
                  crossOrigin={undefined}
                  label={
                    <Typography
                      variant="small"
                      className="text-blue-gray-700 font-medium"
                    >
                      Remember me
                    </Typography>
                  }
                />
                <Link
                  to="#"
                  className="text-sm text-blue-500 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center">
                <Checkbox
                  containerProps={{ className: "-ml-1" }}
                  className="transition-all checked:border-blue-500 checked:bg-blue-500"
                  ripple={false}
                  crossOrigin={undefined}
                  label={
                    <Typography
                      variant="small"
                      className="text-blue-gray-700 flex items-center font-medium"
                    >
                      I agree to the
                      <Link
                        to="/terms"
                        className="ml-1 text-blue-500 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 hover:underline"
                      >
                        Terms and Conditions
                      </Link>
                    </Typography>
                  }
                  checked={formData.terms}
                  onChange={(e) =>
                    setFormData({ ...formData, terms: e.target.checked })
                  }
                />
              </div>

              {/* Error Message with Animation */}
              {error && (
                <Typography
                  color="red"
                  className="animate-shake mt-2 text-center"
                >
                  {error}
                </Typography>
              )}

              {/* Sign In Button with Animation */}
              <Button
                size="lg"
                className="h-12 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/40 active:scale-[0.98]"
                type="submit"
              >
                Sign In
              </Button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="via-blue-gray-200 h-px flex-1 bg-gradient-to-r from-transparent to-transparent"></div>
                <Typography
                  variant="small"
                  className="text-blue-gray-500 font-medium"
                >
                  OR
                </Typography>
                <div className="via-blue-gray-200 h-px flex-1 bg-gradient-to-r from-transparent to-transparent"></div>
              </div>

              {/* Social Login Buttons */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outlined"
                  className="border-blue-gray-200 text-blue-gray-700 flex h-12 flex-1 items-center justify-center gap-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50/50 hover:text-blue-500"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-red-500"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Sign in with Google
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="border-blue-gray-200 text-blue-gray-700 flex h-12 flex-1 items-center justify-center gap-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-50/50 hover:text-blue-500"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-blue-gray-900"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  Sign in with GitHub
                </Button>
              </div>

              {/* Sign Up Link */}
              <Typography
                variant="paragraph"
                className="text-blue-gray-600 text-center font-medium"
              >
                Don't have an account?{" "}
                <Link
                  to="/auth/sign-up"
                  className="text-blue-500 decoration-2 underline-offset-2 transition-colors hover:text-blue-700 hover:underline"
                >
                  Sign up
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
