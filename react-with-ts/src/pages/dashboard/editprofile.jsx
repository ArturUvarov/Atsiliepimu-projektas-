import { useState } from "react";
import {
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { PencilIcon, MapPinIcon, EnvelopeIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

export function editprofile({ open, handleOpen, userData, onSave }) {
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
    handleOpen();
  };

  return (
    <Dialog
      size="md"
      open={open}
      handler={handleOpen}
      className="bg-transparent shadow-none"
      dismiss={{
        enabled: true,
        escapeKey: true,
        outsidePress: true,
      }}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Card className="w-full max-w-[500px] shadow-2xl backdrop-blur-xl bg-white/95">
          <CardBody className="flex flex-col gap-8 p-8">
            <div className="text-center">
              <Typography variant="h3" className="font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Edit Profile
              </Typography>
              <Typography variant="paragraph" color="blue-gray" className="mt-2 font-medium opacity-75">
                Update your personal information
              </Typography>
            </div>

            <div className="grid gap-6">
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

              <div className="space-y-2">
                <Typography variant="small" color="blue-gray" className="font-medium pl-1">
                  Bio
                </Typography>
                <textarea
                  className="w-full rounded-lg border-blue-gray-200 focus:border-blue-500 focus:ring-blue-500/20 p-4 text-sm transition-all hover:border-blue-500 min-h-[100px] resize-none"
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
              variant="filled"
              onClick={handleSubmit}
              fullWidth
              className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Save Changes
            </Button>
            <Button
              size="lg"
              variant="text"
              onClick={handleOpen}
              fullWidth
              className="hover:bg-blue-gray-50/50"
            >
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Dialog>
  );
}

export default editprofile;