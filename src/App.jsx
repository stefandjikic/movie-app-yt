import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
