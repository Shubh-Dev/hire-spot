import React, { useState } from "react";
import Header from "./components/Header";
// import jobs from "./components/data/Data";
// import Job from "./components/Job";


function App() {


  const [jobData, setJobData] = useState({})
  //   const allJobs = jobData.map((job) => {
  //     return <Job 
  //       key={job.id}
  //       company={job.company_name}
  //       skills={job.skills}
  //     />
  // })

  fetch("api/v1/jobs")
   .then(res => res.json())
   .then(data => setJobData(data))

    return (
      <div>
        <pre>{JSON.stringify(jobData, null, 2)}</pre>
        {/* <Header />
        {allJobs} */}
      </div>
    )
       
  }

  export default App;