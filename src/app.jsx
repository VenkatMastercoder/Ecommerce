import "./index.css";
import ReactDOM from "react-dom/client";

// Default Import
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routes";

const appRouter = createBrowserRouter([...routes]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
