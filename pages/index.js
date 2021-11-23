import React, { useState, useEffect } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import Head from "next/head";

export default function Home() {
  const [unityContent, setUnityContent] = useState(null);
  useEffect(() => {
    setUnityContent(new UnityContent("artGallery/Build.json", "artGallery/UnityLoader.js"));
  }, []);

  return (
    <>
      <Head>
        <title>Gallery Art</title>
        <meta name="description" content="Gallery Art" />
      </Head>
      <div>
        {unityContent != undefined && <Unity unityContent={unityContent} />}
      </div>
    </>
  );
}
