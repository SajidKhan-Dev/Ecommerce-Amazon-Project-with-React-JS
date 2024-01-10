import  store from './app/store'
import './App.css'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Cart from './pages/Cart';


function App() {
  return (
    <>
    <Router>
          <Provider store={store}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
          </Provider>
    </Router>
    </>
  )
}

export default App
