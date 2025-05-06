import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authservice } from "./AuthService";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export function SignUp() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.terms) {
      setError("Please accept the terms and conditions");
      return;
    }

    try {
      await authservice.register(formData);
      navigate("/auth/sign-in");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="animate-gradient-xy absolute inset-0 bg-gradient-to-br from-white/95 via-blue-50/50 to-white/95 backdrop-blur-md" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex min-h-screen items-center justify-center">
          <Card className="w-full max-w-lg rounded-3xl border border-white/30 bg-white/90 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_8px_48px_rgba(59,130,246,0.2)]">
            <div className="animate-fade-in mb-12 text-center">
              <Typography
                variant="h2"
                className="mb-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-4xl font-bold text-transparent"
              >
                Create Account
              </Typography>
              <Typography variant="paragraph" className="text-blue-gray-600">
                Join our community and start your journey
              </Typography>
            </div>

            <form className="mb-2 mt-8 space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <Input
                    size="lg"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-gray-300 bg-white
                  px-4 py-2 
                  placeholder-gray-400 shadow-sm
                  transition-all duration-200 ease-in-out
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500
                  disabled:cursor-not-allowed disabled:bg-gray-100
                  dark:border-gray-700 dark:bg-gray-800
                  dark:text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <Input
                    size="lg"
                    type="email"
                    placeholder="name@mail.com"
                    className="w-full rounded-lg border border-gray-300 bg-white
                  px-4 py-2 
                  placeholder-gray-400 shadow-sm
                  transition-all duration-200 ease-in-out
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500
                  disabled:cursor-not-allowed disabled:bg-gray-100
                  dark:border-gray-700 dark:bg-gray-800
                  dark:text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className="w-full rounded-lg border border-gray-300 bg-white
                  px-4 py-2 
                  placeholder-gray-400 shadow-sm
                  transition-all duration-200 ease-in-out
                  focus:border-blue-500
                  focus:ring-2 focus:ring-blue-500
                  disabled:cursor-not-allowed disabled:bg-gray-100
                  dark:border-gray-700 dark:bg-gray-800
                  dark:text-white"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center">
                <Checkbox
                  containerProps={{ className: "-ml-1" }}
                  className="transition-all checked:border-blue-500 checked:bg-blue-500"
                  ripple={false}
                  crossOrigin={undefined}
                  label={
                    <Typography
                      variant="small"
                      className="inline-flex items-center font-medium text-blue-gray-700"
                    >
                      I agree to the{" "}
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

              {error && (
                <Typography
                  color="red"
                  className="animate-shake mt-2 text-center"
                >
                  {error}
                </Typography>
              )}

              <Button
                size="lg"
                className="h-10 w-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/40 active:scale-[0.98]"
                type="submit"
              >
                Create Account
              </Button>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-blue-gray-100"></div>
                <Typography
                  variant="small"
                  className="font-medium text-blue-gray-500"
                >
                  OR
                </Typography>
                <div className="h-px flex-1 bg-blue-gray-100"></div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  variant="outlined"
                  className="flex flex-1 items-center justify-center gap-3 border-blue-gray-200 text-blue-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-gray-50/50"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-red-500"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>
                  Google
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  className="flex flex-1 items-center justify-center gap-3 border-blue-gray-200 text-blue-gray-700 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-gray-50/50"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-blue-gray-900"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                  GitHub
                </Button>
              </div>

              <Typography
                variant="paragraph"
                className="text-center font-medium text-blue-gray-600"
              >
                Already have an account?{" "}
                <Link
                  to="/auth/sign-in"
                  className="text-blue-500 transition-colors hover:text-blue-700"
                >
                  Sign in
                </Link>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
