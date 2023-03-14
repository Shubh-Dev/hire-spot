import React, {useEffect, useState} from "react";
import Header from "./components/Header";
import Job from "./components/Job";
const url = "api/v1/jobs"





function App() {

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getJobs() {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data)
      }
    getJobs()
  }, [])

  const allJobs = jobs.map(item => (
    <Job 
      key={item.id}
      photo={item.photo}
      company={item.company_name}
      title={item.job_title}
      skills={item.skills}
    />
  ))

    return (
      <div>
        {/* <pre>{JSON.stringify(Data, null, 2)}</pre> */}
        <Header />
        {allJobs}
      </div>
    )
       
  }

  export default App;