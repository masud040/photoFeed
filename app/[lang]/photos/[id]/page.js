import PhotoDesctailsPage from "@/app/components/PhotoDetailsPage";

const PhotoDetails = async ({ params: { lang, id } }) => {
  return (
    <>
      <PhotoDesctailsPage id={id} lang={lang} />
    </>
  );
};

export default PhotoDetails;
