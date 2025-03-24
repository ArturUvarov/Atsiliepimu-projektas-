import {Card,Input,Checkbox,Button,Typography,} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 bg-[url('/img/background-image.png')] bg-cover bg-center scale-110 blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/100" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex min-h-screen items-center justify-center">
          <Card className="w-full max-w-lg bg-white/80 backdrop-blur-lg p-8 rounded-xl border border-gray-200 shadow-2xl">
            <div className="text-center mb-8">
              <Typography variant="h2" className="text-blue-gray-900 font-bold mb-2">
                Join us Today
              </Typography>
              <Typography variant="paragraph" className="text-blue-gray-600">
                Enter your credentials to access your account
              </Typography>
            </div>

            <form className="mt-8 mb-2">
              <div className="mb-6 space-y-6">
                <div className="space-y-2">
                  <Typography variant="small" className="text-blue-gray-700 font-medium">
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className="!border-blue-gray-200 text-blue-gray-800 placeholder-blue-gray-400 focus:!border-blue-500"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <Checkbox
                  label={
                    <Typography variant="small" className="text-blue-gray-700 font-medium">
                      I agree to the Terms and Conditions
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
              </div>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  variant="outlined"
                  className="flex-1 flex items-center justify-center gap-3 border-blue-gray-200 text-blue-gray-700 hover:bg-blue-gray-50/50"
                >
                  <svg width="20" height="20" fill="currentColor" className="text-red-500">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                  </svg>
                  Google
                </Button>
                <Button 
                  size="xl" 
                  variant="outlined"
                  className="flex-1 flex items-center justify-center gap-3 border-blue-gray-200 text-blue-gray-700 hover:bg-blue-gray-50/50"
                >
                  <svg width="20" height="20" fill="currentColor" className="text-blue-gray-900">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  GitHub
                </Button>
              </div>
              
              <Typography variant="paragraph" className="text-center text-blue-gray-600 font-medium mt-6">
                Already have an account?
                <Link to="/auth/sign-up" className="text-blue-500 ml-1 hover:text-blue-700 transition-colors">
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
