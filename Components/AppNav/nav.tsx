import styles from "./AppNav.module.css";
import { navData } from "./navData.js";
import Link from "next/link";
import {Button, Menu, MenuItem } from '@mui/material';
import { style } from "@mui/system";
import { useState } from "react";

export default function AppNav(props:any){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      console.log(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <>
         <ul id="menu-topLvl" className={styles.Menu}>
            <li><Button ><Link className={styles.homeLink} href="/">Home</Link></Button></li>
            {navData.map((navItem, index) => {
                return <li key={index}>
                    <Button
                        id={navItem.navHeading}
                        key={navItem.id}
                        aria-controls={open ? navItem.navHeading : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        {navItem.navHeading}
                    </Button>
                    <Menu
                        id={navItem.navHeading}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': navItem.navHeading,
                        }}
                    >
                        {navItem.lvlTwo.map((subNav, index) =>
                            <MenuItem
                                key={index}
                                onClick={handleClose}
                            >
                                <Link href={subNav.link}>
                                    {subNav.subNavHeading}
                                </Link>
                            </MenuItem>
                        )}
                    </Menu>
                </li>
            })}
        </ul> 
        </>
    )
}