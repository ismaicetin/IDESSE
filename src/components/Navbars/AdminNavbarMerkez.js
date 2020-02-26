import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "@material-ui/icons/Dashboard";

import { withRouter, NavLink } from 'react-router-dom';


import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// material-ui icons
import Menu from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";

//Simple Expansion Panel
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



// core components
import AdminNavbarMerkezLists from "./AdminNavbarMerkezLists";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarStyle.js";

const useStyles = makeStyles(styles);

function AdminNavbarMerkez(props) {
   // const history = useHistory();
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);
   const [openProfile, setOpenProfile] = React.useState(null);
   const [openNotification, setOpenNotification] = React.useState(null);

   const handleDrawerToggle = () => {
      setOpen(!open);
   };

   const handleCloseProfile = () => {
      setOpenProfile(null);
   };
   const handleClickProfile = event => {
      if (openProfile && openProfile.contains(event.target)) {
         setOpenProfile(null);
      } else {
         setOpenProfile(event.currentTarget);
      }
   };

   const logoutProfile = async (e) => {
      localStorage.removeItem('token');
      sessionStorage.removeItem('userType');
      sessionStorage.removeItem("currentUser"); 
      window.location.href = '/';

   }




   const { color, rtlActive, brandText } = props;
   const appBarClasses = cx({
      [" " + classes[color]]: color
   });

   return (
      <AppBar className={classes.appBar + appBarClasses}>
         <Toolbar className={classes.container}>
            {/* <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}
              >
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden> */}

            <div className={classes.flex}>
               {/* Here we create navbar brand, based on route name */}
               <Button href="#" className={classes.title} color="transparent">
                  {brandText}
               </Button>
            </div>

            <div smDown implementation="css" className={classes.menu}>
               <Hidden smDown><AdminNavbarMerkezLists /></Hidden>

               <div className={classes.managerClasses}>
                  <Button color="transparent" justIcon onClick={handleClickProfile} style={{marginRight: "30px"}} >
                    <Dashboard className={classes.listItemIcon} />
                     <span style={{fontSize: "14px"}}>Anasayfa</span>
                  </Button>
                  <Popper
                     open={Boolean(openProfile)}
                     anchorEl={openProfile}
                     transition
                     disablePortal
                     placement="bottom-end"
                  >
                     <Paper className={classes.dropdown}>
                        <ClickAwayListener onClickAway={handleCloseProfile}>
                           <MenuList role="menu">

                              <ExpansionPanel className={classes.panel1aHeader} >
                                 <ExpansionPanelSummary
                                    classes={{ padding: "none" }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                 >
                                    <MenuItem  >Restaurant İşlemleri</MenuItem>
                                 </ExpansionPanelSummary>
                                 <ExpansionPanelDetails className={classes.flexDirectionColumn}>
                                    <MenuItem >
                                       <NavLink to={"/createRestoran"} >
                                          <ListItemText primary={"Restaurant oluştur"} className={classes.listItemText} />
                                       </NavLink>
                                    </MenuItem>
                                    <MenuItem >
                                       <NavLink to={"/saveRestoran"} >
                                          <ListItemText primary={"Restaurant Kaydet"} className={classes.listItemText} />
                                       </NavLink>
                                    </MenuItem>
                                    <MenuItem >
                                       <NavLink to={"/activeRestoran"} >
                                          <ListItemText primary={"Restaurant Aktif Et"} className={classes.listItemText} />
                                       </NavLink>
                                    </MenuItem>
                                    <MenuItem >
                                       <NavLink to={"/inactiveRestoran"} >
                                          <ListItemText primary={"Restaurant İnaktif Et"} className={classes.listItemText} />
                                       </NavLink>
                                    </MenuItem>

                                 </ExpansionPanelDetails>
                              </ExpansionPanel>

                              <Divider light />
                              <MenuItem onClick={logoutProfile} >   Çıkış </MenuItem>
                           </MenuList>
                        </ClickAwayListener>
                     </Paper>
                  </Popper>
               </div>

            </div>
            <Hidden mdUp implementation="css">
               <Button
                  className={classes.appResponsive}
                  color="transparent"
                  justIcon
                  aria-label="open drawer"
                  onClick={handleDrawerToggle}
               >

                  <Menu />
               </Button>
            </Hidden>

            <Hidden mdUp>

               <Drawer
                  variant="temporary"
                  anchor={"right"}
                  open={open}
                  classes={{
                     paper: classes.drawerPaper
                  }}
                  style
                  onClose={handleDrawerToggle}
                  ModalProps={{
                     keepMounted: true // Better open performance on mobile.
                  }}
               >
                  <AdminNavbarMerkezLists />
               </Drawer>
            </Hidden>



         </Toolbar>
      </AppBar>
   );
}

AdminNavbarMerkez.propTypes = {
   color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
   rtlActive: PropTypes.bool,
   brandText: PropTypes.string,
   miniActive: PropTypes.bool,
   handleDrawerToggle: PropTypes.func,
   sidebarMinimize: PropTypes.func
};


export default withRouter(AdminNavbarMerkez);
