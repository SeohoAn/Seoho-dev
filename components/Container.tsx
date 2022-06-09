import Head from "next/head";
import Nav from "./Nav";
import metadata from "../data/metadata";

const Container = (props : any) => {
        const meta = {
            title: metadata.title,
            description: metadata.info,
            author: metadata.author,
            ...props.customMeta,
        };

    return (
        <div className={`w-full flex flex-col items-center p-3`}>
            <Head>
                <title>{meta.title}</title>
                <meta content={meta.info} name="description" />
                <meta property="og:site_name" content={meta.author} />
            </Head>
            <header
                className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}
            >
                <Nav />
                <div className={`flex flex-row items-center`}>
                    <img
                        src={`/diary.jpg`}
                        alt="로고"
                        width={40}
                        height={40}
                        className={`rounded-full`}
                    />
                </div>
            </header>
            <main className={`w-full max-w-3xl`}>{props.children}</main>
        </div>
    );
};

export default Container;