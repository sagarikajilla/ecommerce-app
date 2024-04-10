import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../Images/Cart.png'
import {Icon} from 'react-icons-kit'
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
import {auth} from '../Config/Config'
import {useNavigate} from 'react-router-dom'

export const Navbar = ({user,totalProducts,onSearch}) => {

    const history = useNavigate(); 

    

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            history('/login');
        })
    }

    const onSearchItems = (e) => {
        onSearch(e)
    }

    return (
        <div className='navbar'>
            <div className='leftside'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
            
            <input onChange = {onSearchItems} type="search" id="searchInput" name="searchInput" className = 'form-control w-50' placeholder="Search..."></input>
            
            <div className='rightside'>
            

                {!user&&<>
                    <div><Link className='navlink' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink' to="login">LOGIN</Link></div>
                </>} 
        
                {user&&<>
                    <div><Link className='navlink' to="/">{user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink' to="cart">
                            <Icon icon={shoppingCart} size={20}/>
                        </Link>
                        <span className='cart-indicator'>{totalProducts}</span>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                     
                                
            </div>
        </div>

    )
}