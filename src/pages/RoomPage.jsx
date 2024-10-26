import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useParams to get the room ID
import { ChevronLeftIcon, SparklesIcon } from "@heroicons/react/24/solid";
import API from "../api";
import CalendarDays from "../components/CalendarDays";
import PostItem from "../components/PostItem";
import FloatingActionButton from "../components/FloatingActionButton";

function RoomPage() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the room ID from the URL
  const [room, setRoom] = useState(null);
  const [posts, setPosts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const  [goal, setGoal] = useState(null);
  const  [name, setName] = useState(null);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const token = localStorage.getItem('accessToken'); // Get the access token
        setLoading(true);


        // Fetch room posts
        const postsResponse = await API.get(`/room/${id}/posts/?page=1&pageSize=10`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the headers
          },
        });

        // Ensure posts are set correctly, fallback to an empty array if needed
        setPosts(postsResponse.data.data.posts || []);
        setGoal(postsResponse.data.data.goal || "");
        setName(postsResponse.data.data.name || "");
        setLoading(false);
      } catch (err) {
        const errorMessage = err.response?.data?.error?.message || "Failed to fetch room data.";
        setError(errorMessage);
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
      <main className="min-h-screen px-2 py-10 md:px-10">
        <FloatingActionButton />
        <div className="flex items-center">
          <ChevronLeftIcon
              className="h-10 cursor-pointer"
              onClick={() => navigate(-1)}
          />
          <h1 className="flex-grow mb-6 text-2xl font-semibold text-center md:text-3xl">
            {name? name : "Room"}
          </h1>
        </div>
        <div className="flex flex-col items-center mb-10 space-y-2 text-xl max-w-[320px] md:max-w-full mx-auto text-center">
          <div className="flex ">
            <SparklesIcon className="mr-2 h-7" fill="#9B5DE5" />
            <p>
              <span className="font-semibold text-primary">Goal:</span> {goal? goal : "No specific goal"}
            </p>
          </div>
        </div>
        <div className="space-y-6 md:space-y-10">
          {Array.isArray(posts) && posts.map((post) => (
              <PostItem
                  key={post.id}
                  post={{
                    picture: post.user.image || "/images/default-user.png",
                    name: post.user.username,
                    postImage: post.media[0] || "/images/default-post.png",
                    postDescription: post.content,
                    commentsQty: post.comments || 0,
                    report: post.report,
                  }}
              />
          ))}
        </div>
      </main>
  );
}

export default RoomPage;
