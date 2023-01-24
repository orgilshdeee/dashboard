import { Route, Routes } from "react-router-dom";
import Aside from "./components/Aside";
import Header from "./components/Header";
import {
  Dashboard,
  Moderators,
  Orders,
  Products,
  Settings,
  Users,
} from "./pages";
import { asideMenu, products } from "./util/data";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", height: "90vh" }}>
        <Aside asideMenu={asideMenu} />
        <div style={{ width: "80vw", background: "#E0E0E0" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/moderator" element={<Moderators />} />
            <Route path="/orders" element={<Orders />} />
            <Route
              path="/products"
              element={<Products products={products} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
