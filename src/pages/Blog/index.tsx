
import { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import { BlogContainer, Post, PostHeader, PostList,PostText,SearchForm } from "./styles"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding } from "@fortawesome/free-regular-svg-icons/faBuilding";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

import { dateTimeToNowFormatter } from "../../utils/formatter";
import { Profile, ProfileInfo, ProfileHeader } from "./styles";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const searchFormSchema = z.object({
    query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function Blog(){
    const { profile, issues, searchIssues } = useContext(GithubContext);
    const { handleSubmit, register } = useForm<SearchFormInput>({
        resolver: zodResolver(searchFormSchema),
    });

    function handleSearchIssues(data: SearchFormInput){
        console.log(1);
        searchIssues(data.query);
    }

    return (
        <BlogContainer>
            <Profile>
                <img src={profile.avatarUrl} alt="" />
                <ProfileInfo>
                    <ProfileHeader>
                        <h3>{profile.name}</h3>
                        <a href={profile.profileUrl}>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </ProfileHeader>
                    <p>{profile.bio}</p>
                    <ul>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faGithub} />
                            </label>
                            {profile.login}
                        </li>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faBuilding} />
                            </label>
                            {profile.company}
                        </li>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </label>
                            {profile.followers} seguidores
                        </li>
                    </ul>
                </ProfileInfo>
            </Profile>

            <SearchForm action="" onSubmit={handleSubmit(handleSearchIssues)}>
                <div>
                    <h4>Publicações</h4>
                    <label htmlFor="">{issues.length} Publicações</label>
                </div>
                <input type="text" placeholder="Buscar Conteúdo" {...register('query')} />
            </SearchForm>

            <PostList>
                {
                    issues.map((issue) => {
                        return (
                            <Post to={"post/"+issue.number} key={issue.number}>
                                <PostHeader>
                                    <h3>{issue.title}</h3>
                                    <span>{dateTimeToNowFormatter(issue.createdAt)}</span>
                                </PostHeader>
                                <PostText>{issue.body}</PostText>
                            </Post>
                        );
                    })
                }
            </PostList>

        </BlogContainer>
    );
}