import { getDictionary } from "../[lang]/dictionaries/dictionaries";
import AuthorDetails from "./AuthorDetails";
import PhotoAction from "./PhotoAction";
const PhotoDescription = async ({ details, lang }) => {
  const { title, url, tags, views, share, uploaded, author, likes } =
    details || {};

  const dict = await getDictionary(lang);

  return (
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

      <AuthorDetails
        author={author}
        followType={dict.follow}
        followersType={dict.followers}
      />

      <PhotoAction likes={likes} />
    </div>
  );
};

export default PhotoDescription;
