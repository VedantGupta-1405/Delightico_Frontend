import { useState, useEffect } from 'react';
import { FaLeaf, FaRecycle, FaHeart, FaStar, FaShoppingBag } from 'react-icons/fa';

export default function About() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50 py-12 px-4 mt-0">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <h1 className={`text-4xl md:text-5xl font-bold text-amber-900 mb-6 transition-all duration-1000 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Your Destination for{' '}
          <span className="text-green-700">Healthy, Eco-Friendly,</span>{' '}
          and Organic Food Products
        </h1>
        
        <div className={`max-w-4xl mx-auto text-lg text-amber-800 leading-relaxed transition-all duration-1000 delay-300 ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="mb-6">
            At Delightco, we are passionate about providing you with the highest quality food products 
            that are not only good for you but also good for the planet. Our e-commerce platform is 
            dedicated to bringing you a diverse selection of healthy, eco-friendly, and organic foods, 
            ensuring that your dietary choices support a sustainable and health-conscious lifestyle.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-full">
                <FaHeart className="text-green-700 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900">Our Mission</h2>
            </div>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              Our mission at Delightco is to make it easier for everyone to access wholesome and 
              eco-conscious food options. We believe that eating well should be a delight, not a compromise.
            </p>
            
            <p className="text-lg text-amber-800 leading-relaxed">
              That's why we meticulously curate our product range to include only the best in organic 
              and sustainable foods, sourced from trusted producers who share our commitment to quality 
              and environmental stewardship.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2 text-amber-800">
                <FaLeaf className="text-green-700" />
                <span className="text-amber-800">100% Organic</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-800">
                <FaRecycle className="text-green-700" />
                <span className="text-amber-800">Eco-Friendly</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-800">
                <FaStar className="text-green-700" />
                <span className="text-amber-800">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2 text-amber-800">
                <FaShoppingBag className="text-green-700" />
                <span className="text-amber-800">Sustainable</span>
              </div>
            </div>
          </div>

          {/* Mission Visual */}
          <div className={`relative transition-all duration-1000 delay-700 ${animated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-amber-50 rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 border border-amber-200">
              <div className="grid grid-cols-2 gap-6">
                {/* Certified Products */}
                <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaLeaf className="text-green-700 text-2xl" />
                  </div>
                  <h3 className="font-bold text-amber-900 mb-2">Certified Products</h3>
                  <p className="text-sm text-amber-700">100% Organic Certified</p>
                </div>

                {/* Product Range */}
                <div className="bg-amber-100 rounded-xl p-6 text-center border border-amber-300">
                  <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaShoppingBag className="text-amber-700 text-2xl" />
                  </div>
                  <h3 className="font-bold text-amber-900 mb-2">PRODUCT</h3>
                  <p className="text-sm text-amber-700">Various Quality Items</p>
                </div>

                {/* Organic Products */}
                <div className="col-span-2 bg-gradient-to-r from-green-600 to-amber-600 rounded-xl p-6 text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Organic Products!</h3>
                  <p className="text-lg">We Deal With Various Quality</p>
                </div>

                {/* Product Examples */}
                <div className="bg-amber-50 rounded-xl p-4 text-center border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Ragi Flour</h4>
                  <div className="w-12 h-12 bg-amber-300 rounded-full mx-auto"></div>
                </div>
                <div className="bg-green-50 rounded-xl p-4 text-center border border-green-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Ragi Middle Mix</h4>
                  <div className="w-12 h-12 bg-green-300 rounded-full mx-auto"></div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full mt-6 bg-gradient-to-r from-green-700 to-amber-700 text-white py-3 rounded-xl font-bold hover:from-green-800 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                START SHOPPING
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '500+', label: 'Organic Products' },
            { number: '50+', label: 'Trusted Farmers' },
            { number: '10K+', label: 'Happy Customers' },
            { number: '100%', label: 'Eco-Friendly' }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-amber-50 rounded-xl shadow-md border border-amber-200 transform hover:scale-105 transition-all duration-500 ${animated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl font-bold text-green-700 mb-2">{stat.number}</div>
              <div className="text-amber-800 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}