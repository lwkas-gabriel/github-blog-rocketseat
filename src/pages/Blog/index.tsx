
import { BlogContainer, Post, PostHeader, PostList,SearchForm } from "./styles";
export function Blog(){
    return (
        <BlogContainer>
            <SearchForm action="">
                <div>
                    <h4>Publicações</h4>
                    <label htmlFor="">6 Publicações</label>
                </div>
                <input type="text" placeholder="Buscar Conteúdo" />
            </SearchForm>

            <PostList>
                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>

                <Post>
                    <PostHeader>
                        <h3>Lorem, ipsum dolor.</h3>
                        <span>Há 1 dia</span>
                    </PostHeader>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam id mollitia eveniet magnam voluptatibus iste dignissimos tenetur iure tempore quo? Commodi, perspiciatis eum quos sequi aut minima odit! Voluptatum, ut!</p>
                </Post>
            </PostList>

        </BlogContainer>
    );
}