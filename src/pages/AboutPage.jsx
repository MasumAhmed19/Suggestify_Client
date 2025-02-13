import { FaBullseye, FaHeart, FaGlobe, FaUsers } from 'react-icons/fa';
import Herov2 from './HomePage/Herov2';
import Herov3 from './AboutPage/Herov3';
import OurTeam from './AboutPage/OurTeam';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-6 bg-[#7201FF] rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-white " />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMemberCard = ({ image, name, role }) => (
  <div className="text-center">
    <div className="mb-4">
      <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Herov3 />

      {/* <OurTeam /> */}


      {/* Values Section */}
      <div className="py-20 px-4 g1">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading1 text-center mb-16">Our Core <span className="text-[#7201FF]">Values</span></h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard 
              icon={FaBullseye} 
              title="Our Mission" 
              description="Our mission is to empower you to make informed purchasing decisions with confidence. We strive to save you time, effort, and money by doing the research for you." 
            />
            <ValueCard 
              icon={FaHeart} 
              title="Our Vision" 
              description="To become your go-to platform for all your product recommendation needs, helping you find the perfect products for your lifestyle." 
            />
            <ValueCard 
              icon={FaGlobe} 
              title="Global Impact" 
              description="We think globally while acting locally, creating solutions that make a difference worldwide." 
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className=" py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading1 text-center mb-16">Our Leadership <span className="text-[#7201FF]">Team</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              name: "Sarah Johnson",
              role: "CEO & Founder",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=776"
            }, {
              name: "Michael Chen",
              role: "CTO",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=770"
            }, {
              name: "Emily Rodriguez",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=761"
            }].map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
