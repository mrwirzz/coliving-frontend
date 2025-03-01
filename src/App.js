import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div  className="font-sans" style={{ backgroundColor: "rgba(247, 216, 184, 0.84)" }}>
      <AppRouter />
    </div>
  );
}

export default App;
