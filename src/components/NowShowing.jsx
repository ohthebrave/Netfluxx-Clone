import React from 'react'

function NowShowing() {
  return (
    <div className='featured'>
        <h2>Title</h2>
        <div class="featured__buttons">
          <button class="button__play"><i class="fas fa-play"></i>Play</button>
          <button>My List</button>
        </div>
        <div class="featured__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique
          magna magna, vit...
        </div>
    </div>
  )
}

export default NowShowing