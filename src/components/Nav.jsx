import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCiudad } from '../redux/actions';
import styles from './nav.module.css';

function Nav() {

    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    function handleOnChange(e){
        setInput(e.target.value)
    }

    function handleOnSubmit(){
        dispatch(getCiudad(input))
        setInput("")
    }

    function  handleKeyPress (event) {
        if(event.key === 'Enter'){
            dispatch(getCiudad(input))
            setInput("")
        }
    }

  return (
        <div className={styles.container}>
            <input className={styles.input} type="text" value={input} onChange={handleOnChange}  onKeyPress={handleKeyPress}/>
            <button className={styles.btn} onClick={handleOnSubmit}>Buscar</button>
        </div>
  )
}

export default Nav;
