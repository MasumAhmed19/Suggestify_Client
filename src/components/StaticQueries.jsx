import { MdSmartphone } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";



const categories = [
  {
    title: 'TECHNOLOGY',
    icon: <MdSmartphone />,
    posts: 1243,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020',
    description: 'Latest gadgets, smartphones, and tech innovations'
  },
  {
    title: 'HOME APPLIANCE',
    icon: <IoHome />    ,
    posts: 856,
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2068',
    description: 'Smart home devices and household appliances'
  },
  {
    title: 'PERSONAL CARE',
    icon: <FaHeart />    ,
    posts: 674,
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=2070',
    description: 'Beauty, health, and wellness products'
  }
];

function StaticQueries() {
  return (
    <div className="container mx-auto  py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 text-center ">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Categories of Interest</h1>
            <p>Discover the latest innovations, cutting-edge gadgets, smartphones, and emerging tech trends. Enhance your living space with smart home devices, modern kitchen tools, and efficient household solutions.</p>
            <div>
                <Link to='/queries' className="btn1">View ALl</Link>
            </div>
        </div>
        <div className="py-8"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-gray-100 rounded-full">
                      {category.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900">{category.title}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{category.posts} posts</span>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaticQueries;