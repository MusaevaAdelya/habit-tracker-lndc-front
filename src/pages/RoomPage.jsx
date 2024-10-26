import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useNavigate } from "react-router-dom";
import { SparklesIcon } from "@heroicons/react/16/solid";
import CalendarDays from "../components/CalendarDays";
import PostItem from "../components/PostItem";
import FloatingActionButton from "../components/FloatingActionButton";
import CreatePostModal from "../components/CreatePostModal";
import StreakModal from "../components/StreakModal";
import { useState } from "react";

function RoomPage() {
  const navigate = useNavigate();
  const posts = [
    {
      picture: "/images/user-image-1.png",
      name: "Peter Parker",
      postImage: "/images/post-image-1.jfif",
      postDescription: "Hello, guys! Finished my workout this morning! ",
      commentsQty: 10,
      likesQty: 4,
      dislikesQty: 4,
    },
    {
      picture: "/images/user-image-2.jfif",
      name: "Anna Jane",
      postImage: "/images/post-image-2.png",
      postDescription: "Hello, guys! Finished my workout this morning! ",
      commentsQty: 10,
      likesQty: 4,
      dislikesQty: 4,
    },
  ];

  const [openCreatePost, setOpenCreatePost] = useState(false);
  const [openStreakModal, setOpenStreakModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSubButtonClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setOpenCreatePost(true);
    }
  };

  const handleCreatePost = () => {
    // Close the CreatePostModal and open the StreakModal
    setOpenCreatePost(false);
    setOpenStreakModal(true);
  };

  return (
    <main className="min-h-screen px-2 py-10 md:px-10">
      <input
        type="file"
        accept="image/*"
        id="imageInput"
        className="hidden"
        onChange={handleImageChange}
      />
      <FloatingActionButton onSubButtonClick={handleSubButtonClick} />
      <CreatePostModal
        open={openCreatePost}
        setOpen={setOpenCreatePost}
        postImage={selectedImage}
        onCreate={handleCreatePost}
      />
      <StreakModal open={openStreakModal} setOpen={setOpenStreakModal} />
      <div className="flex items-center">
        <ChevronLeftIcon
          className="h-10 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="flex-grow mb-6 text-2xl font-semibold text-center md:text-3xl">
          Weight Warriors
        </h1>
      </div>
      <div className="flex flex-col items-center mb-10 space-y-2 text-xl max-w-[320px] md:max-w-full mx-auto text-center">
        <p>
          <span className="font-semibold text-primary">Owner:</span>John Smith
        </p>
        <div className="flex ">
          <SparklesIcon className="mr-2 h-7" fill="#9B5DE5" />
          <p>
            <span className="font-semibold text-primary">Goal:</span> Strength
            training and endurance building
          </p>
        </div>
      </div>
      <div className="space-y-6 md:space-y-10">
        {posts.map((post, index) => (
          <PostItem key={index} post={post} />
        ))}
      </div>
    </main>
  );
}

export default RoomPage;
