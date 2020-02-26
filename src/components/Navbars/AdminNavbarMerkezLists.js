import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import axios from 'axios';
import { API_BASE_URL } from "assets/jss/material-dashboard-pro-react";
import { withRouter,useHistory, NavLink } from 'react-router-dom';


// import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
 

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import Popper from "@material-ui/core/Popper";
import Divider from "@material-ui/core/Divider";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-pro-react/components/adminNavbarLinksStyle.js";

const useStyles = makeStyles(styles);

function HeaderLinks(props) {
    const [openNotification, setOpenNotification] = React.useState(null);
    const handleClickNotification = event => {
        if (openNotification && openNotification.contains(event.target)) {
            setOpenNotification(null);
        } else {
            setOpenNotification(event.currentTarget);
        }
    };
    const handleCloseNotification = () => {
        setOpenNotification(null);
    };
    const [openProfile, setOpenProfile] = React.useState(null);
    const handleClickProfile = event => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    const logoutProfile = async (e) => {
        localStorage.clear();
        window.location.href = '/';

    };


    const classes = useStyles();
    const { rtlActive } = props;



    const managerClasses = classNames({
        [classes.managerClasses]: true
    });

    var list = (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
      </ListItem>
      
        </List>
    );
    return (
        <div className={classes.menu}>
            <div className={managerClasses}>
                 {list}
            </div>
        </div>
    );
}

HeaderLinks.propTypes = {
    rtlActive: PropTypes.bool
};

export default withRouter(HeaderLinks);
