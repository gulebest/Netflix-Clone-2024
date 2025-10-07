import React from 'react'

function Banner() {
  return 
    <div className='banner' style={{backgroundSize:"cover",
        backgroundImage:"",


        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"

    }}>
        <div className='banner_contents'>
<h1 className='banner:title'>
    {movie?.title || movie?.name || movie?.orginal_name}
</h1>
<div className='banner_buttons'>
<button className='banner_button_play'>Play</button>
<button className='banner_button'>My List</button>
</div>
<h1 className='banner_description'>{truncate(movie?.overview,150)}</h1>
        </div>
        <div className='bannerr_fadeBottom'>

        </div>

    </div>
  
}

export default Banner