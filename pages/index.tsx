import Container from "../components/Container";
import metadata from "../data/metadata";
import RecentPosts from "../components/RecentPosts";

const Home = () => {
    return (
        <Container>
            <div className={`my-5 w-full`}>
                <div className={`relative`}>
                    <img
                        src={`/flower.png`}
                        alt="대표 이미지"
                        width={`100%`}
                        height={45}
                        className={`rounded-3xl`}
                    />
                    <span
                        className={`absolute top-5 left-5 font-extrabold italic text-gray-200 text-5xl md:text-6xl text flex justify-left w-full drop-shadow-lg`}
                    >
            {metadata.title}
          </span>
                    <span
                        className={`absolute top-24 left-6 text-gray-200 text-1xl md:text-2xl text flex justify-left w-full drop-shadow-lg`}
                    >
            {metadata.info}
          </span>
                </div>
                <RecentPosts />
            </div>
        </Container>
    );
};

export default Home;
