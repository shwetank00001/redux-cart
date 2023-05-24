import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import Nav from './components/Nav'

import { Provider } from "react-redux";
import store from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Provider>

    </div>
  );
}

export default App;
