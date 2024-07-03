import './NavbarI.css'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsCalendarEvent } from 'react-icons/bs'
import { RiCommunityLine, RiGalleryLine, RiTeamFill } from 'react-icons/ri'
import { SiGithubsponsors } from 'react-icons/si'
import { IoIosArrowDropup } from 'react-icons/io'
import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useDetectClickOutside } from 'react-detect-click-outside';
import { Tooltip } from 'react-tooltip'

const NavbarI = () => {
    const ref = useRef(null);

    const location = useLocation();

    const checkClosingDropUp = () => {
        const currentDisplay = ref.current.style.display;
        if (currentDisplay === "none" || !currentDisplay) {
            ref.current.style.display = "block";
        }
        else {
            ref.current.style.display = "none";
        }
    }

    const outsideClick = (e) => {
        console.log(e.target);
        if (e.target !== document.getElementById('drop-up-icon') && e.target.parentElement !== document.getElementById('drop-up-icon')) {
            ref.current.style.display = "none";
        }
    }


    const closeRef = useDetectClickOutside({ onTriggered: outsideClick });

    return (
        <nav>
            <Link data-tooltip-content="Home" className={`my-anchor-element ${location.pathname === "/" && 'active'}`} to={'/'}>
                <AiOutlineHome size={25} />
            </Link>
            <Link data-tooltip-content="About" className={`my-anchor-element ${location.pathname === "/about" && 'active'}`} to={'/about'}>
                <AiOutlineInfoCircle size={25} />
            </Link>
            <Link data-tooltip-content="Alumni" className={`my-anchor-element ${location.pathname === "/alumni" && 'active'}`} to={'/alumni'}>
                <RiCommunityLine size={25} />
            </Link>
            <a className='show-on-phone dropup' ref={closeRef} href="#">
                <div id="drop-up-icon">
                    <IoIosArrowDropup onClick={checkClosingDropUp} size={25} />
                </div>
                <div style={{ display: 'none' }} ref={ref} className="dropup-content">
                    <Link style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} className={location.pathname === "/events" && 'active1'} onClick={checkClosingDropUp} to={'/events'}>Events</Link>
                    {/* <Link className={location.pathname === "/team" && 'active1'} onClick={checkClosingDropUp} to={'/team'}>Team</Link> */}
                    {/* <Link className={location.pathname === "/gallery" && 'active1'} onClick={checkClosingDropUp} to={'/gallery'}>Gallery</Link> */}
                    <Link className={location.pathname === "/sponsors" && 'active1'} onClick={checkClosingDropUp} to={'/sponsors'}>Sponsors</Link>
                    <Link className={location.pathname === "/gallery" && 'active1'} onClick={checkClosingDropUp} to={'/gallery'}>Gallery</Link>
                    <Link style={{ borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }} className={location.pathname === "/team" && 'active1'} onClick={checkClosingDropUp} to={'/team'}>Team</Link>
                </div>
            </a>
            <Link data-tooltip-content="Events" className={`hide-on-phone my-anchor-element ${location.pathname === "/events" && 'active'}`} to={'/events'}>
                <BsCalendarEvent size={25} />
            </Link>
            <Link data-tooltip-content="Gallery" className={`hide-on-phone my-anchor-element ${location.pathname === "/gallery" && 'active'}`} to={'/gallery'}>
                <RiGalleryLine size={25} />
            </Link>
            <Link data-tooltip-content="Team" className={`hide-on-phone my-anchor-element ${location.pathname === "/team" && 'active'}`} to={'/team'}>
                <RiTeamFill size={25} />
            </Link>
            <Link data-tooltip-content="Sponsors" className={`hide-on-phone my-anchor-element ${location.pathname === "/sponsors" && 'active'}`} to={'/sponsors'}>
                <SiGithubsponsors size={25} />
            </Link>
            <Tooltip closeOnEsc={true} anchorSelect=".my-anchor-element" place="top" />
        </nav>
    )
}

export default NavbarI