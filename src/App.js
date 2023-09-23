
import { Routes, Route } from "react-router-dom";
import {Public, Home, Login, MyMusic, Album, ZingChart, Following} from "./containers/public";
import path from "./utils/paths";
import { useEffect } from "react";
import * as actions from './store/actions'
import { useDispatch, useSelector } from "react-redux";



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
  }, [])
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
            <Route path={path.HOME} element={<Home/>}/>
            <Route path={path.LOGIN} element={<Login/>}/>
            <Route path={path.MY_MUSIC} element={<MyMusic/>}/>  
            <Route path={path.ZING_CHART} element={<ZingChart/>}/>
            <Route path={path.FOLLOWING} element={<Following/>}/>    
            <Route path={path.ALBUM__TITLE__ID} element={<Album/>}/>  
            <Route path={path.PLAYLIST__TITLE__ID} element={<Album/>}/>         
        </Route>
      </Routes>
    </div>
        
  );
}


 
export default App;
