

import { useState, useEffect } from "react"
import axios from "axios"
import AddProject from "../components/AddProject";
import ProjectCard from "../components/ProjectCard";


export default function ProjectsListPage(){
    
    const [projects, setProjects] = useState()
    const API_URL = "http://localhost:5000";

    useEffect(()=>{
        getAllProjects()
    }, [])


   // ----------  put away in a folder -------
  function getAllProjects() {
        axios
            .get(`${API_URL}/api/projects`)
            .then((response) => setProjects(response.data))
            .catch((error) => console.log(error));
    }
  // ----------  put away in a folder -------
    

    
    return(

        <div className="ProjectListPage">

         <AddProject refreshProjects={getAllProjects} />

            {projects.map((project) => (
             <ProjectCard key={project._id} project= {project} />
        ))}

      </div>

    )
}