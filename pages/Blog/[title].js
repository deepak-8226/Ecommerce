import { useRouter } from "next/router";
import style from "../../styles/BlogPost.module.css";

const title = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <>
      <div className={style.container}>
        <main className={style.main}>
          <h1>Title of the page {title} </h1>
          <hr />
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
        </main>
      </div>
    </>
  );
};

export default title;
