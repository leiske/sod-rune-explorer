import { hunter } from './runes/hunter.json';
import { druid } from './runes/druid.json';
import { rogue } from './runes/rogue.json';
import { mage } from './runes/mage.json';
import { priest } from './runes/priest.json';
import { warlock } from './runes/warlock.json';
import { warrior } from './runes/warrior.json';
import { paladin } from './runes/paladin.json';
import { shaman } from './runes/shaman.json';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { ClassPage } from './classPage/ClassPage';
import { Layout } from './Layout';

export const classes = [
  hunter,
  druid,
  rogue,
  mage,
  priest,
  warlock,
  warrior,
  paladin,
  shaman,
];

export const router =  createBrowserRouter([
    {
        path: "/*",
        element: <Layout />,
        errorElement: <Navigate to="/hunter" replace={true} />,
        children: [
            {
                path: "hunter",
                element: <ClassPage sodClass={hunter} />,
            },
            {
                path: "druid",
                element: <ClassPage sodClass={druid} />,
            },
            {
                path: "rogue",
                element: <ClassPage sodClass={rogue} />,
            },
            {
                path: "mage",
                element: <ClassPage sodClass={mage} />,
            },
            {
                path: "priest",
                element: <ClassPage sodClass={priest} />,
            },
            {
                path: "warlock",
                element: <ClassPage sodClass={warlock} />,
            },
            {
                path: "warrior",
                element: <ClassPage sodClass={warrior} />,
            },
            {
                path: "paladin",
                element: <ClassPage sodClass={paladin} />,
            },
            {
                path: "shaman",
                element: <ClassPage sodClass={shaman} />,
            },
            {
                path: "",
                element: <Navigate to="/hunter" replace={true} />,
            },
        ],
    },
    {
        path: "rogue",
        element: <ClassPage sodClass={rogue} />,
    },
    {
        path: "*",
        element: <Navigate to="/hunter" replace={true} />,
    },
]);

