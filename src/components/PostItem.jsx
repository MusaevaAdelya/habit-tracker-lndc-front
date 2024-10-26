import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftEllipsisIcon, HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/outline";


function PostItem({ post }) {
  const {
    picture,
    name,
    postImage,
    postDescription,
    commentsQty,
    likesQty,
    dislikesQty,
  } = post;

  return (
    <div className="flex w-full mx-auto space-x-2 md:space-x-5 lg:max-w-4xl">
      <img
        src={picture}
        alt="user photo"
        className="object-cover rounded-full md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
      />
      <div className="flex-grow">
        <div className="relative flex items-center justify-between px-3 py-3 z-2 md:px-12 rounded-2xl bg-primary">
          <span className="text-lg text-white md:text-2xl">{name}</span>
          <ExclamationTriangleIcon
            className="h-6 text-white md:h-10"
            stroke="white"
          />
        </div>
        <div className="relative px-3 py-3 pt-16 pb-8 -mt-7 bg-tertiary md:px-12 rounded-2xl -z-10">
          <img
            src={postImage}
            alt="post image"
            className="w-full rounded-2xl"
          />
          <p className="py-5 mt-3 text-lg lg:text-xl">{postDescription}</p>
          <div className="flex text-lg md:text-xl justify-evenly">
            <div className="flex items-center space-x-2 ">
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 md:h-10" />
              <span>{commentsQty}</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <HandThumbUpIcon className="h-6 md:h-10" />
              <span>{likesQty}</span>
            </div>

            <div className="flex items-center space-x-2 ">
              <HandThumbDownIcon className="h-6 md:h-10" />
              <span>{dislikesQty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
