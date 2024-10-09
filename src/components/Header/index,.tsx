import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Profile, ProfileHeader, ProfileInfo } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faBuilding } from "@fortawesome/free-regular-svg-icons/faBuilding";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons/faUserGroup";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { GithubContext } from '../../context/GithubContext';
import { useContext } from 'react';


export function Header(){
    const { profile } = useContext(GithubContext);

    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <h1>GITHUB BLOG</h1>

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
        </HeaderContainer>
    );
}