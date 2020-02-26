import React ,{useEffect}from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { NavLink, Route } from "react-router-dom";

// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
 
 

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Menu from "@material-ui/icons/Menu";
// import PersonAdd from "@material-ui/icons/PersonAdd";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// import LockOpen from "@material-ui/icons/LockOpen";
// import MonetizationOn from "@material-ui/icons/MonetizationOn";
import PersonIcon from '@material-ui/icons/Person';


// core components
import Button from "components/CustomButtons/Button";

import styles from "assets/jss/material-dashboard-pro-react/components/authNavbarStyle.js";

import CustomDropdown from "../CustomDropdown/CustomDropdown";
import CustomNavbarDropdown from "../CustomDropdown/CustomNavbarDropdown";

const useStyles = makeStyles(styles);

export default function AuthNavbar(props) {
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  }; 
 
    

  const logout=()=>{
      localStorage.removeItem('token') 
      sessionStorage.removeItem('userType') 
      sessionStorage.removeItem("currentUser") ;
      window.location.href = '/';
  }

  
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };
  const classes = useStyles();
  // const {  userType } = props;

  var defaultList = (
    <List>
      <ListItem className={classes.listItem}>
        <NavLink to={"/hakkimizda"} className={classes.navLink}>
          {/* <Dashboard className={classes.listItemIcon} /> */}
          <ListItemText
            primary={"Hakkımızda"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/sss"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/sss")
          })}
        >
          {/* <MonetizationOn className={classes.listItemIcon} /> */}
          <ListItemText
            primary={"Sss"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/blog"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/blog")
          })}
        >
          {/* <PersonAdd className={classes.listItemIcon} /> */}
          <ListItemText
            primary={"Blog"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/nedenVinTakip"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/nedenVinTakip")
          })}
        >
          {/* <Fingerprint className={classes.listItemIcon} /> */}
          <ListItemText
            style={{color: "#ff0000"}}
            primary={"Neden VINTAKIP"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/randevuTalebi"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/randevuTalebi")
          })}
        >
          {/* <Fingerprint className={classes.listItemIcon} /> */}
          <ListItemText
            primary={"Randevu Talebi"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/login"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/login")
          })}
        >
          {/* <LockOpen className={classes.listItemIcon} /> */}
          <ListItemText
            style={{color: "#ff0000"}}
            primary={"login"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
    </List>
  );
  
  var FirmaList = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to={"/map "} className={classes.navLink}>
          <Dashboard className={classes.listItemIcon} />
          <ListItemText
            primary={"FirmaList Harita"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
    </List>
  );
  
  var MerkezList = (
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        <CustomNavbarDropdown
          Icon={PersonIcon} 
          text="Hesabım" 
          dropdownList={[
            <NavLink to={"/bilgilerim"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Bilgilerim "
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,

            <NavLink to={"/createRestoran"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Restoran Oluştur"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
            <NavLink to={"/saveRestoran"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Restoran Kaydet"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
            <NavLink to={"/activeRestoran"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Restoran Aktif Et"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
            <NavLink to={"/inactiveRestoran"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Restoran İnaktif Et"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
            <NavLink to={"/iletisim"} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="İletişim"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
            <NavLink to={"/#"} onClick={logout} className={classes.navLink}>
              <Dashboard className={classes.listItemIcon} />
              <ListItemText
                primary="Çıkış"
                disableTypography={true}
                className={classes.listItemText}
              />
            </NavLink>,
          ]}
        />
      </ListItem>
    </List>

  );

  var list = defaultList;
  // var navbarstyle = classes.white
  //   ("0", 'Kurye'),
  // ("1", 'Restoran'),
  // ("2", 'Firma'),
  // ("3", 'Merkez')
  // if (userType === 1) {
  //   list = RestoranList;
  //   navbarstyle = classes.appBar + " " + classes.whiteShaDow;
  // } else if (userType === 2) {
  //   list = FirmaList;
  //   navbarstyle = classes.appBar + " " + classes.whiteShaDow;
  // } else if (userType === 3) {
  //   list = MerkezList;
  //   navbarstyle = classes.appBar + " " + classes.whiteShaDow;
  // }

  return (
    <AppBar position="absolute" className={classes.container}>
      {/*  className={classes.backgroundUrl} */}
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex} style={{textAlign: "center"}}>
            <a href="/">
              logo
            </a>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="/" className={classes.title} color="transparent">
              <NavLink to={"/"} className={classes.navLink}>
                VINTAKIP 
              </NavLink>
            </Button>
          </div>
        </Hidden>
     
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
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
            onClick={handleDrawerToggle}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <ListItem className={classes.listItem}>
              <NavLink to={"/"} className={classes.navLink}>
                <ListItemText
                  primary={"Anasayfaya Geri Dön"}
                  disableTypography={true}
                  className={classes.listItemText}
                  onClick={handleDrawerToggle}
                />
              </NavLink>
            </ListItem>
            {list}
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

AuthNavbar.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "vinLezzetRed", "vinLezzetYellow", "white"]),
  brandText: PropTypes.string
};
