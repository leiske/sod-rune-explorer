import { useNavigate } from "react-router";
const selectedIcon = "https://wow.zamimg.com/images/wow/icons/large/spell_nature_wispsplode.jpg";

export function ClassBar({ classes, selectedClass }) {
    const navigate = useNavigate();

    return ( 
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
                        <img width="56" height="56" className={`${sodClass.iconSrc === selectedClass.iconSrc ? 'class-icon-selected' : '' } class-icon-highlight`} src="https://wow.zamimg.com/images/Icon/large/hilite/default.png" />
                    </div>
                )}
        </div>
    )
}
