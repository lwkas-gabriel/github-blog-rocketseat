import { useParams } from "react-router-dom"
import { GithubContext, Issue } from "../../context/GithubContext";
import { useContext, useEffect } from "react";
import { GithubMarkdownBody, InfoHeader, IssueBodyContainer, Item, PostContainer, StyledLink } from "./styles";
import { dateTimeToNowFormatter } from "../../utils/formatter";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";

export function Post(){
    const { issueNumber } = useParams();
    const { issues, profile } = useContext(GithubContext);

    const issue: Issue = issues.find((issue: Issue) => issue.number === Number(issueNumber))!;

    useEffect(() => {
        Prism.highlightAll();
    }, [issue.body]);

    return (
        <PostContainer>
            <InfoHeader>
                <div>
                    <StyledLink to="/">{'< '}VOLTAR</StyledLink>
                    <StyledLink to={{pathname: issue.linkToRepo}}>VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></StyledLink>
                </div>
                <h3>{issue.title}</h3>
                <ul>
                    <Item>
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faGithub} />
                        </label>
                        {profile.login}
                    </Item>
                    <Item>
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faGithub} />
                        </label>
                        {dateTimeToNowFormatter(issue.createdAt)}
                    </Item>
                    <Item>
                        <label htmlFor="">
                            <FontAwesomeIcon icon={faGithub} />
                        </label>
                        {issue.comments+' '}Comentários
                    </Item>
                </ul>
            </InfoHeader>

            <IssueBodyContainer>
                <GithubMarkdownBody remarkPlugins={[remarkGfm]}>
                    {issue.body}
                </GithubMarkdownBody>
            </IssueBodyContainer>
        </PostContainer>
    );
}