'use client';

import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
  BellAlertIcon,
  GiftIcon,
} from '@heroicons/react/24/outline';

import { MdOutlineLeaderboard } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';

import { useRouter } from 'next/navigation';

// profile menu component
const profileMenuItems = [
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  //   const closeMenu = () => setIsMenuOpen(false);
  const router = useRouter();
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="jack lim"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1 font-montserrat">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                router.push('/editprofile');
              }}
              className={`flex items-center gap-2 rounded${
                isLastItem ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10' : ''
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-montserrat font-semibold"
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

const announcements = [
  {
    title: 'Announcement 1',
    description: 'Learn how to use @material-tailwind/html, packed with rich components and widgets.',
  },
  {
    title: '@material-tailwind/react',
    description: 'Learn how to use @material-tailwind/react, packed with rich components for React.',
  },
  {
    title: 'Material Tailwind PRO',
    description: 'A complete set of UI Elements for building faster websites in less time.',
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = announcements.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1 font-montserrat">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal font-montserrat">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-semibold font-montserrat">
            <MenuItem {...triggers} className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <BellAlertIcon className="h-[18px] w-[18px]" /> Announcements{' '}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList {...triggers} className="hidden w-[36rem] gap-3 overflow-visible lg:grid font-montserrat">
          <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <BellAlertIcon className="h-[18px] w-[18px]" /> Announcements{' '}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: 'Employees',
    icon: UserCircleIcon,
    routeLink: '/employees',
  },
  {
    label: 'Welfare',
    icon: GiftIcon,
    routeLink: '/welfare',
  },
  {
    label: 'Leaderboard',
    icon: MdOutlineLeaderboard,
    routeLink: '/leaderboard',
  },
];

function NavList() {
  const router = useRouter();
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, routeLink }) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-semibold font-montserrat"
          onClick={() => {
            console.log(routeLink);
            router.push(`${routeLink}`);
          }}
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, {
              className: 'h-[18px] w-[18px]',
            })}{' '}
            {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const router = useRouter();

  React.useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar className="mx-auto w-screen p-2 lg:rounded-full lg:my-5">
      <div className="relative mx-auto flex justify-between items-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-5 text-2xl font-bolder cursor-pointer py-1.5 font-medium font-montserrat"
          onClick={() => {
            router.push('/');
          }}
        >
          <AiOutlineHome />
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        {/* <div className="">test</div> */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
