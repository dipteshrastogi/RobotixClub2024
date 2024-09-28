import React from 'react'
import { useState,useEffect } from 'react';
import { getAllPosts } from '../api/postApi';
import PostCard from '../components/PostCard';



export default function Post() {
  const [recentPosts,setRecentPost] = useState(null);
  // const [showMore,setShowMore] = useState(true);
  
  useEffect(() => {
    getAllPosts()
        .then((response) => setRecentPost(response.data))
        .catch((error) => console.log(error));
    
        recentPosts.slice(0,5);
  }, []);

  // const handleShowMore = async () => { }


  return (
    <>
      <main className='p-3 flex flex-col min-h-screen max-w-7x items-center mx-auto'>
          <div className='text-5xl justify-center items-center'>
            <div className='flex justify-center items-center'>POSTS</div>
            <div className="flex flex-wrap mt-5 max-w-7xl">
              {
                recentPosts && recentPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))
              }
            </div>
            {/* {showMore && (
            <button onClick ={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>Show More</button>
          )
          } */}
          </div>
      </main>
    </>
  )
}

// TODO:
//   1. Show More Functionality