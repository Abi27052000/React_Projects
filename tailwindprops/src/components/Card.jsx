import React from 'react'

function Card({userName,post = "unknown"}) {
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, aut?
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky">
        {userName}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    
    
    </div>
  )
}

export default Card