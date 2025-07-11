import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import {
  PencilIcon,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { projectsData } from "@/data";
import { authservice } from "../auth/AuthService";
import { editprofile as EditProfileModal } from "./EditProfile";
import {
  FaFacebookSquare,
  FaRedditSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";

export function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await authservice.getProfile();
        setUserData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditProfile = async (updatedData) => {
    try {
      await authservice.updateProfile(updatedData);
      setUserData({ ...userData, ...updatedData });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    authservice.logout();
  };

  if (loading) return <div>Kraunama...</div>;
  if (error) return <div>Klaida: {error}</div>;
  if (!userData) return <div>Profilio duomenų nėra</div>;

  return (
    <>
      <div className="relative mt-8 h-[40vh] w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/0" />
      </div>
      <Card className="hover:shadow-3xl mx-3 -mt-20 mb-6 transform border-none bg-white/90 shadow-2xl backdrop-blur-xl transition-all duration-300 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={userData.avatar || "/img/bruce-mars.jpeg"}
                alt={userData.username}
                size="xxl"
                variant="circular"
                className="h-32 w-32 transform border-4 border-white shadow-xl ring-4 ring-blue-500/30 transition-all duration-300 hover:scale-105 hover:ring-blue-500/50"
              />
              <div>
                <div className="flex items-center gap-4">
                  <Typography
                    variant="h3"
                    color="blue-gray"
                    className="mb-1 text-xl"
                  >
                    {userData.username}
                  </Typography>
                  <Chip
                    value={userData.membership || "Pro Narys"}
                    className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20"
                  />
                </div>
                <Typography
                  variant="lead"
                  className="font-normal text-blue-gray-600"
                >
                  {userData.role || "Vadovas / Įkūrėjas"}
                </Typography>
                <div className="mt-4 flex gap-4">
                  <Button
                    size="sm"
                    variant="outlined"
                    className="flex items-center gap-2"
                  >
                    <EnvelopeIcon className="h-4 w-4" />
                    Žinutė
                  </Button>
                  <Button
                    size="sm"
                    className="flex items-center gap-2 bg-blue-500"
                    onClick={handleOpenEditModal}
                  >
                    <PencilIcon className="h-4 w-4" />
                    Redaguoti Profilį
                  </Button>
                  <Button
                    size="sm"
                    color="red"
                    variant="filled"
                    className="flex items-center gap-2 bg-red-500 transition-all duration-300 hover:bg-red-600"
                    onClick={handleLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                      />
                    </svg>
                    <span className="text-white">Atsijungti</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
            <Card className="border border-white/20 bg-white/50 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/60">
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Profilio Informacija
                </Typography>
              </div>
              <Typography className="mb-6 text-xl text-blue-gray-500">
                {userData.bio ||
                  "Sveiki, aš esu Richard Davis. Turiu daugiau nei 15 metų patirties technologijų srityje, padėjau vystyti keletą sėkmingų startuolių."}
              </Typography>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <MapPinIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="text-xl font-medium">
                      Vieta
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-xl text-blue-gray-500"
                    >
                      {userData.location || "Vilnius, Lietuva"}
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="text-xl font-medium">
                      Telefonas
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-xl text-blue-gray-500"
                    >
                      {userData.phone || "(44) 123 1234 123"}
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-blue-50 p-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="large" className="text-xl font-medium">
                      El. Paštas
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-xl text-blue-gray-500"
                    >
                      {userData.email || "richard.davis@company.com"}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <Typography
                  variant="large"
                  className="mb-4 text-xl font-medium"
                >
                  Socialiniai Tinklai
                </Typography>
                <div className="mb-6 flex items-center gap-4">
                  <a href="https://www.facebook.com/profile" target="_blank">
                    <FaFacebookSquare className="h-8 w-8 transform text-blue-600 transition-all duration-300 hover:scale-110" />
                  </a>
                  <a href="https://www.reddit.com/user/profile" target="_blank">
                    <FaRedditSquare className="h-8 w-8 transform text-orange-600 transition-all duration-300 hover:scale-110" />
                  </a>
                  <a href="https://www.linkedin.com/in/profile" target="_blank">
                    <FaLinkedin className="h-8 w-8 transform text-blue-700 transition-all duration-300 hover:scale-110" />
                  </a>
                  <a href="https://github.com/profile/  " target="_blank">
                    <FaGithubSquare className="text-black-700 h-8 w-8 transform transition-all duration-300 hover:scale-110" />
                  </a>
                </div>
                <div className="flex gap-4">
                  {userData.socialMedia?.map(({ platform, url, iconClass }) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="text"
                        className="flex transform items-center gap-1 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
                      >
                        <i className={iconClass} />
                        {platform}
                      </Button>
                    </a>
                  ))}
                </div>
              </div>
            </Card>
            <Card className="border border-white/20 bg-white/50 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-white/60">
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Įgūdžiai ir Statistika
                </Typography>
              </div>
              <div className="mb-6">
                <Typography
                  variant="large"
                  className="mb-4 text-xl font-medium"
                >
                  Pagrindiniai Įgūdžiai
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {userData.skills?.map((skill) => (
                    <Chip
                      key={skill}
                      value={skill}
                      className="transform cursor-pointer bg-blue-50 text-blue-700 shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-100 hover:shadow-lg hover:shadow-blue-500/20"
                    />
                  ))}
                </div>
              </div>
              <div className="mb-6 grid grid-cols-2 gap-4">
                <Card className="transform bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-4 transition-all duration-500 hover:-translate-y-2 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/20">
                  <Typography
                    variant="h4"
                    className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-xl font-bold text-transparent text-white"
                  >
                    {userData.experience || "15+"}
                  </Typography>
                  <Typography variant="large" className="text-xl text-blue-100">
                    Metų Patirtis
                  </Typography>
                </Card>
                <Card className="transform bg-gradient-to-br from-purple-500 to-purple-700  p-4 transition-all duration-500 hover:-translate-y-2 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 hover:shadow-xl hover:shadow-blue-500/20">
                  <Typography
                    variant="h4"
                    className="bg-gradient-to-r from-white to-purple-100 bg-clip-text text-xl font-bold text-transparent text-white"
                  >
                    {userData.projects || "50+"}
                  </Typography>
                  <Typography
                    variant="large"
                    className="text-xl text-purple-100"
                  >
                    Užbaigti Projektai
                  </Typography>
                </Card>
                <Card className="transform bg-gradient-to-br from-green-500 to-green-700 p-4 transition-all duration-500 hover:-translate-y-2 hover:from-green-600 hover:via-green-700 hover:to-green-800 hover:shadow-xl hover:shadow-blue-500/20">
                  <Typography
                    variant="h4"
                    className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-xl font-bold text-transparent text-white"
                  >
                    {userData.successRate || "100%"}
                  </Typography>
                  <Typography
                    variant="large"
                    className="text-xl text-green-100"
                  >
                    Sėkmės Rodiklis
                  </Typography>
                </Card>
                <Card className="transform bg-gradient-to-br from-orange-500 to-orange-700  p-4 transition-all duration-500 hover:-translate-y-2 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 hover:shadow-xl hover:shadow-blue-500/20">
                  <Typography
                    variant="h4"
                    className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-xl font-bold text-transparent text-white"
                  >
                    {userData.support || "24/7"}
                  </Typography>
                  <Typography
                    variant="large"
                    className="text-xl text-orange-100"
                  >
                    Pagalba
                  </Typography>
                </Card>
              </div>
              <div>
                <Typography
                  variant="large"
                  className="font-weight-900 mb-4 text-xl"
                >
                  Naujausi Pasiekimai
                </Typography>
                <Card className="transform bg-gradient-to-br from-cyan-500 to-cyan-700  p-4 transition-all duration-500 hover:-translate-y-2 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 hover:shadow-xl hover:shadow-blue-500/20">
                  <Typography
                    variant="h4"
                    className="bg-gradient-to-r from-white to-orange-100 bg-clip-text text-xl font-bold text-transparent text-white"
                  >
                    {userData.support || "Geriausiai įvertinta apžvalga“"}
                  </Typography>
                  <Typography
                    variant="large"
                    className="text-xl text-orange-100"
                  >
                    Maisto gaminimo tema
                  </Typography>
                </Card>
                <div className="flex flex-col gap-4">
                  {userData.achievements?.map((achievement, index) => (
                    <div
                      key={index}
                      className="group flex cursor-pointer items-center gap-4 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:translate-x-2 hover:bg-blue-50/50"
                    >
                      <div className="h-3 w-3 transform rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-blue-500/30"></div>
                      <Typography
                        variant="large"
                        className="text-blue-gray-700 group-hover:text-blue-gray-900"
                      >
                        {achievement}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="px-4 pt-8">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-8 flex items-center gap-3 text-xl"
            >
              Naujausi Atsiliepimai
              <Chip
                size="sm"
                value={`${projectsData.length} projektai`}
                className="rounded-full"
              />
            </Typography>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projectsData.map(({ img, title, description, tag, route }) => (
                <Card
                  key={title}
                  className="group overflow-hidden bg-white/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <CardHeader
                    floated={false}
                    color="gray"
                    className="relative mx-0 mt-0 h-56 overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute left-4 top-4">
                      <Chip
                        value={tag}
                        className="border border-white/20 bg-black/50 text-white backdrop-blur-md"
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className="mb-3 text-xl font-semibold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="medium"
                      className="text-xl font-normal text-blue-gray-600"
                    >
                      {description}
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <Link to={route}>
                      <Button
                        size="sm"
                        variant="text"
                        className="flex items-center gap-2 hover:bg-blue-gray-50/50"
                      >
                        Žiūrėti atsiliepima
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="h-4 w-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        userData={userData}
        onSave={handleEditProfile}
      />
    </>
  );
}

export default Profile;
