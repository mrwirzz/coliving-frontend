import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div  className="font-sans" style={{backgroundColor: "rgba(245, 209, 204, 0.85)"}}>
      <AppRouter />
    </div>
  );
}

export default App;
