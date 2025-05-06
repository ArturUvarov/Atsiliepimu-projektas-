import { Profile } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import { ChatGpt } from "@/pages/chatgpt";
import { FeedMain } from "./pages/feed";
import {
  MegaphoneIcon,
  UserCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  UserPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <MegaphoneIcon {...icon} />,
        name: "feed ",
        path: "/feed",
        element: <FeedMain />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
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
        icon: <UserGroupIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
