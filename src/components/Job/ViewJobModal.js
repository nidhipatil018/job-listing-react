import React, {useState} from 'react';
import {Box, Button, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, makeStyles } from '@material-ui/core'
import { Close as CloseIcon} from '@material-ui/icons'
import {format} from 'date-fns'


const useStyles = makeStyles((theme) => ({
   info:{
   '& > *': {
   
       margin: '5px'
   },
   },
   skillChip:{
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    fontWeight:600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
   }
}
));



export default (props) => {
   const classes = useStyles();
   
   const closeModal = () => {
    props.closeModal();
 };

   return(
   <Dialog open={!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                     {props.job.title} @ {props.job.companyName}
                     <IconButton  onClick={closeModal}>
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
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Job Type:</Typography> 
                   <Typography varient ="body2">{props.job.type}</Typography>
                </Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Job Location:</Typography> 
                   <Typography varient ="body2">{props.job.location}</Typography>
                </Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Job Type:</Typography> 
                   <Typography varient ="body2">{props.job.type}</Typography>
                </Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Job description:</Typography> 
                   <Typography varient ="body2">{props.job.description}</Typography>
                </Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Company name:</Typography> 
                   <Typography varient ="body2">{props.job.companyName}</Typography>
                </Box>
                <Box className={classes.info}display ="flex">
                   <Typography varient ="caption">Company Website:</Typography> 
                   <Typography varient ="body2">{props.job.companyUrl}</Typography>
                </Box>
                <Box className={classes.info}>
                   <Typography varient ="caption">Skills:</Typography> 
                   <Grid container alignItems = "center">
                       {props.job.skills && 
                       props.job.skills.map((skill) => (
                                 <Grid item key ={skill} className ={classes.skillChip}>
                                 {skill}
                                 </Grid>
                              ))}
                            </Grid>  
                </Box>
            </Box>
            
            
             </DialogContent>
            <DialogActions> 
               <Button variant ="outlined" >Apply</Button>

            </DialogActions>
            </Dialog>
)
   }