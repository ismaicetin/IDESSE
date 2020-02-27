import React, { useState, useContext, useEffect } from 'react';
import { LoginContext } from "../../context/LoginContext" 
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon"; 
import Email from "@material-ui/icons/Email"; 
import GridContainer from "components/Grid/GridContainer.js";
import CardIcon from "components/Card/CardIcon.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import { withRouter } from 'react-router-dom';
import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import loginService from "../../services/login.service"
import { SnackbarProvider, useSnackbar } from 'notistack';
import Alert from '@material-ui/lab/Alert';
// import AuthContext from "../../context/AuthContext"
const useStyles = makeStyles(styles);


function LoginPage(props) {
    const { enqueueSnackbar } = useSnackbar();
    const login = useContext(LoginContext);

    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function () {
        setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorType, setErrorType] = useState("");


    const handleSubmit = async (e) => {
        //  e.preventDefault();b  
        if (username === "") {
            setError(true);
            setErrorType("Kullanıcı Kontrol Ediniz");
        }
        else if (password === "") {
            setError(true);
            setErrorType("Parolanızı Kontrol Ediniz");
        }
        else {
            var sendData = {
                "username": username,
                "password": password
            }
            //enqueueSnackbar('Giriş Yapılmaya Çalışılıyor', { variant: "default", preventDuplicate: true }); 
            loginService.login(sendData).then((data) => {
                if (data.success) {
                    loginService.getUser().then((response) => {
                        if (response.success) {
                            sessionStorage.setItem("login", JSON.stringify(response.data));
                            login.setContext(response.data)
                            window.location.href = '/';
                        }
                        else {
                            enqueueSnackbar(response.errorMsg || "GETUSER ERROR", { variant: "error", preventDuplicate: true });
                        }
                    })
                    //enqueueSnackbar('Giriş Yapıldı', { variant: "success", preventDuplicate: true }); 
                } else {
                    enqueueSnackbar(data.errorMsg || "LOGIN ERROR", { variant: "error", preventDuplicate: true });
                }

                //props.history.push('/'); 
            })


        }
    }

    return (

        <div className={classes.container}>
            <GridContainer justify="center" style={{ marginTop: "30px" }}>

                <GridItem xs={12} sm={6} md={4}>
                    <form>
                        <Card login className={classes[cardAnimaton]}>
                            <CardHeader
                                color="warning"
                                className={classes.cardHoverSSS}
                                stats
                                icon
                            >
                                <CardIcon
                                    className={classes.cardHeaderHover}
                                    color="warning"
                                    style={{
                                        padding: 20,
                                        width: 250,
                                        background: "#7ed0e2",
                                        marginBottom: "20px",
                                    }}
                                >
                                    <div style={{ textAlign: "center", fontSize: 21, fontFamily: "Arial", color: "black" }}>LOGIN</div>
                                </CardIcon>
                            </CardHeader>
                            <CardBody>

                                <CustomInput
                                    labelText="Eposta"
                                    id="email"
                                    value={username}
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Email className={classes.inputAdornmentIcon} />
                                            </InputAdornment>
                                        ),
                                        onChange: (e) => setUsername(e.target.value)
                                    }}
                                //onChange = { (e) => setUsername(e.target.value)}
                                />
                                <CustomInput
                                    labelText="Parola"
                                    id="password"
                                    formControlProps={{
                                        fullWidth: true
                                    }}
                                    inputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <Icon className={classes.inputAdornmentIcon}>
                                                    lock_outline
                                                </Icon>
                                            </InputAdornment>
                                        ),
                                        type: "password",
                                        autoComplete: "off",
                                        onChange: (e) => setPassword(e.target.value)
                                    }}
                                />
                            </CardBody>
                            <CardFooter className={classes.justifyContentCenter}>
                                <Button color="danger" simple size="lg" block onClick={(e) => handleSubmit(e)}>
                                    GİRİŞ
                                </Button>
                                <Button color="danger" simple size="lg" onClick={(e) => window.location.href = '/forgetPassword'}>
                                    ŞİFREMİ Unuttum
                                </Button>
                            </CardFooter>
                            {error && <Alert severity="error">{errorType}</Alert>}
                        </Card>
                    </form>
                </GridItem>
            </GridContainer>
        </div>
    );
}


export default withRouter(LoginPage);

