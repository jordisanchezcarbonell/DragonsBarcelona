import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Carousel from "../../components/Carousel";

import type { ImageProps } from "../../utils/types";
import data from "../../image_urls.json";
const Home: NextPage = () => {
  const router = useRouter();
  const { photoId } = router.query;
  let index = Number(photoId);

  const dataObject = data.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

  const currentPhotoUrl = dataObject[index];
  return (
    <>
      <Head>
        <title>Barcelona Dragons Photos</title>
      </Head>
      <main className="mx-auto max-w-[1960px] p-4">
        {currentPhotoUrl && (
          <Carousel currentPhoto={currentPhotoUrl} index={index} />
        )}
      </main>
    </>
  );
};

export default Home;
