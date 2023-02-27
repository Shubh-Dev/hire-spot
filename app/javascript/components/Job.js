import React from "react";
import { TextField } from "@material-ui/core";


const Job = (props) => {
    return (
        <div key={props.key}>
            <h3>{props.company}</h3>
            <h4>{props.role}</h4>
            <h4>{props.skills}</h4>
        </div>
    )

}

export default Job;