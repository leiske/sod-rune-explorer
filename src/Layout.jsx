import { Outlet, useLocation, useNavigate } from "react-router";
import { classes } from './routes';
import './layout.css';

const selectedIcon = "https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg";

export function Layout() {
    const { pathname: classNameRaw } = useLocation();
    const className = classNameRaw.slice(1); // strip leading /

    const navigate = useNavigate();

    const selectedClass = classes.find(c => c.name === className);

    return (
        <div className="page-container">
            <div className="class-nav-container">
                {classes.map((sodClass) =>
                        <div
                            className="class-icon-container"
                            onClick={() => navigate(sodClass.name)}
                            key={sodClass.name}
                        >
                            <img 
                                width="56"
                                height="56"
                                src={sodClass.iconSrc === selectedClass.iconSrc ? selectedIcon : sodClass.iconSrc} 
                                className="class-icon"
                            />
                            <img className={`${sodClass.iconSrc === selectedClass.iconSrc ? 'class-icon-selected' : '' } class-icon-highlight`} src="https://wow.zamimg.com/images/Icon/large/hilite/default.png" />
                        </div>
                    )}
            </div>
            <Outlet />
        </div>
    );
}
