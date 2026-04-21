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
                    Based in Sialkot, Pakistan—the global hub of sports manufacturing—Premium Sportswear brings years of expertise in creating premium activewear, custom jerseys, and gym wear for retailers worldwide.
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

        {/* Why Choose Us Section - LAAM/Zara Editorial Style */}
        <section className="py-24 md:py-32 bg-white border-t border-gray-100">
          <div className="container-custom">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
              {/* Left: Sticky Header */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-6 font-medium">The Premium Standard</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight mb-8" style={{ letterSpacing: '-0.02em' }}>
                  Excellence in <br />Every Stitch
                </h2>
                <div className="w-12 h-[1px] bg-gray-900"></div>
              </div>

              {/* Right: Premium List */}
              <div className="lg:w-2/3 space-y-12 md:space-y-16 mt-4 lg:mt-0">
                {/* Feature 1 */}
                <div className="group border-b border-gray-100 pb-12 transition-colors hover:border-gray-900">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                    <span className="text-xs font-medium text-gray-300 w-12 pt-1.5 transition-colors group-hover:text-gray-900">01</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">Premium Quality</h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] font-light max-w-xl transition-colors group-hover:text-gray-700">
                        Uncompromising materials and precision craftsmanship in every piece we manufacture. We source only the finest fabrics to ensure longevity and superior performance for your sportswear.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="group border-b border-gray-100 pb-12 transition-colors hover:border-gray-900">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                    <span className="text-xs font-medium text-gray-300 w-12 pt-1.5 transition-colors group-hover:text-gray-900">02</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">Bespoke Design</h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] font-light max-w-xl transition-colors group-hover:text-gray-700">
                        Your vision realized with meticulous attention to detail and technical expertise. Our pattern masters and designers work closely with you from initial concept sketch to final manufactured product.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="group border-b border-gray-100 pb-12 transition-colors hover:border-gray-900">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                    <span className="text-xs font-medium text-gray-300 w-12 pt-1.5 transition-colors group-hover:text-gray-900">03</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">Flexible Scale</h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] font-light max-w-xl transition-colors group-hover:text-gray-700">
                        From boutique collections to large-scale production with competitive pricing. We adapt our manufacturing lines to your brand's growth, ensuring consistent quality at any volume.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="group pb-4">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-start">
                    <span className="text-xs font-medium text-gray-300 w-12 pt-1.5 transition-colors group-hover:text-gray-900">04</span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-tight">Global Reach</h3>
                      <p className="text-gray-500 leading-relaxed text-[15px] font-light max-w-xl transition-colors group-hover:text-gray-700">
                        Seamless international delivery with operations in Sialkot and Sheffield. Benefit from direct manufacturing costs combined with local European support, communication, and logistics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Monumental Luxury Style */}
        <section id="services" className="py-24 md:py-32 bg-white">
          <div className="container-custom">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400 mb-6 font-medium">What We Do</p>
                <h2 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Manufacturing<br/>Solutions
                </h2>
              </div>
              <div className="max-w-md hidden md:block">
                <p className="text-gray-500 font-light text-[15px] leading-relaxed">
                  Partner with a manufacturer that understands the nuances of premium sportswear. From initial prototype to large-scale retail distribution.
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto space-y-32">
              
              {/* Capability 1 */}
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                <div className="md:w-5/12 order-2 md:order-1">
                  <span className="text-[10px] font-medium text-gray-400 mb-8 block tracking-[0.2em] border-b border-gray-200 pb-4">01</span>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Private Labeling</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] font-light">
                    Elevate your brand with our premium manufacturing. We bring your designs to life with absolute precision and seamlessly integrate your branding, tags, and packaging into products crafted to perfection.
                  </p>
                </div>
                <div className="md:w-7/12 order-1 md:order-2 w-full">
                  <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-100 overflow-hidden">
                    <Image src="/assets/images/siteImg.jpeg" alt="Private Labeling Manufacturing" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Capability 2 */}
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                <div className="md:w-7/12 w-full">
                  <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-100 overflow-hidden">
                    <Image src="/assets/images/mockup_3img.jpeg" alt="Bulk Production" fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-5/12">
                  <span className="text-[10px] font-medium text-gray-400 mb-8 block tracking-[0.2em] border-b border-gray-200 pb-4">02</span>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Bulk Production</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] font-light">
                    Large-scale manufacturing with unwavering quality standards. From hundreds to thousands of units, we deliver consistency, speed, and excellence at highly competitive rates without compromising on detail.
                  </p>
                </div>
              </div>

              {/* Capability 3 */}
              <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
                <div className="md:w-5/12 order-2 md:order-1">
                  <span className="text-[10px] font-medium text-gray-400 mb-8 block tracking-[0.2em] border-b border-gray-200 pb-4">03</span>
                  <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 tracking-tight">Sample Creation</h3>
                  <p className="text-gray-500 leading-relaxed text-[15px] font-light">
                    Perfect your product before committing to full production. We develop highly detailed prototypes and samples to ensure every stitch, fabric choice, and finish meets your exacting standards.
                  </p>
                </div>
                <div className="md:w-7/12 order-1 md:order-2 w-full">
                  <div className="relative h-[400px] lg:h-[600px] w-full bg-gray-100 overflow-hidden">
                    <Image src="/assets/images/mockup_1Img.jpeg" alt="Sample Creation Prototypes" fill className="object-cover" />
                  </div>
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
                      <p className="text-gray-900 text-[15px] font-light">+923466339534</p>
                    </div>
                  </div>

                  <div>
                    <a
                      href="https://wa.me/923466339534"
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
                  <h3 className="text-2xl font-light text-white mb-6" style={{ letterSpacing: '-0.01em' }}>Premium Sportswear</h3>
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
                  © 2026 Premium Sportswear. All rights reserved.
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
