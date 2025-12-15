import React from 'react'
import jewelary from '../assets/jewelary.jpg'
import handcraft from '../assets/handcraft.jpg'
import festical from '../assets/festical.jpg'
import dance from '../assets/dance.jpg'
import craftmanship from '../assets/craftmanship.png'
import music from '../assets/music.png'
import s1 from '../assets/sldier/img1.png'
import s2 from '../assets/sldier/img2.png'
import s3 from '../assets/sldier/img3.png'

const ImageGallery = () => {
  const images = [
    { src: jewelary, alt: 'Traditional Jewelry' },
    { src: handcraft, alt: 'Handcrafts' },
    { src: festical, alt: 'Festival' },
    { src: dance, alt: 'Tribal Dance' },
    // { src: craftmanship, alt: 'Craftmanship' },
    { src: music, alt: 'Music & Instruments' },
    { src: s1, alt: 'Community 1' },
    { src: s2, alt: 'Community 2' },
    { src: s3, alt: 'Community 3' },
    // { src: sliderImage, alt: 'Portrait' },
    // Unsplash images related to tribal culture, crafts, dance, etc.
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Tribal Woman Portrait' },
    { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'Traditional Festival' },
    { src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', alt: 'Handmade Crafts' },
    { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', alt: 'Tribal Dance Performance' },
    { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Tribal Music Instruments' },
    // { src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80', alt: 'Craftsmanship' },
  ]

  return (
    <div>
      <div className="container mx-auto px-4">
        {/* Pinterest-like masonry using CSS columns */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {images.map((img, idx) => (
            <figure
              key={idx}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden relative group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto block object-cover transition-transform duration-300 ease-out transform group-hover:scale-105"
              />

              <figcaption className="absolute left-2 bottom-2 bg-black/40 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>

        
      </div>
    </div>
  )
}

export default ImageGallery
