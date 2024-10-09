
import { useContext } from "react";
import { GithubContext } from "../../context/GithubContext";
import { BlogContainer, Post, PostHeader, PostList,PostText,SearchForm } from "./styles";
import { dateTimeToNowFormatter } from "../../utils/formatter";
export function Blog(){
    const { issues } = useContext(GithubContext);

    return (
        <BlogContainer>
            <SearchForm action="">
                <div>
                    <h4>Publicações</h4>
                    <label htmlFor="">{issues.length} Publicações</label>
                </div>
                <input type="text" placeholder="Buscar Conteúdo" />
            </SearchForm>

            <PostList>
                {
                    issues.map((issue) => {
                        return (
                            <Post key={issue.number}>
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