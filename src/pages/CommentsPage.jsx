import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import CommentItem from "../components/CommentItem";

function CommentsPage() {
  const navigate = useNavigate();
  const comments = [
    {
      username: "Peter Parker",
      userImage: "/images/user-image-1.png",
      text: "Well, well, well, look who’s being all responsible! Nice job, kid. Just don’t forget, a strong body is important, but a sharp mind wins the game. Keep it up, and maybe someday you'll be half as cool as me.",
    },
    {
      username: "Hulk",
      userImage: "/images/user-image-2.jfif",
      text: "SPORT GOOD. SMASH STRESS. KEEP STRONG, SPIDER-KID. 💪🏋️‍♂️ #HulkApprove #StayStrongLittleSpider",
    },
  ];

  const currentUser = { name: "Adelya", avatar: "/images/user-image-1.png" };

  return (
    <main className="relative min-h-screen px-2 py-10 md:px-10">
      <div className="flex items-center mb-6">
        <ChevronLeftIcon
          className="h-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="flex-grow text-2xl font-semibold text-center md:text-3xl">
          Comments
        </h1>
      </div>

      <div className="mb-20 space-y-6 md:space-y-10">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>

      {/* Form positioned at the bottom */}
      <form className="absolute bottom-0 left-0 right-0 flex items-center w-full p-4 mx-auto mb-10 space-x-2 bg-white border-t border-gray-300 md:space-x-5 lg:max-w-4xl">
        <img
          src={currentUser.avatar}
          alt="user photo"
          className="object-cover rounded-full md:h-[100px] md:w-[100px] h-[50px] w-[50px] search-pannel-shadow"
        />
        <div className="flex-grow">
          <div className="relative flex justify-between px-3 py-3 space-x-6 comment-shadow md:px-12 rounded-2xl">
            <input
              placeholder="Write a comment..."
              className="flex-grow outline-none"
            />
            <button className="px-4 py-2 text-white bg-primary rounded-xl">
              Post
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default CommentsPage;
