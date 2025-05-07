import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
  List,
  ListItem,
} from "@material-tailwind/react";

const FeedMain = () => {
  return (
    <div className="animate-gradient-x flex min-h-screen flex-col gap-6 bg-gradient-to-br p-6 lg:flex-row">
      <aside className="animate-fade-in w-full space-y-6 lg:w-1/4">
        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <Typography variant="h5" className="mb-4 font-bold text-cyan-400">
              Subjects
            </Typography>
            <List className="space-y-2">
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Subject 1
              </ListItem>
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Subject 2
              </ListItem>
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Subject 3
              </ListItem>
            </List>
          </CardBody>
        </Card>

        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <Typography variant="h5" className="mb-4 font-bold text-cyan-400">
              Trending
            </Typography>
            <List className="space-y-2">
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Post 1
              </ListItem>
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Post 2
              </ListItem>
              <ListItem className="text-black transition-all duration-300 hover:translate-x-2 hover:text-cyan-400">
                Post 3
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </aside>

      <main className="animate-fade-in w-full space-y-6 delay-150 lg:w-2/4">
        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <div className="flex items-center gap-4">
              <Input
                type="text"
                label="Create a post..."
                className="!border-black/10 text-black focus:!border-cyan-500"
                labelProps={{
                  className: "text-white/60",
                }}
              />
              <Button className="transform bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600 hover:shadow-cyan-500/40">
                Post
              </Button>
            </div>
          </CardBody>
        </Card>

        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <Typography variant="h6" className="mb-2 font-bold text-cyan-400">
              Post Title
            </Typography>
            <Typography className="mb-4 text-black/80">
              Post content goes here...
            </Typography>
            <div className="flex gap-4">
              <Button
                size="sm"
                className="transform bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/40"
              >
                Upvote
              </Button>
              <Button
                size="sm"
                className="transform bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/40"
              >
                Downvote
              </Button>
              <Button
                size="sm"
                className="transform bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/40"
              >
                Comment
              </Button>
            </div>
          </CardBody>
        </Card>
      </main>

      <aside className="animate-fade-in w-full space-y-6 delay-300 lg:w-1/4">
        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <Typography variant="h5" className="mb-4 font-bold text-cyan-400">
              About
            </Typography>
            <Typography className="text-black/80">
              Information about the platform.
            </Typography>
          </CardBody>
        </Card>

        <Card className="hover:scale-102 transform border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:shadow-cyan-500/20">
          <CardBody>
            <Typography variant="h5" className="mb-4 font-bold text-cyan-400">
              Popular Tags
            </Typography>
            <List className="space-y-2">
              <ListItem className="text-blue-400 transition-all duration-300 hover:translate-x-2 hover:text-blue-300">
                #technology
              </ListItem>
              <ListItem className="text-green-400 transition-all duration-300 hover:translate-x-2 hover:text-green-300">
                #nature
              </ListItem>
              <ListItem className="text-purple-400 transition-all duration-300 hover:translate-x-2 hover:text-purple-300">
                #art
              </ListItem>
            </List>
          </CardBody>
        </Card>
      </aside>
    </div>
  );
};

export default FeedMain;
