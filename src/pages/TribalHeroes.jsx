import React from 'react'

const TribalHeroes = () => {
  // Define your heroes data here. 
  // You can replace the placeholder images with imports from your assets folder.
  const heroes = [
    {
      id: 1,
      name: 'Birsa Munda',
      title: 'Freedom Fighter & Folk Hero',
      description: 'A tribal freedom fighter and religious leader who belonged to the Munda tribe. He spearheaded a tribal religious millenarian movement that arose in the Bengal Presidency.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', 
    },
    {
      id: 2,
      name: 'Rani Gaidinliu',
      title: 'Spiritual & Political Leader',
      description: 'A Naga spiritual and political leader who led a revolt against British rule in India. She is widely acknowledged as a prominent freedom fighter.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      name: 'Sidhu and Kanhu Murmu',
      title: 'Leaders of Santhal Rebellion',
      description: 'Brothers who led the Santhal rebellion (1855–1856) against the British colonial authority and the corrupt zamindari system in eastern India.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    },
    // Add more heroes here...
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Heroes of the Tribal People</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honoring the brave souls who fought for their land, culture, and freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {heroes.map((hero) => (
            <div key={hero.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="h-72 overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{hero.name}</h2>
                <p className="text-indigo-600 font-medium mb-4">{hero.title}</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {hero.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TribalHeroes