import "./App.css";
import { ToastContainer } from "react-toastify";
import PasswordGenerator from "./pages/PasswordGenerator";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <PasswordGenerator />
    </div>
  );
}

export default App;
