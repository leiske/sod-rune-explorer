import { Outlet, useLocation, useNavigate } from "react-router";
import { ClassBar } from './classBar/ClassBar';
import { classes } from './routes';
import './layout.css';

export function Layout() {
    const { pathname: classNameRaw } = useLocation();
    const className = classNameRaw.slice(1); // strip leading /


    const selectedClass = classes.find(c => c.name === className);

    return (
        <div className="page-container">
            <ClassBar classes={classes} selectedClass={selectedClass}/>
            <Outlet />
        </div>
    );
}
