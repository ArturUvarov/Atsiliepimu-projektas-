import { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { MapPinIcon, EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function editprofile({ userData, onSave }) {
  const [formData, setFormData] = useState({
    username: userData?.username || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    location: userData?.location || "",
    bio: userData?.bio || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-[550px] mx-auto">
        <Card className="shadow-xl">
          <CardBody className="flex flex-col gap-8 p-8">
            {/* Profile Header */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <UserCircleIcon className="w-20 h-20 text-blue-500" />
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="text-center space-y-1">
                <Typography variant="h3" className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Edit Profile
                </Typography>
                <Typography variant="paragraph" className="text-blue-gray-600 font-medium">
                  Update your personal information
                </Typography>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid gap-6">
              {/* Existing input fields with updated styling */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <Input
                  label="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="pl-11 !border-blue-gray-200 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20"
                  labelProps={{
                    className: "peer-focus:!text-blue-500",
                  }}
                  containerProps={{
                    className: "min-w-[100px]",
                  }}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <Input
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-11 !border-blue-gray-200 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20"
                  labelProps={{
                    className: "peer-focus:!text-blue-500",
                  }}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <PhoneIcon className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <Input
                  label="Phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-11 !border-blue-gray-200 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20"
                  labelProps={{
                    className: "peer-focus:!text-blue-500",
                  }}
                />
              </div>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPinIcon className="h-5 w-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </div>
                <Input
                  label="Location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="pl-11 !border-blue-gray-200 focus:!border-blue-500 ring-4 ring-transparent focus:ring-blue-500/20"
                  labelProps={{
                    className: "peer-focus:!text-blue-500",
                  }}
                />
              </div>

              {/* Bio field with enhanced styling */}
              <div className="space-y-2">
                <Typography variant="small" color="blue-gray" className="font-medium pl-1">
                  Bio
                </Typography>
                <textarea
                  className="w-full rounded-lg border border-blue-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 p-4 text-sm transition-all hover:border-blue-500 min-h-[120px] resize-none"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                />
              </div>
            </div>
          </CardBody>

          <CardFooter className="pt-0 px-8 pb-8 flex gap-4">
            <Button
              size="lg"
              onClick={handleSubmit}
              fullWidth
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all"
            >
              Save Changes
            </Button>
            <Button
              size="lg"
              variant="outlined"
              onClick={() => navigate(-1)} // Go back to previous page
              fullWidth
              className="border-blue-500 text-blue-500 hover:opacity-75 transition-opacity"
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default editprofile;