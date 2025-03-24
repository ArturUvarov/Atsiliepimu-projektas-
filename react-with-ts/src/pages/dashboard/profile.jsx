import {Card,CardBody,CardHeader,CardFooter,Avatar,Typography,Button,Chip,} from "@material-tailwind/react";
import { PencilIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard } from "@/widgets/cards";
import { projectsData } from "@/data";

export function Profile() {
  return (
    <>
      <div className="relative mt-8 h-[40vh] w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/0" />
        <div className="absolute bottom-8 left-8 text-white">
          <Typography variant="lead" className="opacity-80">
            Manage your profile and view your recent projects
          </Typography>
        </div>
      </div>
      <Card className="mx-3 -mt-20 mb-6 lg:mx-4 border-none shadow-2xl backdrop-blur-xl bg-white/90">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xxl"
                variant="circular"
                className="ring-4 ring-blue-500/30 shadow-xl border-4 border-white h-32 w-32"
              />
              <div>
                <div className="flex items-center gap-4">
                  <Typography variant="h3" color="blue-gray" className="mb-1">
                    Richard Davis
                  </Typography>
                  <Chip
                    value="Pro Member"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/20"
                  />
                </div>
                <Typography variant="lead" className="font-normal text-blue-gray-600">
                  CEO / Co-Founder
                </Typography>
                <div className="flex gap-4 mt-4">
                  <Button size="sm" variant="outlined" className="flex items-center gap-2">
                    <EnvelopeIcon className="h-4 w-4" />
                    Message
                  </Button>
                  <Button size="sm" className="flex items-center gap-2 bg-blue-500">
                    <PencilIcon className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
            <Card className="backdrop-blur-xl bg-white/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <Typography variant="h5" color="blue-gray">
                  Profile Information
                </Typography>
                <Button 
                  variant="text" 
                  className="flex items-center gap-2"
                  size="sm"
                >
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </Button>
              </div>
              <Typography className="mb-6 text-blue-gray-500">
                Hi, I'm Richard Davis. With over 15 years of experience in tech leadership, I've helped scale multiple startups to successful exits.
              </Typography>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <MapPinIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium">
                      Location
                    </Typography>
                    <Typography variant="small" className="text-blue-gray-500">
                      San Francisco, USA
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <PhoneIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium">
                      Phone
                    </Typography>
                    <Typography variant="small" className="text-blue-gray-500">
                      (44) 123 1234 123
                    </Typography>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <Typography variant="small" className="font-medium">
                      Email
                    </Typography>
                    <Typography variant="small" className="text-blue-gray-500">
                      richard.davis@company.com
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t">
                <Typography variant="small" className="font-medium mb-4">
                  Social Media
                </Typography>
                <div className="flex gap-4">
                  <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-facebook text-blue-700 text-xl" />
                    Facebook
                  </Button>
                  <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-twitter text-blue-400 text-xl" />
                    Twitter
                  </Button>
                  <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-instagram text-purple-500 text-xl" />
                    Instagram
                  </Button>
                <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-github text-black text-xl" />
                    GitHub
                  </Button>
                 <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-linkedin text-blue-500 text-xl" />
                    LinkedIn
                  </Button>
                 <Button variant="text" className="flex items-center gap-1 rounded-lg hover:bg-blue-50">
                    <i className="fa-brands fa-reddit text-orange-500 text-xl" />
                    Reddit
                  </Button>
                
                </div>
              </div>
            </Card>
            <Card className="backdrop-blur-xl bg-white/50 p-6">
              <div className="flex items-center justify-between mb-6">
                <Typography variant="h5" color="blue-gray">
                  Skills & Statistics
                </Typography>
              </div>
              <div className="mb-6">
                <Typography variant="small" className="font-medium mb-4">
                  Top Skills
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'Strategy', 'Innovation', 'Tech', 'Marketing'].map((skill) => (
                    <Chip
                      key={skill}
                      value={skill}
                      className="bg-blue-50 text-blue-700 shadow-none hover:shadow-md transition-all"
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card className="p-4 bg-gradient-to-br from-blue-500 to-blue-700">
                  <Typography variant="h4" className="text-white font-bold">
                    15+
                  </Typography>
                  <Typography variant="small" className="text-blue-100">
                    Years Experience
                  </Typography>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-purple-500 to-purple-700">
                  <Typography variant="h4" className="text-white font-bold">
                    50+
                  </Typography>
                  <Typography variant="small" className="text-purple-100">
                    Projects Completed
                  </Typography>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-green-500 to-green-700">
                  <Typography variant="h4" className="text-white font-bold">
                    100%
                  </Typography>
                  <Typography variant="small" className="text-green-100">
                    Success Rate
                  </Typography>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-orange-500 to-orange-700">
                  <Typography variant="h4" className="text-white font-bold">
                    24/7
                  </Typography>
                  <Typography variant="small" className="text-orange-100">
                    Support
                  </Typography>
                </Card>
              </div>
              <div>
                <Typography variant="small" className="font-medium mb-4">
                  Recent Achievements
                </Typography>
                <div className="flex flex-col gap-4">
                  {[
                    'Led successful Series B funding round',
                    'Launched innovative product line',
                    'Expanded team by 150%'
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <Typography variant="small" className="text-blue-gray-700">
                        {achievement}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
          <div className="px-4 pt-8">
            <Typography variant="h4" color="blue-gray" className="mb-8 flex items-center gap-3">
              Recent Projects
              <Chip size="sm" value={`${projectsData.length} projects`} className="rounded-full" />
            </Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {projectsData.map(({ img, title, description, tag, route }) => (
                <Card key={title} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader floated={false} color="gray" className="relative h-56 mx-0 mt-0">
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Chip
                        value={tag}
                        className="bg-black/50 backdrop-blur-sm text-white"
                      />
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-3 font-semibold">
                      {title}
                    </Typography>
                    <Typography variant="medium" className="font-normal text-blue-gray-600">
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
                        View Project
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
    </>
  );
}

export default Profile;
