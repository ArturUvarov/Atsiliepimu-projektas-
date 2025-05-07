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
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export function editprofile({ isOpen, onClose, userData, onSave }) {
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
    onClose();
  };

  return (
    <Dialog
      size="md"
      open={isOpen}
      handler={onClose}
      className="flex min-h-screen items-center justify-center bg-transparent shadow-none"
    >
      <Card className="mx-auto w-full max-w-[24rem] transform bg-white transition-all hover:scale-105">
        <CardBody className="flex flex-col gap-8 p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500/10">
                <UserCircleIcon className="h-20 w-20 text-blue-500" />
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-blue-500 p-1.5 text-white transition-colors hover:bg-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </button>
            </div>
            <div className="space-y-1 text-center">
              <Typography variant="h4" className="font-bold">
                Edit Profile
              </Typography>
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-sm"
              >
                Update your personal information
              </Typography>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid gap-6">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-blue-500" />
              </div>
              <Input
                label="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className="pl-11"
              />
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
              </div>
              <Input
                type="email"
                label="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="pl-11"
              />
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <PhoneIcon className="h-5 w-5 text-blue-500" />
              </div>
              <Input
                label="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="pl-11"
              />
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MapPinIcon className="h-5 w-5 text-blue-500" />
              </div>
              <Input
                label="Location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="pl-11"
              />
            </div>

            <div className="space-y-2">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Bio
              </Typography>
              <textarea
                className="border-blue-gray-200 w-full rounded-lg p-4 text-sm focus:border-blue-500"
                rows="4"
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
              />
            </div>
          </div>
        </CardBody>

        <CardFooter className="flex gap-4 px-8 pb-8 pt-0">
          <Button
            onClick={handleSubmit}
            fullWidth
            className="bg-blue-500 shadow-lg hover:bg-blue-600 hover:shadow-blue-500/20"
          >
            Save Changes
          </Button>
          <Button
            variant="outlined"
            onClick={onClose}
            fullWidth
            className="border-blue-500 text-blue-500"
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </Dialog>
  );
}

export default editprofile;
