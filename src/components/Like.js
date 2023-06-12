import React, { useState, useEffect } from "react";
import { AiFillLike } from 'react-icons/ai';
import { MdPreview} from 'react-icons/md'

function Like() {

    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(0);

    useEffect(() => {
        // Retrieve the total likes from localStorage when the component mounts
        const storedLikes = localStorage.getItem("totalLikes");
        if (storedLikes) {
            setTotalLikes(parseInt(storedLikes));
        }

        // Check if the user has liked the button before
        const hasLikedButton = localStorage.getItem("hasLikedButton");
        if (hasLikedButton) {
            setHasLiked(true);
        }
    }, []);

    const handleLike = () => {
        if (!hasLiked) {
            // Increment the like count and store it in localStorage
            const updatedLikes = likes + 1;
            setLikes(updatedLikes);
            setTotalLikes((prevTotalLikes) => prevTotalLikes + 1);
            localStorage.setItem("totalLikes", (totalLikes + 1).toString());
            localStorage.setItem("hasLikedButton", "true");
            setHasLiked(true);
        }
    };

    const [viewCount, setViewCount] = useState(0);

    useEffect(() => {
        // Update the view count when the component mounts
        setViewCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>

        
        <div className="bg-[#52280b] flex flex-col items-center justify-center p-8">

            {/* <p className="text-gray-500 mt-2">
        {likes} {likes === 1 ? "like" : "likes"}
      </p> */}

            <p className="text-white text-3xl mb-3">Appreciation</p>

            <button onClick={handleLike}
                className={`w-24 h-24 p-5 rounded-full bg-[#EAB54C] text-white flex items-center justify-center hover:bg-[#c3912d] focus:outline-none focus:bg-blue-600 ${hasLiked ? "cursor-not-allowed opacity-85" : "cursor-pointer"
                    }`}
                disabled={hasLiked}>
                <span class="text-xl"><AiFillLike size={30} /></span>
            </button>

            <p className="text-gray-200 mt-2 text-2xl font-semibold">Services | Coffee</p>

            <div className="flex items-center justify-center">

                <p className="mt-2 p-2 inline-block text-gray-200">
                    <AiFillLike size={20} className="inline-block text-white" /> : {totalLikes}
                </p>

                <p className="mt-2 ml-6 inline-block text-gray-200">
                    <MdPreview size={25} className="inline-block text-white" /> : {viewCount}
                </p>
                <br />
               
            </div>
            <p className="text-gray-300 text-sm mt-2">Published: August 5th 2022</p>
        </div>
        </div>
    );
}

export default Like;
