import Image from "next/image";
const PhotoAction = ({ likes }) => {
  return (
    <div className="mt-6">
      <div className="flex items-stretch gap-3">
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
          <Image
            src="/heart.svg"
            className="w-5 h-5"
            width={700}
            height={700}
            alt="heart"
          />
          {likes}
        </button>
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
          <Image
            src="/save.svg"
            className="w-5 h-5"
            width={700}
            height={700}
            alt="save"
          />
          Save
        </button>
        <button className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
          <Image
            src="/share.svg"
            className="w-5 h-5"
            width={700}
            height={700}
            alt="share
                "
          />
          Share
        </button>
      </div>
    </div>
  );
};

export default PhotoAction;
