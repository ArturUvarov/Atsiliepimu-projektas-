import { UserCircleIcon,ServerStackIcon,RectangleStackIcon,ChatBubbleLeftEllipsisIcon} from "@heroicons/react/24/solid";
import { Profile} from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { User } from "@/pages/user";
import {ChatGpt} from "@/pages/chatgpt";
import { FeedMain } from "@/pages/feed";

const icon = {
  className: "w-5 h-5 text-inherit",  
};

export const routes = [
  {
    layout: "feed",
    pages: [  
      {
        icon: <UserCircleIcon {...icon} />,
        name: "feed",
        path: "/feed",
        element: <FeedMain />,
      },
    ],
  },
  {
    layout: "dashboard",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "user",
        path: "/user",
        element: <User />,
      },
      {
        icon: <ChatBubbleLeftEllipsisIcon {...icon} />,
        name: "ChatGpt",
        path: "/ChatGpt",
        element: <ChatGpt />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;