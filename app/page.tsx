import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (

    <>
      <Navbar />

      <main>
        {/* Hero Section - Minimalist Luxury */}
        <section className="relative w-full overflow-hidden" style={{ height: '80vh', minHeight: '600px' }}>
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/video/onsiteVideo.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10">
              <div className="max-w-4xl mx-auto">
                <p className="text-xs uppercase tracking-[0.3em] text-white/80 mb-8 font-medium">
                  Premium Sportswear Manufacturing
                </p>
                <h1 className="text-5xl md:text-7xl font-light text-white mb-10" style={{ letterSpacing: '-0.02em' }}>
                  Sialkot's Finest Craftsmen
                </h1>
                <p className="text-[15px] md:text-base text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Custom Activewear, Jerseys & Gym Wear manufactured with precision and uncompromising quality
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a href="#contact" className="px-12 py-4 bg-white text-gray-900 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gray-100 transition-all duration-300">
                    Request Quote
                  </a>
                  <a href="#products" className="px-12 py-4 border border-white text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-white hover:text-gray-900 transition-all duration-300">
                    View Products
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Minimalist Luxury */}
        <section id="about" className="section-padding bg-white">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-24 px-4 mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
                Crafting Excellence Since 2020
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-20 items-start">
                <div className="space-y-8">
                  <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                    Based in Sialkot, Pakistan—the global hub of sports manufacturing—Parim Sportswear brings years of expertise in creating premium activewear, custom jerseys, and gym wear for retailers worldwide.
                  </p>
                  <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                    We're a family-run business built on professionalism, quality, and ethical manufacturing. From small boutique orders to large-scale bulk production, we treat every client with the same dedication and attention to detail.
                  </p>
                  <p className="text-gray-500 text-[15px] font-light leading-relaxed">
                    With operations in Sialkot and representation in Sheffield, UK, we bridge the gap between traditional craftsmanship and modern business practices.
                  </p>
                  <div className="pt-4">
                    <a href="#contact" className="inline-block px-12 py-4 bg-gray-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all duration-300">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="border border-gray-900 overflow-hidden">
                  <Image
                    src="/assets/images/siteImg.jpeg"
                    alt="Manufacturing Excellence"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section - Minimalist Luxury */}
        <section id="products" className="section-padding bg-[#fafafa]">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-24 px-4 mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Our Collection</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
                Product Range
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-12">
                {/* Product 1 */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <Image
                      src="/assets/images/mockup_1Img.jpeg"
                      alt="Custom Sports Jerseys"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Custom Sports Jerseys</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Premium quality team jerseys with custom designs and branding</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <Image
                      src="/assets/images/mockup_2Img.jpeg"
                      alt="Varsity Jackets"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Varsity Jackets</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Classic letterman jackets with custom embroidery and patches</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>

                {/* Product 3 */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <Image
                      src="/assets/images/mockup_3img.jpeg"
                      alt="Athletic Tracksuits"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Athletic Tracksuits</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Comfortable and stylish tracksuits for teams and brands</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>

                {/* Product 4 */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <Image
                      src="/assets/images/mockup_4Img.jpeg"
                      alt="Basketball Uniforms"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Basketball Uniforms</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Professional-grade basketball kits with custom numbering</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>

                {/* Product 5 */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <Image
                      src="/assets/images/mockup_5Img.jpeg"
                      alt="Custom Sports Kits"
                      width={500}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Custom Sports Kits</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Complete team kits with matching jerseys and shorts</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>

                {/* Product 6 - Custom Design Card */}
                <div className="group flex flex-col h-full">
                  <div className="overflow-hidden mb-8 border border-gray-900">
                    <div className="h-80 bg-white flex items-center justify-center transition-colors duration-300 group-hover:bg-gray-50">
                      <div className="w-20 h-20 border border-gray-900 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900">
                        <svg className="w-10 h-10 text-gray-900 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-xl font-light text-gray-900 mb-4 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Custom Designs</h3>
                    <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow">Have a unique design? We'll bring it to life with precision manufacturing</p>
                    <a href="#contact" className="inline-block text-xs uppercase tracking-[0.2em] text-gray-900 font-medium hover:text-black transition-colors border-b border-gray-900 pb-1 w-fit">Inquire</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* Why Choose Us Section - Minimalist Luxury */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-24 px-4 mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Why Partner With Us</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
                Excellence in Every Stitch
              </h2>
            </div>

            <div className="flex justify-center w-full">
              <div className="max-w-5xl w-full">
                {/* Features Grid - Clean 2x2 */}
                <div className="grid md:grid-cols-2 gap-x-24 gap-y-24 mx-auto" style={{ width: 'fit-content' }}>
                {/* Feature 1 */}
                <div className="group px-6 py-8 text-center border border-gray-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gray-900 transition-all duration-300 group-hover:bg-gray-900 mb-6">
                      <svg className="w-7 h-7 text-gray-900 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-5 tracking-tight">Premium Quality</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">Uncompromising materials and precision craftsmanship in every piece we manufacture</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group px-6 py-8 text-center border border-gray-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gray-900 transition-all duration-300 group-hover:bg-gray-900 mb-6">
                      <svg className="w-7 h-7 text-gray-900 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-5 tracking-tight">Bespoke Design</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">Your vision realized with meticulous attention to detail and technical expertise</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group px-6 py-8 text-center border border-gray-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gray-900 transition-all duration-300 group-hover:bg-gray-900 mb-6">
                      <svg className="w-7 h-7 text-gray-900 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-5 tracking-tight">Flexible Scale</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">From boutique collections to large-scale production with competitive pricing</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group px-6 py-8 text-center border border-gray-900">
                  <div className="flex flex-col items-center w-full">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center border border-gray-900 transition-all duration-300 group-hover:bg-gray-900 mb-6">
                      <svg className="w-7 h-7 text-gray-900 transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-5 tracking-tight">Global Reach</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">Seamless international delivery with operations in Sialkot and Sheffield</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Editorial Minimalism */}
        <section id="services" className="section-padding bg-[#fafafa]">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-24 px-4 mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Our Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
                Manufacturing Solutions
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">

              {/* Services Grid - Elegant 3-column */}
              <div className="grid md:grid-cols-3 gap-16">
                {/* Service 1 */}
                <div className="group bg-white p-14
                 transition-all duration-500 hover:shadow-lg text-center border border-gray-900">
                  <div className="mb-8 flex justify-center">
                   
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Private Labeling</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                    Elevate your brand with our premium manufacturing. We bring your designs to life with precision and attach your labels to products crafted to perfection.
                  </p>
                  <div className="h-[1px] w-8 bg-gray-900 transition-all duration-300 group-hover:w-16 mx-auto"></div>
                </div>

                {/* Service 2 */}
                <div className="group bg-white p-12 transition-all duration-500 hover:shadow-lg text-center border border-gray-900">
                  <div className="mb-8 flex justify-center">
                    
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Bulk Production</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                    Large-scale manufacturing with unwavering quality standards. From hundreds to thousands of units, we deliver consistency and excellence at competitive rates.
                  </p>
                  <div className="h-[1px] w-8 bg-gray-900 transition-all duration-300 group-hover:w-16 mx-auto"></div>
                </div>

                {/* Service 3 */}
                <div className="group bg-white p-12 transition-all duration-500 hover:shadow-lg text-center border border-gray-900">
                  <div className="mb-8 flex justify-center">
                    
                  </div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Sample Creation</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                    Perfect your product before full production. We develop detailed prototypes and samples to ensure every element meets your exacting standards.
                  </p>
                  <div className="h-[1px] w-8 bg-gray-900 transition-all duration-300 group-hover:w-16 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Minimalist Luxury */}
        <section id="contact" className="section-padding bg-white">
          <div className="container-custom">
            {/* Section Header */}
            <div className="text-center mb-24 px-4 mx-auto">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 font-medium">Get in Touch</p>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-10" style={{ letterSpacing: '-0.02em' }}>
                Start Your Inquiry
              </h2>
            </div>

            <div className="max-w-6xl mx-auto">

              <div className="grid md:grid-cols-2 gap-20">
                {/* Contact Info */}
                <div className="space-y-12">
                  <div className="space-y-10">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">Main Office</p>
                      <p className="text-gray-900 text-[15px] font-light">Sialkot, Punjab, Pakistan</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">UK Office</p>
                      <p className="text-gray-900 text-[15px] font-light">Sheffield, United Kingdom</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">Email</p>
                      <p className="text-gray-900 text-[15px] font-light">info@parimsportswear.com</p>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">WhatsApp</p>
                      <p className="text-gray-900 text-[15px] font-light">+92 XXX XXXXXXX</p>
                    </div>
                  </div>

                  <div>
                    <a
                      href="https://wa.me/92XXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-12 py-4 bg-gray-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="border border-gray-900 p-14">
                  <form className="space-y-8">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Company Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors text-[15px]"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors text-[15px]"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors text-[15px]"
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label htmlFor="product" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Product Interest</label>
                      <select
                        id="product"
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors text-[15px] text-gray-900"
                      >
                        <option>Select product type</option>
                        <option>Custom Jerseys</option>
                        <option>Activewear</option>
                        <option>Gym Wear</option>
                        <option>Varsity Jackets</option>
                        <option>Custom Design</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="quantity" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent transition-colors text-[15px]"
                        placeholder="e.g., 100 units"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 bg-transparent resize-none transition-colors text-[15px]"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full px-12 py-4 bg-gray-900 text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-black transition-all duration-300 mt-6">
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Minimalist Luxury */}
        <footer className="bg-black">
          <div className="container-custom py-24">
            <div className="max-w-6xl mx-auto">
              {/* Main Footer Content */}
              <div className="grid md:grid-cols-4 gap-16 mb-20">
                {/* Brand */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-light text-white mb-6" style={{ letterSpacing: '-0.01em' }}>Parim Sportswear</h3>
                  <p className="text-white/70 text-[15px] font-light leading-relaxed max-w-md">
                    Premium sportswear manufacturing with uncompromising quality and precision craftsmanship
                  </p>
                </div>

                {/* Navigation */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-medium">Navigate</p>
                  <ul className="space-y-4">
                    <li><a href="#about" className="text-white/70 hover:text-white transition-colors text-[15px] font-light">About</a></li>
                    <li><a href="#products" className="text-white/70 hover:text-white transition-colors text-[15px] font-light">Products</a></li>
                    <li><a href="#services" className="text-white/70 hover:text-white transition-colors text-[15px] font-light">Services</a></li>
                    <li><a href="#contact" className="text-white/70 hover:text-white transition-colors text-[15px] font-light">Contact</a></li>
                  </ul>
                </div>

                {/* Locations */}
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-medium">Locations</p>
                  <div className="space-y-4">
                    <p className="text-white/70 text-[15px] font-light">Sialkot, Pakistan</p>
                    <p className="text-white/70 text-[15px] font-light">Sheffield, UK</p>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-white/50 text-xs tracking-wide">
                  © 2026 Parim Sportswear. All rights reserved.
                </p>
                <p className="text-white/50 text-xs tracking-wide">
                  Crafting excellence since 2020
                </p>
              </div>
            </div>
          </div>
        </footer>


      </main >
    </>
  );
}
