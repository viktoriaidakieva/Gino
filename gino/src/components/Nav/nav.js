import React from 'react';
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
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
    return (
      //CREATE ON HOVER FOR EXPAND ICONS
            <nav className='NavbarItems'>
               <div className='menu-icon'>
                  <ul>
                  <li id ="dashboard" className="menu-item" href="#dashboard"><img src={dashboardIcon} alt='dashboardIcon'></img></li>
                  <li id="favourites" className="menu-item"  href="#favourites"><img src={favouritesIcon} alt='favouritesIcon'></img></li>
                  <li id ="recent" className="menu-item"  href="#recent"><img src={recentIcon} alt='recentIcon'></img></li>
                  <li id="shared" className="menu-item"  href="#shared"><img src={sharedIcon} alt='sharedIcon'></img></li>
                  <li id="archive" className="menu-item"  href="#archive"><img src={archiveIcon} alt='archiveIcon'></img></li>
                  <li id="recycleBin" className="menu-item"  href="#recyleBin"><img src={recycleBinIcon} alt='recycleBinIcon'></img></li>
                  
                   {/*FIX BUTTON FOR COLLAPSE  */}
                  <button id="expandAndCollapse" className="menu-item"{...getToggleProps()}><img src={expandIcon} alt="expandIcon"></img>  
                        {isExpanded ? 'Collapse' : 'Expand'}
                         </button>
                         <section {...getCollapseProps()}>
                         <li id ="dashboard" className="menu-item" href="#dashboard"><img src={dashboardIcon} alt='dashboardIcon'></img>Dashboard</li>
                  <li id="favourites" className="menu-item"  href="#favourites"><img src={favouritesIcon} alt='favouritesIcon'></img>Favourites</li>
                  <li id ="recent" className="menu-item"  href="#recent"><img src={recentIcon} alt='recentIcon'></img>Recent</li>
                  <li id="shared" className="menu-item"  href="#shared"><img src={sharedIcon} alt='sharedIcon'></img>Shared</li>
                  <li id="archive" className="menu-item"  href="#archive"><img src={archiveIcon} alt='archiveIcon'></img>Archive</li>
                  <li id="recycleBin" className="menu-item"  href="#recyleBin"><img src={recycleBinIcon} alt='recycleBinIcon'></img>Recycle Bin</li>
                           </section>
                  </ul>
               </div>
            </nav>
      );
    } 

export default NavBar;