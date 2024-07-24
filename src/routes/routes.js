import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import TodoList from "../components/todoList/Todo-list";
import Example from "../components/Example";
import Counters from "../components/counters/Counters";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <h1>Page Not Found</h1>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "todo",
                element: <TodoList />,
            },
            {
                path: "example",
                element: <Example />,
            },
            {
                path: "counters",
                element: <Counters />,
            }
        ],
    },
]);

export default router;