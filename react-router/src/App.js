import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import projectsData from "./projects-data.json"
import ProjectsPage from "./pages/ProjectsPage"
import ErrorPage from "./pages/ErrorPage"
import ProjectDetailsPage from "./pages/ProjectDetailsPage"
import QueryStringExample from "./pages/QueryStringExample"

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}
 
export default App
