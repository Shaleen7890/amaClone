import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './Login.css'
import { createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth';
import {auth,signInWithGoogle } from './firebase'
import { useStateValue } from './StateProvider';

function Login() {      
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    // const [{basket,user},dispatch]=useStateValue();
    const [user,setUser]= useState({});

    onAuthStateChanged(auth,(currentUser)=>setUser(currentUser))
    const handleChange=async(e)=>{
        e.preventDefault();
        try{
            const user=await signInWithEmailAndPassword(auth,email,password);
            navigate('/')
        }catch (err){console.log(err.message)}
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const user=await createUserWithEmailAndPassword(auth,email,password);
            navigate('/')
        }catch (err){console.log(err.message)}
    }
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login-logo' src='https://wallpaperaccess.com/full/1383586.jpg'/>
            </Link>
            <div className='login-container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit' onClick={handleChange} className='login-signInbutton'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon fake clone's condition of Use & sale.Please see our policy Notice, our cookies notice and our Interest-based ads Notice.</p>
                <button type='submit' onClick={handleSubmit} className='login-registerbutton'>Create your Account</button>
            </div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
}

export default Login