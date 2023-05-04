import { useState, useEffect } from "react"
import projectsData from "./../projects-data.json"
import { Link } from "react-router-dom"
 
function ProjectsPage(props) {
  const [projects, setProjects] = useState([])
 
  // useEffect() will run only once on the initial render
  // useEffect(() => {
  //   setProjects(projectsData)
  // }, [])

  useEffect(() => {
    setProjects(props.projects)
  }, [props.projects])
 
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="project">
            {/* <h3>{project.name}</h3> */}
            <h3><Link to={`/projects/${project._id}`}>{project.name}</Link></h3>
            <p>{project.technologies}</p>
          </div>
        )
      })}
    </div>
  )
}
 
export default ProjectsPage
