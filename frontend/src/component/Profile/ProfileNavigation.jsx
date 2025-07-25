import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { useMediaQuery } from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Drawer } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';




const menu = [
    {title:"Orders",icon:<ShoppingBagIcon/>},
    {title:"Favorites",icon:<FavoriteIcon/>},
    {title:"Address",icon:<AddReactionIcon/>},
    {title:"Payment",icon:<AccountBalanceWalletIcon/>},
    {title:"Notification",icon:<NotificationsActiveIcon/>},
    {title:"Events",icon:<EventIcon/>},
    {title:"Logout",icon:<LogoutIcon/>}
]




const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen = useMediaQuery('(max-width:100px)');

    const navigate = useNavigate();

    const handleNavigate=(item)=>{
navigate(`/my-profile/${item.title.toLowerCase()}`)
    }



  return (
    <div>
        <Drawer 
        variant={isSmallScreen?"temporary":"permanent"}
        open={isSmallScreen?open: true} 
        onClose={handleClose} 
        anchor='left'
        sx={{zIndex:1}}>
            <div className='w=[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center items-center text-xl gap-8 pt-16'>
{menu.map((item,i)=> (<>
<div onClick={()=>handleNavigate(item)} className='px-5 flex items-center space-x-5 cursor-pointer'>
    {item.icon}
    <span>{item.title}</span>


</div>
{i!== menu.length-1 && <Divider/>}


</>))}
            </div>

        </Drawer>
    </div>
  )
}

export default ProfileNavigation