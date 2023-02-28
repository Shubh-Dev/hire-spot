import React, { useState, useEffect } from "react";
import Header from "./components/Header";
// import jobs from "./components/data/Data";
// import Job from "./components/Job";
const url = "api/v1/jobs"


function App() {


  const [jobData, setJobData] = useState({})
  //   const allJobs = jobData.map((job) => {
  //     return <Job 
  //       key={job.id}
  //       company={job.company_name}
  //       skills={job.skills}
  //     />
  // })

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setJobData(data))
  }, [0])



    return (
      <div>
        <pre>{JSON.stringify(jobData, null, 2)}</pre>
        {/* <Header />
        {allJobs} */}
      </div>
    )
       
  }

  export default App;