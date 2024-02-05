import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from "react-router-dom";
import './RegisterForm.css'
import { FaUser, FaLock} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm, Controller } from 'react-hook-form'



export const RegisterForm = () => {

    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [cPasswordClass, setCPasswordClass] = useState('form-control');
    const [isCPasswordDirty, setIsCPasswordDirty] = useState(false);

    useEffect(() => {
        if (isCPasswordDirty){
            if (password === cPassword){
                setShowErrorMessage(false);
                setCPasswordClass('is-valid')
            } else{
                setShowErrorMessage(true);
                setCPasswordClass('is-invalid')
            }
        }
    }, [cPassword])


    const handleCPassword = (e) =>{
        setCPassword(e.target.value);
        setIsCPasswordDirty(true);
    }

    return (
        <div className='wrapper'>
            <form >
                <h1>Create  account</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon'/>

                </div>
                <div className="input-box">
                    <input type="text" placeholder='Email' required />
                    <MdEmail className='icon'/>

                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' className="form-control" id="password" value={password} onChange={(e) =>{setPassword(e.target.value)}} required />
                    <FaLock className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm password' className={cPasswordClass} id="confirmPassword" value={cPassword} onChange={handleCPassword} required />
                    <FaLock className='icon'/>
                </div>

                <div className="error-msg">
                {showErrorMessage && isCPasswordDirty ? <div> Passwords did not match </div> : ''}
                </div>
                

                <button type="submit" class="reg">Sign Up</button>

                <div className='register-link'>
                    <p>Already have an  Account? <Link to='/'>Login</Link></p>
                </div>
    
            </form>
        </div>
    )
}
