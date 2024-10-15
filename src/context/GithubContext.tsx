 
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
    createdAt: string,
    body: string,
}

interface GithubProviderProps{
    children: ReactNode;
}

interface GithubContextType{
    profile: Profile;
    searchIssues: (query:string) => Promise<void>;
    issues: Issue[];
    //setProfileId: (id: string) => void;
    //fetchProfile: (id: string) => Promise<void>;
    //createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const GithubContext = createContext({} as GithubContextType);

export function GithubProvider({children}: GithubProviderProps){
     
    const [profile, setProfile] = useState<Profile>({} as Profile);
    const [issues, setIssues] = useState<Issue[]>([]);

    const profileId = "lwkas-gabriel";
    const repo = "github-blog-rocketseat";

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

    async function searchIssues(query: string){
        const url = `search/issues?q=${query}%20repo:lwkas-gabriel/github-blog-rocketseat%20state:open`;
        const params = {
            //q: `${query} repo:${profileId}/${repo}`,
            _sort: 'number',
            _order: 'asc',
        };
        const { data } = await api.get(url, { params });
        //console.log(data);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const issuesList: Issue[] = data.items.map((issue: any) => ({
            number: issue.number,
            title: issue.title,
            linkToRepo: issue.html_url,
            comments: issue.comments,
            createdAt: issue.created_at,
            body: issue.body
        }));
        issuesList.sort((a, b) => a.number - b.number);
        setIssues(issuesList);
        //console.log(issuesList);
    }

    async function fetchAllIssues(){
        const url = `repos/${profileId}/${repo}/issues`;
        const { data } = await api.get(url);
        //console.log('Dados recebidos:', data);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const issuesList: Issue[] = data.map((r: any)=>{
            const { number, title, html_url, comments, created_at, body } = r
            return { number, title, linkToRepo: html_url, comments, createdAt:created_at, body };
        });
        //console.log('Lista de issues:', issuesList);
        issuesList.sort((a, b) => a.number - b.number);
        setIssues(issuesList);
    }

    useEffect(() => {
        fetchProfile(profileId);
        fetchAllIssues();
    }, [profileId]);

    return (
        <GithubContext.Provider value={{
            profile,
            searchIssues,
            issues,
        }}>
            {children}
        </GithubContext.Provider>
    );
}