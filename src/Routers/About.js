import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const About = () => {
    const [text,setText]=useState("")
    const navigate = useNavigate()

    const handleClick =()=>{
       setText(text.toUpperCase())
    }

    const handleOnChange=(e)=>{
       setText(e.target.value)
    }
    function GoBackHandler() {
        navigate(-1)
    }
    return (
        <div className='mx-3'>
            <h4>I am About</h4>
            <button onClick={GoBackHandler} type="button" class="btn btn-outline-primary mt-2">Go back</button>
            <br />
            <label htmlFor="text"><h2 className='mt-3'>Enter Text Here</h2></label>
            <div className="form-floating">
                <textarea value={text}  onChange={handleOnChange} className="form-control my-2" placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"300px"}}></textarea>
                <label for="floatingTextarea2">Comments</label>
            </div>
            <button onClick={handleClick} type="button" class="btn btn-primary">Convert text to Uppercase</button>

        </div>
    )
} 
