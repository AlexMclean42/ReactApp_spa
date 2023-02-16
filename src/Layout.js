import { useState } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

function Layout() {
    return ( <>
        <nav>
            <ul>
                <li>
                    <NavLink to="/about" >About</NavLink>
                </li>
                <li>
                    <NavLink to="/skills"  >Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/experience"  >Experience</NavLink>
                </li>
      </ul>
    </nav>

    <div id="container">
      <aside>
        <figure id="avatar">
          <img
            src="https://rsuradio.com/wp-content/uploads/2016/10/Rick-Astley-640x360.jpg"
            alt="Rick Astley"
          />
        </figure>
        <h2>Rick Astley</h2>
        <h4>Singer, Songwriter</h4>
        <h6><a href="">rick.astley@meme.com</a></h6>
      </aside>

      <div id="content">
            <Outlet />
        </div>
    </div>
    <footer>&copy; Rick Astley 2023</footer>
    </>);
}
export default Layout;