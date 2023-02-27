import React from "react";
import Header from "./components/Header";
import jobs from "./components/data/Data";
import Job from "./components/Job";


function App() {
  console.log(jobs)
    const allJobs = jobs.map((job) => {
      return <Job 
        key={job.id}
        company={job.company}
        role={job.role}
        skills={job.skills}
      />
  })
    return (
      <div>
        <Header />
        {allJobs}
      </div>
    )
       
  }

  export default App;