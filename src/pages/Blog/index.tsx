
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BlogContainer, Profile, ProfileHeader, ProfileInfo } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding } from "@fortawesome/free-regular-svg-icons/faBuilding";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

export function Blog(){
    return (
        <BlogContainer>
            <Profile>
                <img src="https://github.com/lwkas-gabriel.png" alt="" />
                <ProfileInfo>
                    <ProfileHeader>
                        <h3>Lucas Gabriel Correia Barros</h3>
                        <a href="">GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                    </ProfileHeader>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta sint id assumenda possimus, veniam totam enim aspernatur praesentium minima!</p>
                    <ul>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faGithub} />
                            </label>
                            lwkas-gabriel
                        </li>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faBuilding} />
                            </label>
                            Rocketseat
                        </li>
                        <li>
                            <label htmlFor="">
                                <FontAwesomeIcon icon={faUserGroup} />
                            </label>
                            51 seguidores
                        </li>
                    </ul>
                </ProfileInfo>
            </Profile>

        </BlogContainer>
    );
}