import React, { useEffect, useState } from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import { motion } from "framer-motion";
import Button from "../../components/PrimaryButton";
import styles from "./gallery.module.css";

function GalleryPage() {
  const [unityContent, setUnityContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setUnityContent(
      new UnityContent("artGallery/Build.json", "artGallery/UnityLoader.js")
    );
  }, []);
  useEffect(() => {
    unityContent?.on("loaded", () => {
      setIsLoading(false);
    });
  }, [unityContent]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
    >
      <div className={styles.unityContainer}>
        {unityContent != undefined && <Unity unityContent={unityContent} />}
      </div>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className={styles.actions}>
          <Button
            action={() => {
              unityContent.setFullscreen(true);
            }}
            primary
          >
            Ir a pantalla Completa
          </Button>
          <Button href="/">Volver</Button>
        </div>
      )}
    </motion.div>
  );
}

export default GalleryPage;
