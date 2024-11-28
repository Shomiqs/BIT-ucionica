import React from 'react'

const SinglePostPage = () => {
  return (
    <>
    <div className="single-post-page">
        <h1>Single Post Page!</h1>
        <div className="single-post-wrapper">
        {DATA.map((sPost) => {
            return (
              <div className="single-post-card">
                
              </div>
            );
          })}
        </div>
    </div>
    </>
  )
}

export default SinglePostPage;