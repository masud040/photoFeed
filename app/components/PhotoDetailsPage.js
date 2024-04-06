import Image from "next/image";
import { getDictionary } from "../[lang]/dictionaries/dictionaries";
import PhotoAction from "./PhotoAction";
const PhotoDesctailsPage = async ({ lang, id }) => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos/${id}`);
  const photoDetails = await response.json();
  const { title, url, tags, views, share, uploaded, author, likes } =
    photoDetails || {};

  const dict = await getDictionary(lang);

  return (
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
      <div className="col-span-12 p-6 border rounded-xl lg:col-span-4 ">
        <h2 className="mb-2 text-lg font-bold lg:text-2xl">{title}</h2>
        <div className="mb-6 text-xs lg:text-sm text-black/60">
          #{tags.join(" #")}
        </div>

        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">{views}</span>
          </div>

          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">{share}</span>
          </div>

          <div className="flex justify-between">
            <span>{dict.uploadedOn}</span>
            <span className="font-bold">{uploaded}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Image
                className="border rounded-full size-12 lg:size-14"
                src={author.avatar}
                alt="avatar"
                width={700}
                height={700}
              />
              <div className="spacy-y-3">
                <h6 className="font-bold lg:text-lg">{author.name}</h6>
                <p className="text-xs text-black/60 lg:text-sm">
                  {author.followers} {dict.followers}
                </p>
              </div>
            </div>

            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <Image
                src="/follow.svg"
                className="w-5 h-5"
                width={700}
                height={700}
                alt="follow"
              />
              {dict.follow}
            </button>
          </div>

          <p className="text-xs lg:text-sm text-black/60">{author.bio}</p>
        </div>

        <PhotoAction likes={likes} save={dict.save} share={dict.share} />
      </div>
    </div>
  );
};

export default PhotoDesctailsPage;
