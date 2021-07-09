import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import data from'./data.json'
 

 
import {
 
  Link
} from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
 
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

 

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});




export default function ClassTables() {
  
  const [seconds, setSeconds] = React.useState(Math.floor(Math.random() * (60 - 30 + 1)) + 30);
  const [seats,setSeats] = React.useState(Math.floor(Math.random()* (15-5+1)+5))
  const [disable, setDisble] = React.useState(0)
 
 


 // generate random seconds between 30 and 60 
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds-1 ), 1000);
    } else {
       alert("time is over")
    }
  
  const classes = useStyles();
  console.log(data)
   
 
  return (
    <div style={{width:"70%", position:"absolute", top:"15%", left:"15%" }}>
    <span style={{position:"absolute", left:"1%", top:"-15%"}} >Time Left : {seconds} </span>
    <div style={{position:"absolute", top:"-15%", marginLeft:"1px"}}>
    <h2 style={{color:"orange"}}  >Claim Your Free Trial Class</h2>
    <h3 style={{marginTop:"94px", marginLeft:"-150px"}} >Class Schedule </h3>
    </div>
    <h4>Free Seats Left:{seats}</h4>
    <Link to="/cart" >
    
     <ShoppingCartOutlinedIcon style={{fontSize:"50px", position:"absolute", top:"-15%", left:"100%"}} /> 
    
    </Link>
   
<TableContainer style={{height:"700px",overflowY:"scroll"}}   component={Paper} >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow  >
            <StyledTableCell>Subject</StyledTableCell>
            <StyledTableCell>Date </StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Availability</StyledTableCell>
            
            <StyledTableCell align="right">  </StyledTableCell>
           </TableRow>
        </TableHead>
        <TableBody>
       
          {data.map((data,id) => (
            <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {data.subject}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {data.date}
              </StyledTableCell>
              <StyledTableCell align="right">{data.time}</StyledTableCell>
              <StyledTableCell align="right">{data.availabilty}</StyledTableCell>
             
              <Button 
              
            
              style={{marginLeft:"90px",marginTop:"10px", backgroundColor:"blue"}}>Book Now</Button>
 
             
             </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
    
  );
}
