'use client';
import React from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from '@material-tailwind/react';
import {
  UserCircleIcon,
  ChevronDownIcon,
  Bars2Icon,
  BellAlertIcon,
  GiftIcon,
  RocketLaunchIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import { MdOutlineLeaderboard } from 'react-icons/md';
import { AiOutlineHome } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const announcements = [
  {
    title: 'Company retreat at Yishun SAFRA',
    description: 'Our annual company outing will take place on Saturday. Remember to RSVP!',
  },
  {
    title: 'End of year report submission',
    description: 'Gentle reminder that each departments yearly report has to be submitted by 28 December, 9pm.',
  },
  {
    title: 'Launch of My AI',
    description:
      'We are excited to introduce our websites new feature, MyAI! Plan your daily schedules and more, using this tool.',
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
        <Typography variant="small" color="gray" className="font-montserrat font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-montserrat font-semibold">
            <MenuItem {...triggers} className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
              <BellAlertIcon className="h-[18px] w-[18px]" /> Announcements{' '}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList {...triggers} className="hidden w-[36rem] gap-3 overflow-visible font-montserrat lg:grid">
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
  {
    label: 'MyAI',
    icon: RocketLaunchIcon,
    routeLink: '/myai',
  },
  {
    label: 'Profile',
    icon: UserIcon,
    routeLink: '/profile',
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
          className="font-montserrat font-semibold"
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
    <Navbar className="mx-auto max-w-screen-2xl p-2 lg:mt-10 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="font-bolder ml-5 mr-4 cursor-pointer py-1.5 font-montserrat text-2xl font-medium"
          onClick={() => {
            router.push('/');
          }}
        >
          <AiOutlineHome />
        </Typography>
        <div className="absolute left-2/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
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
        {/* <ProfileMenu /> */}
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
