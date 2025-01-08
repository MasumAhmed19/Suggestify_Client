import { FaBullseye, FaHeart, FaGlobe, FaUsers } from 'react-icons/fa';

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
      <Icon className="w-8 h-8 text-gray-700" />
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
      {/* Hero Section */}
      <div 
        className="h-[700px] container mx-auto bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://i.ibb.co.com/1qvx2f3/bgimg3.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">We Are Innovators</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Dedicated to creating meaningful solutions that transform businesses and enrich lives.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard 
              icon={FaBullseye} 
              title="Excellence" 
              description="We strive for excellence in everything we do, setting high standards and consistently delivering quality." 
            />
            <ValueCard 
              icon={FaHeart} 
              title="Passion" 
              description="Our passion drives innovation and fuels our commitment to creating impactful solutions." 
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
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Leadership Team</h2>
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
