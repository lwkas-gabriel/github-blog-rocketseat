import { useParams } from "react-router-dom"
// import { GithubContext } from "../../context/GithubContext";
// import { useContext } from "react";

export function Post(){
    const { issueNumber } = useParams();
    //const { getIssue } = useContext(GithubContext);

    return (
        <div>
            <h1>{issueNumber}</h1>
        </div>
    );
}