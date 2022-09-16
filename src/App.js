import './App.css';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Items from './component/Items'
import {Routes, Route, Link} from 'react-router-dom'
import ItemBox from './component/ItemBox';
import SignUp from "./component/SignUp";
import OrderDetails from './component/OrderDetails';
import OrderPlaced from './component/OrderPlaced';
// import Footer from './component/Footer'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/items' element={<Items/>}/>
      <Route exact path='/items/:id' element={<ItemBox/>}/>
      <Route exact path='/signup' element={<SignUp/>}/>
      <Route exact path='/orderdetails' element={<OrderDetails/>}/>
      <Route exact path='/orderplaced' element={<OrderPlaced/>}/>
    </Routes>
    {/* <Footer/> */}
    </>
  );
}

export default App;
