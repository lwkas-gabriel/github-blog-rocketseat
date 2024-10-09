
import { BlogContainer, Post, PostHeader, PostList,PostText,SearchForm } from "./styles";
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
                    <PostText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum alias atque sunt delectus reiciendis, fugit dolor, at quia ducimus voluptate molestiae debitis iste rem. Temporibus, nam voluptas necessitatibus vel quod, voluptatem numquam repellat natus dignissimos sapiente tenetur veritatis? Culpa perspiciatis minima distinctio at porro sint voluptas laboriosam ullam libero! Placeat expedita nemo tenetur labore obcaecati consectetur laboriosam ipsum cumque qui enim distinctio recusandae, possimus, est nam praesentium tempora esse ducimus similique minus fuga mollitia, aspernatur consequuntur quam quas? Dicta incidunt et inventore, provident cumque nobis accusamus saepe delectus fugiat consequuntur eos autem praesentium repellat eius nam! In, explicabo laboriosam!</PostText>
                </Post>

            </PostList>

        </BlogContainer>
    );
}