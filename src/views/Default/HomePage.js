import React, { useState, useEffect, useContext } from 'react';
import productService from "../../services/product.service"
//import { productContext } from "../../context/productContext"
import Button from "@material-ui/core/Button"; 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import Edit from "@material-ui/icons/Edit";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';  
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import { SnackbarProvider, useSnackbar } from 'notistack'; 


function Page(props) { 
    var data = []; 
    var tempPopupData = {};
    const { enqueueSnackbar } = useSnackbar();
    const [open, setOpen] = React.useState(false);
    const [areYouSerrious, setAreYouSerrious] = React.useState(false);
    const [product, setproduct] = useState(data); 
    const [popupData, setPopupData] = useState(tempPopupData); 

   
    var onchangeHandle = (value, id) => e => {
        setPopupData({
            ...popupData,
            [value]: e.target.value
        });

    };
    const updataProduct = (row) => { 
        setPopupData(row)
        setOpen(true);
    };
    const deletePacketAreYouSerious = (packet) => {
        setPopupData(packet);
        setAreYouSerrious(true);
    };  

    







    const handleClickOpenPopup = () => {
        setPopupData(tempPopupData)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAreYouSerrious(false);
    };
    const handleSave = () => {

        productService.add(popupData).then(response => {
            if (response) {

                var newproduct = [...product];
                newproduct.push(response)
                setproduct(newproduct);
                setOpen(false);
            }
        })
    }
    const handleUpdate = () => { 
        productService.update(popupData).then(response => {
            if (response) {

                var updated = product.map(item => {
                    if (item.id === popupData.id) { 
                        return popupData;
                    } else {
                        return item;
                    }
                })
                setproduct(updated);
                setOpen(false);
            }
        })
    }
    function silPacket(row) {
        productService.remove(row).then(response => {
            if (response) {
                var tempPacketler = product.filter((item) => { return item.id != row.id });
                setproduct(tempPacketler);
                enqueueSnackbar(`${row.id} Paket Silindi`, { variant: "success", preventDuplicate: true });
                setAreYouSerrious(false);
            } else {
                enqueueSnackbar('Paket Silinemedi', { variant: "error", preventDuplicate: true });
            }
        })
    };

    useEffect(() => {
        productService.list().then((response) => {
            setproduct(response);
        })
    }, [])







    return (
        <Card style={{
            position: "relative",
            padding: 20,
            paddingBottom: 60,
            height: "100%",
            minHeight: "400px",
            overflowY: "auto",
        }}  >
            <Button variant="outlined" color="primary" onClick={handleClickOpenPopup}>
              <AddIcon></AddIcon>  ÜRÜN EKLE
           </Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"ÜRÜN"}</DialogTitle>
                <DialogContent>
                    <Card >
                        <CardContent>

                            <Grid container spacing={3}>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        onChange={onchangeHandle("Code")}
                                        label="Code"
                                        value={popupData.Code}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        onChange={onchangeHandle("Description")}
                                        label="Description"
                                        value={popupData.Description}
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl variant="filled" style={{ minWidth: "100%" }}>
                                        <InputLabel id="demo-simple-select-label">DURUM   </InputLabel>
                                        <Select
                                            fullWidth
                                            labelId="demo-simple-select-label"
                                            value={popupData.Status}
                                            onChange={onchangeHandle("Status")}
                                        >
                                            <MenuItem value="A">Aktif</MenuItem>
                                            <MenuItem value="I">Pasif</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Çık
                        </Button>
                    {popupData.id ?
                        <Button
                            disabled={!popupData.Code || !popupData.Description || !popupData.Status}
                            onClick={handleUpdate}
                            color="primary"
                            autoFocus
                        > Update
                        </Button> :
                        <Button
                            disabled={!popupData.Code || !popupData.Description || !popupData.Status}
                            onClick={handleSave}
                            color="primary"
                            autoFocus>
                            Ekle
                        </Button> 
                    }
                  


                </DialogActions>
            </Dialog>

            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell align="right">Code</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">#</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {product.map(row => (
                        <TableRow>
                            <TableCell component="th" scope="row"> {row.id} </TableCell>
                            <TableCell align="right">{row.Code}</TableCell>
                            <TableCell align="right">{row.Description}</TableCell>
                            <TableCell align="right">{row.Status}</TableCell>
                            <TableCell align="right">
                                <Fab color="primary" aria-label="edit"
                                    style={{ height: "37px", width: "37px" }}
                                    onClick={() => updataProduct(row)}>
                                    <Edit />
                                </Fab>
                                <Fab color="secondary" aria-label="edit"
                                    style={{ height: "37px", width: "37px" }}
                                    onClick={() => deletePacketAreYouSerious(row)}>
                                    <CancelIcon />
                                </Fab>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>




            <Dialog
                open={areYouSerrious}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{"ÜRÜN Silme"}</DialogTitle>
                <DialogContent>
                    Ürün silindikten sonra işlem geri alınamaz!! <br />
                    Silmek istediginize emin misiniz.
                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary"> Hayır  </Button>
                    <Button onClick={() => silPacket(popupData)} color="secondary"> Evet </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default Page;



