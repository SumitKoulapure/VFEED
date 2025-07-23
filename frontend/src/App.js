import logo from './logo.svg';
import { Navbar } from './component/Navbar/Navbar.jsx';
import './App.css';
import { CssBaseline, dividerClasses, ThemeProvider } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import Home from './component/Home/Home.jsx'
import RestaurantDetails from './component/Restaurant/RestaurantDetails.jsx';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile.jsx'
import { CustomerRoute } from './Routers/CustomerRoute';
function App() {
  return (
      <ThemeProvider theme = {darkTheme}>
        <CssBaseline/>


  {/* <Navbar/> */}
        {/* <Home/> */}
        {/* <RestaurantDetails/> */}
        {/* <Cart/> */}
        {/* {<Profile/>} */}
        <CustomerRoute/>
        
      </ThemeProvider>
  );
}

export default App;
