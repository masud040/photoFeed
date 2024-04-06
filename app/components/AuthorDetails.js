import Image from "next/image";
const AuthorDetails = ({ author, followType, followersType }) => {
  const { name, followers, bio, avatar } = author || {};
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <Image
            className="border rounded-full size-12 lg:size-14"
            src={avatar}
            alt="avatar"
            width={700}
            height={700}
          />
          <div className="spacy-y-3">
            <h6 className="font-bold lg:text-lg">{name}</h6>
            <p className="text-xs text-black/60 lg:text-sm">
              {followers} {followersType}
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
          {followType}
        </button>
      </div>

      <p className="text-xs lg:text-sm text-black/60">{bio}</p>
    </div>
  );
};

export default AuthorDetails;
