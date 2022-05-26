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
import myFoldersIcon from '../../icons/my folders icon.png';

function NavBar () {
   const config = {
      hasDisabledAnimation: true,
      duration: 1
    };
   const { getCollapseProps, getToggleProps,isExpanded} = useCollapse(config)
    return (
            <nav className='NavbarItems'>
               <div className='menu-icon' style= {{display:"flex"}}>
                         <section>
                         <button id ="dashboard" title="Dashboard" className="menu-item" href="#dashboard"><img src={dashboardIcon} alt='dashboardIcon'></img></button>
                         <button id="myFolders" title="My Folders" className="menu-item"  href="#myFolders"><img src={myFoldersIcon} alt='myFoldersIcon'></img></button>
                  <button id="favourites" title="Favourites" className="menu-item"  href="#favourites"><img src={favouritesIcon} alt='favouritesIcon'></img></button>
                  <button id ="recent" title="Recent" className="menu-item"  href="#recent"><img src={recentIcon} alt='recentIcon'></img></button>
                   <button id="shared" title="Shared" className="menu-item"  href="#shared"><img src={sharedIcon} alt='sharedIcon'></img></button>
                  <button id="archive" title="Archive" className="menu-item"  href="#archive"><img src={archiveIcon} alt='archiveIcon'></img></button>
                  <button id="recycleBin" title="Recycle Bin" className="menu-item"  href="#recyleBin"><img src={recycleBinIcon} alt='recycleBinIcon'></img></button>
                  <button id="expandAndCollapse" title="Expand or Collapse" className="menu-item" {...getToggleProps()}><img src={expandIcon} alt="expandIcon"></img></button>
                         </section>
                         {/* <div style= {{display:"flex"}}> */}
                         
                           {/* <button id="expandAndCollapse" title="Expand or Collapse" className="menu-item"{...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}><img src={expandIcon} alt="expandIcon"></img>   */}
                        {/* {isExpanded ? "Collapse" : "Expand"} */}
                        
                        <section {...getCollapseProps()}>
                           <li id ="dashboard" title="Dashboard" className="menu-item-description" href="#dashboard">Dashboard</li>
                           <li id="myFolders" title="My Folders" className="menu-item-description"  href="#myFolders">My Folders</li>
                           <li id="favourites" title="Favourites" className="menu-item-description"  href="#favourites">Favourites</li>
                           <li id ="recent" title="Recent" className="menu-item-description"  href="#recent">Recents</li>
                           <li id="shared" title="Shared" className="menu-item-description"  href="#shared">Shared</li>
                           <li id="archive" title="Archive" className="menu-item-description"  href="#archive">Archive</li>
                           <li id="recycleBin" title="Recycle Bin" className="menu-item-description"  href="#recyleBin">Recycle Bin</li>
                           </section>
                        {/* </div> */}
               </div>
            </nav>
      );
    } 

export default NavBar;