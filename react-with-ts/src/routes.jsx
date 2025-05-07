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

const name = {
  className: "text-xl",
};

export const routes = [
  {
    title: "main pages",
    layout: "dashboard",
    pages: [
      {
        icon: <MegaphoneIcon {...icon} />,
        name: <span {...name}>Feed</span>,
        path: "/feed",
        element: <FeedMain />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: <span {...name}>Profile</span>,
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <ChatBubbleLeftEllipsisIcon {...icon} />,
        name: <span {...name}>ChatGpt</span>,
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
        name: <span {...name}>Sign-in</span>,
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: <span {...name}>Sign-up</span>,
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
