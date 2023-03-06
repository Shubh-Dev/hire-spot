const url = "api/v1/jobs"

let jobs = [];

const fetchdata = async() => {
    fetch(url) 
    .then((response) => response.json())
    .then((allData) => {
        return (allData.map((item) => jobs.push(item)))
    })
}

fetchdata();

export default jobs;

























// const jobs = [
//     {
//         id: 1,
//         company: "directShifts",
//         role: "full-stack-developer",
//         skills: "Ruby and React"
//     },

//     {
//         id: 2,
//         company: "addMe",
//         role: "frontend-developer",
//         skills: "React nd Javascript"
//     },

//     {
//         id: 3,
//         company: "dom",
//         role: "back-end-developer",
//         skills: "Node.js"
//     },
// ]

// export default jobs;