import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

function CommentItem({ comment }) {
  const { username, userImage, text } = comment;
  return (
    <div className="flex w-full mx-auto space-x-2 md:space-x-5 lg:max-w-4xl">
      <img
        src={userImage}
        alt="user photo"
        className="object-cover rounded-full md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
      />
      <div className="flex-grow">
        <div className="relative flex items-center justify-between px-3 py-3 z-2 md:px-12 rounded-2xl bg-primary">
          <span className="text-lg text-white md:text-2xl">{username}</span>
        </div>
        <div className="relative px-3 py-3 pb-8 pt-14 -mt-7 comment-shadow md:px-12 rounded-2xl -z-10">
          hi
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
