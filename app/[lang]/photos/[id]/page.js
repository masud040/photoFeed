import PhotoDescription from "@/app/components/PhotoDescription";
import Image from "next/image";
const PhotoDetails = async ({ params: { lang, id } }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photoDetails = await response.json();

  return (
    <div className="container my-4 lg:my-8">
      <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
        <div className="col-span-12 border lg:col-span-8 rounded-xl">
          <Image
            className="max-w-full h-full max-h-[70vh] mx-auto"
            src={photoDetails.url}
            alt=""
            width={700}
            height={700}
          />
        </div>

        <PhotoDescription details={photoDetails} lang={lang} />
      </div>
    </div>
  );
};

export default PhotoDetails;
