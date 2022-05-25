import React,{ useState } from 'react';
import './nav.css';
import useCollapse from 'react-collapsed'
import dashboardIcon from '../../icons/dashboard icon.png';
import favouritesIcon from '../../icons/favourites icon.png';
import recentIcon from '../../icons/recent files icon.png';
import sharedIcon from '../../icons/shared files icon.png';
import archiveIcon from '../../icons/archive icon.png';
import recycleBinIcon from '../../icons/recycle bin icon.png';
import expandIcon from '../../icons/expand icon.png';


function NavBar () {
   const [isExpanded, setExpanded] = useState(false)
   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
            <nav className='NavbarItems'>
               <div className='menu-icon'>
                 
                   {/*FIX BUTTON FOR COLLAPSE  */}
                 
                         <section>
                         <button id ="dashboard" title="Dashboard" className="menu-item" href="#dashboard"><img src={dashboardIcon} alt='dashboardIcon'></img></button>
                  <button id="favourites" title="Favourites" className="menu-item"  href="#favourites"><img src={favouritesIcon} alt='favouritesIcon'></img></button>
                  <button id ="recent" title="Recent" className="menu-item"  href="#recent"><img src={recentIcon} alt='recentIcon'></img></button>
                   <button id="shared" title="Shared" className="menu-item"  href="#shared"><img src={sharedIcon} alt='sharedIcon'></img></button>
                  <button id="archive" title="Archive" className="menu-item"  href="#archive"><img src={archiveIcon} alt='archiveIcon'></img></button>
                  <button id="recycleBin" title="Recycle Bin" className="menu-item"  href="#recyleBin"><img src={recycleBinIcon} alt='recycleBinIcon'></img></button>
                         </section>
                         <section {...getCollapseProps()}>
                  <li>Dashboard</li>
                  <li>Favourites</li>
                  <li>Recents</li>
                  <li>Shared</li>
                  <li>Archive</li>
                  <li>Recycle Bin</li>
                           </section>
                           <button id="expandAndCollapse" className="menu-item"{...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}><img src={expandIcon} alt="expandIcon"></img>  
                        {isExpanded ? 'Collapse' : 'Expand'}
                         </button>
               </div>
            </nav>
      );
    } 

export default NavBar;