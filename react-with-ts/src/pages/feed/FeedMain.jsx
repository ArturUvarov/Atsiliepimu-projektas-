import React from 'react';
import {Card,CardBody,Typography,Input,Button,List,ListItem,} from "@material-tailwind/react";

const FeedMain = () => { 
    return ( 
        <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gradient-to-br from-black via-gray-900 to-blue-900 min-h-screen animate-gradient-x">
            
            <aside className="w-full lg:w-1/4 space-y-6 animate-fade-in">
                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <Typography variant="h5" className="mb-4 text-cyan-400 font-bold">
                            Subjects
                        </Typography>
                        <List className="space-y-2">
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Subject 1
                            </ListItem>
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Subject 2
                            </ListItem>
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Subject 3
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>

                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <Typography variant="h5" className="mb-4 text-cyan-400 font-bold">
                            Trending
                        </Typography>
                        <List className="space-y-2">
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Post 1
                            </ListItem>
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Post 2
                            </ListItem>
                            <ListItem className="text-white hover:text-cyan-400 transition-all duration-300 hover:translate-x-2">
                                Post 3
                            </ListItem>
                        </List>
                    </CardBody>
                </Card>
            </aside>

            
            <main className="w-full lg:w-2/4 space-y-6 animate-fade-in delay-150">
                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <div className="flex items-center gap-4">
                            <Input
                                type="text"
                                label="Create a post..."
                                className="!border-white/10 text-white focus:!border-cyan-500"
                                labelProps={{
                                    className: "text-white/60"
                                }}
                            />
                            <Button 
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/40"
                            >
                                Post
                            </Button>
                        </div>
                    </CardBody>
                </Card>

                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <Typography variant="h6" className="mb-2 text-cyan-400 font-bold">
                            Post Title
                        </Typography>
                        <Typography className="mb-4 text-white/80">
                            Post content goes here...
                        </Typography>
                        <div className="flex gap-4">
                            <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40"
                            >
                                Upvote
                            </Button>
                            <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40"
                            >
                                Downvote
                            </Button>
                            <Button 
                                size="sm" 
                                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/40"
                            >
                                Comment
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </main>

            
            <aside className="w-full lg:w-1/4 space-y-6 animate-fade-in delay-300">
                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <Typography variant="h5" className="mb-4 text-cyan-400 font-bold">
                            About
                        </Typography>
                        <Typography className="text-white/80">
                            Information about the platform.
                        </Typography>
                    </CardBody>
                </Card>

                <Card className="transform transition-all duration-300 hover:scale-102 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20">
                    <CardBody>
                        <Typography variant="h5" className="mb-4 text-cyan-400 font-bold">
                            Popular Tags
                        </Typography>
                        <List className="space-y-2">
                            <ListItem className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-x-2">#technology</ListItem>
                            <ListItem className="text-green-400 hover:text-green-300 transition-all duration-300 hover:translate-x-2">#nature</ListItem>
                            <ListItem className="text-purple-400 hover:text-purple-300 transition-all duration-300 hover:translate-x-2">#art</ListItem>
                        </List>
                    </CardBody>
                </Card>
            </aside>
        </div>
    );
};

export default FeedMain;