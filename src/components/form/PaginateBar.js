import React, { useContext } from 'react';
import FormContext from '../form/store/form-context';
import classes from "./css/PaginateBar.module.css";

function PaginateBar() {
  const {setCurrentPage, page, numOfPages, validate, validation} = useContext(FormContext);
  const buttonEl = [];
  
  for(let i=1; i<=numOfPages;i++) {
    buttonEl.push(<button key={i} className={`${classes.circularButton} ${i<=page?classes.visited:''}`} onClick={()=>setCurrentPage(i)} disabled={(i===numOfPages && validate(validation)===false) ? true: false}>{i}</button>)
  }

  
  return (
    <div className={classes.outerContainer}>
      <div className={classes.buttonContainer}>
        {buttonEl}
      </div>
      <progress className={classes.progressBar} max={100} value={page===1?'10':page===2?'21':page===3?'33':page===4?'44':page===5?'56':page===6?'67':page===7?'79':page===8?'90':'100'}/>
    </div>
  )
}

export default PaginateBar