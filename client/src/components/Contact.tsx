export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out through my contact information below.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="fas fa-map-marker-alt text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-medium">Location</h4>
                <p className="text-gray-600 mt-1">San Francisco, California, USA</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="fas fa-envelope text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-medium">Email</h4>
                <p className="text-gray-600 mt-1">john@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="fas fa-phone-alt text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-medium">Phone</h4>
                <p className="text-gray-600 mt-1">(123) 456-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <i className="far fa-clock text-primary"></i>
              </div>
              <div>
                <h4 className="font-heading font-medium">Working Hours</h4>
                <p className="text-gray-600 mt-1">Monday - Friday: 9 AM to 5 PM PST</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h4 className="font-heading font-medium mb-4">Connect With Me</h4>
            <div className="flex justify-center space-x-6">
              <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white transition-colors p-4 rounded-full">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white transition-colors p-4 rounded-full">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white transition-colors p-4 rounded-full">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="bg-gray-200 hover:bg-primary hover:text-white transition-colors p-4 rounded-full">
                <i className="fab fa-dribbble text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
