import { Routes, Route } from "react-router-dom";

import TaskPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFound";
import { TaskContextProvider } from "./context/TaskProvider";
import { Helmet } from "react-helmet";
import favicon from "../public/list.png";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Helmet>
        <title>To Do List - React MySQL CRUD</title>
        <link rel="shortcut icon" href={favicon} typo="image/x-icon" />
      </Helmet>
      <div className="bg-zinc-900 h-screen">
        <Navbar />
        <div className="container mx-auto py-4 px-20">
          <TaskContextProvider>
            <Routes>
              <Route path="/" element={<TaskPage />} />
              <Route path="/new" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TaskContextProvider>
        </div>
      </div>
    </>
  );
};

export default App;
