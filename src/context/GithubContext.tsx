import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface Profile{
    name: string,
    avatarUrl: string,
    profileUrl: string,
    bio: string,
    company: string,
    login: string,
    location: string,
    followers: number,
}

export interface Issue{
    number: number,
    title: string,
    linkToRepo: string,
    comments: number,
    login: string,
    createdAt: string,
    body: string,
}

interface GithubProviderProps{
    children: ReactNode;
}

interface GithubContextType{
    profile: Profile;
    searchIssues: (query?:string) => void;
    issues: Issue[];
    //setProfileId: (id: string) => void;
    //fetchProfile: (id: string) => Promise<void>;
    //createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({children}: GithubProviderProps){
     
    const [profile, setProfile] = useState<Profile>({} as Profile);
    const [issues, setIssues] = useState<Issue[]>([]);
     
    //const [profileId, setProfileId] = useState('');

    const profileId = "lwkas-gabriel";
    const repo = "github-blog-rocketseat";
    //q=${texto}%20repo:${username}/${repo}

    async function fetchProfile(profileId: string){
        const { data } = await api.get(`users/${profileId}`);

        const {
            name,
            avatar_url,
            html_url,
            bio,
            company,
            login,
            location,
            followers
          } = data;

        setProfile({name, avatarUrl: avatar_url, profileUrl: html_url, bio, company, login, location, followers});
        //console.log(profile);
    }

    async function fetchIssues(){
        const { data } = await api.get(`/search/issues?q=%20repo:${profileId}/${repo}`, {
            params:{
                _sort: 'created_at',
                _order: 'desc',
            }
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const issuesList: Issue[] = data.items.map((r: any)=>{
            const {number, title, html_url, comments, login, created_at, body} = r
            return {number, title, linkToRepo: html_url, comments, login, createdAt:created_at, body};
        });
        setIssues(issuesList);
        console.log(issuesList);
    }

    async function searchIssues(texto?: string){
        const response = await api.get(`/search/issues?q=${texto}%20repo:${profileId}/${repo}`, {
            params:{
                _sort: 'created_at',
                _order: 'desc',
                q: texto,
            }
        });
        console.log(response.data);
    }

    useEffect(() => {
        fetchProfile(profileId);
        fetchIssues();
    }, [profileId]);

    return (
        <GithubContext.Provider value={{
            profile,
            searchIssues,
            issues,
            //setProfileId,
        }}>
            {children}
        </GithubContext.Provider>
    );
}