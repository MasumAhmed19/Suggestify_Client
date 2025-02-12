import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdSmartphone } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const iconMap = {
  "Technology": <MdSmartphone className="text-[#7201FF]" />,
  "Home Appliance": <IoHome className="text-[#7201FF]" />,
  "Personal Care": <FaHeart className="text-[#7201FF]" />
};

function StaticQueries() {
  const [categories, setCategories] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios(`${import.meta.env.VITE_API_URL}/query-count`);
        const data = response.data;

        // Map the API data to the required structure
        const mappedCategories = data.map(item => ({
          title: item.cateName.toUpperCase(),
          icon: iconMap[item.cateName] || <MdSmartphone className="text-[#7201FF]" />,
          posts: item.count,
          image: getImageByCategory(item.cateName),
          description: getDescriptionByCategory(item.cateName)
        }));

        setCategories(mappedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Function to get image URL based on category
  const getImageByCategory = (category) => {
    switch (category) {
      case "Technology":
        return "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020";
      case "Home Appliance":
        return "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=2068";
      case "Personal Care":
        return "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&q=80&w=2070";
      default:
        return "https://via.placeholder.com/400"; // Default image if no match
    }
  };

  // Function to get description based on category
  const getDescriptionByCategory = (category) => {
    switch (category) {
      case "Technology":
        return "Latest gadgets, smartphones, and tech innovations";
      case "Home Appliance":
        return "Smart home devices and household appliances";
      case "Personal Care":
        return "Beauty, health, and wellness products";
      default:
        return "Explore the latest in this category";
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-4 text-center">
          <h1 className="heading1 text-gray-900 mb-8 text-center">
            Explore Categories of Interest
          </h1>
          <p className="md:w-2/3 mx-auto">
            Discover the latest innovations, cutting-edge gadgets, smartphones, and emerging tech trends. Enhance your living space with smart home devices, modern kitchen tools, and efficient household solutions.
          </p>
        </div>
        <div className="py-5"></div>
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
                    <div className="p-2 bg-[#F1EBFF] rounded-full">
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
        <div className="flex items-center justify-center pt-8">
          <Link to='/queries' className="btn1">View All</Link>
        </div>
      </div>
    </div>
  );
}

export default StaticQueries;
