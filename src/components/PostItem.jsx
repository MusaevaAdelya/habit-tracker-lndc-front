import {
    ChatBubbleOvalLeftEllipsisIcon,
    ExclamationTriangleIcon,
    HandThumbDownIcon,
    HandThumbUpIcon
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { reportPost, votePost } from "../services/userServices";

function PostItem({ post }) {
    const {
        id,
        picture,
        name,
        postImage,
        postDescription,
        commentsQty,
        report,
    } = post;

    // Determine the background color based on report and its status
    const postBackgroundColor = report
        ? report.status
            ? '#ffffff' // Use the background color when status is true
            : '#FFD6D6' // Use a different background color when status is false
        : '#ffffff'; // Default background color if report is null or undefined

    const [reportId, setReportId] = useState(0);

    async function clickreportPost() {
        try {
            await reportPost(id);
        } catch (e) {
            console.log(e);
        }
    }

    async function userVotePost(approved) {
        try {
            await votePost(approved, reportId);
        } catch (e) {
            console.log(e);
        }
    }

    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
        if (disliked) setDisliked(false);

        // Trigger the user vote action
        userVotePost(true);
    };

    const handleDislikeClick = () => {
        setDisliked(!disliked);
        if (liked) setLiked(false);

        // Trigger the user vote action
        userVotePost(false);
    };

    useEffect(() => {
        if (post.report) {
            setReportId(post.report.id);
        }
    }, [post]);

    return (
        <div className="flex w-full mx-auto space-x-2 md:space-x-5 lg:max-w-4xl">
            <img
                src={picture}
                alt="user photo"
                className="object-cover rounded-full md:h-[100px] md:w-[100px] h-[50px] w-[50px]"
            />
            <div className="flex-grow">
                <div
                    className="relative flex items-center justify-between px-3 py-3 z-2 md:px-12 rounded-2xl bg-primary">
                    <span className="text-lg text-white md:text-2xl">{name}</span>
                    <button onClick={clickreportPost} className="focus:outline-none">
                        <ExclamationTriangleIcon
                            className="h-6 text-white md:h-10"
                            stroke="white"
                        />
                    </button>
                </div>
                {/* Conditional background color based on report and its status */}
                <div style={{ backgroundColor: postBackgroundColor }}
                     className={`relative px-3 py-3 pt-16 pb-8 -mt-7 md:px-12 rounded-2xl -z-10`}>
                    <img
                        src={postImage}
                        alt="post image"
                        className="w-full rounded-2xl"
                    />
                    <p className="py-5 mt-3 text-lg lg:text-xl">{postDescription}</p>
                    <div className="flex text-lg md:text-xl justify-evenly">
                        <div className="flex items-center space-x-2">
                            <ChatBubbleOvalLeftEllipsisIcon className="h-6 md:h-10" />
                            <span>{commentsQty}</span>
                        </div>

                        {report ? (
                            <>
                                <div className="flex items-center space-x-2">
                                    <HandThumbUpIcon
                                        className={`h-6 md:h-10 ${liked ? 'text-green-500' : 'text-gray-500'}`} // Apply green if liked
                                    />
                                    <button
                                        className={`px-3 py-1 rounded ${
                                            liked ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                                        } focus:outline-none`}
                                        onClick={handleLikeClick}
                                    >
                                        {report.like}
                                    </button>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <HandThumbDownIcon
                                        className={`h-6 md:h-10 ${disliked ? 'text-green-500' : 'text-gray-500'}`} // Apply green if disliked
                                    />
                                    <button
                                        className={`px-3 py-1 rounded ${
                                            disliked ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'
                                        } focus:outline-none`}
                                        onClick={handleDislikeClick}
                                    >
                                        {report.dislike}
                                    </button>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;
