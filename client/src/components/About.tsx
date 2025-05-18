export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700" 
              alt="John working as a developer" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary/90 text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-lg font-bold">fresher</p>
              <p className="text-sm">just gaining knowledge</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in web development began 3 years ago, and I've been hooked ever since.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in building responsive and user-friendly web applications using modern frameworks and technologies.
              I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
            <p className="text-gray-700 mb-8">
              When I'm not coding, you can find me exploring nature trails, reading tech blogs, or experimenting with new recipes in the kitchen.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold mb-3">Education</h4>
                <p className="text-gray-700 mb-1">B.S. Computer Science</p>
                <p className="text-gray-600 text-sm">University of Technology, 2021</p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-3">Location</h4>
                <p className="text-gray-700 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2 text-primary"></i> San Francisco, California
                </p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-3">Email</h4>
                <p className="text-gray-700 flex items-center">
                  <i className="fas fa-envelope mr-2 text-primary"></i> john@example.com
                </p>
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-3">Interests</h4>
                <p className="text-gray-700">
                  Web Apps, UI/UX, Cloud Computing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
