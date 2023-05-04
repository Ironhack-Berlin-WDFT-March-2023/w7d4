import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function QueryStringExample(props) {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get("name")
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    navigate(`/example?name=${search}`)
  }

  useEffect(() => {
    if (!name) {
      setProjects(props.projects)
    } else {
      const filteredProjects = props.projects.filter(project => {
        return project.name.toLowerCase().includes(name.toLowerCase())
      })

      setProjects(filteredProjects)
    }
  }, [searchParams])

  return (
    <div>
      <h2>Query String Example</h2>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleSearch}  />
        <button type="submit">Search</button>
      </form>

      {projects.map(project => {
        return (
          <div key={project._id} className="project">
            <h3>{project.name}</h3>
            <p>{project.technologies}</p>
          </div>
        )
      })}
    </div>
  )
}

export default QueryStringExample
