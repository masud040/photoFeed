import PhoroDetailsModal from "@/app/components/Modal";
import PhotoDesctailsPage from "@/app/components/PhotoDetailsPage";
const PhotoModal = ({ params: { lang, id } }) => {
  return (
    <>
      <PhoroDetailsModal>
        <PhotoDesctailsPage lang={lang} id={id} />
      </PhoroDetailsModal>
    </>
  );
};

export default PhotoModal;
