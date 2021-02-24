import React, {useState} from 'react';
import {Box, Button, Typography, Grid, FilledInput ,Select, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, makeStyles, CircularProgress } from '@material-ui/core'
import { Close as CloseIcon} from '@material-ui/icons'
import {format} from 'date-fns'


const useStyles = makeStyles( {
   info:{
   '& > *': {
   
       margin: '5px'
   }
   }
}
)



export default (props) => {
   const classes = useStyles();


   return(
   <Dialog open={!!Object.keys(props.job).length} fullwidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                     {props.job.title} @ {props.job.companyName}
                     <IconButton>
                          <CloseIcon />
                     </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent> 
            <Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Posted on:</Typography> 
                   <Typography varient ="caption">
                   {props.job.postedOn && format(props.job.postedOn, "dd/MM/yyyy HH:MM")}</Typography>
                </Box>
            </Box>
            
            
             </DialogContent>
            <DialogActions> </DialogActions>
            </Dialog>
)
   }