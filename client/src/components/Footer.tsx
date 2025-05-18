export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-heading font-bold">
              <span className="text-dark">Yaswanth</span><span className="text-primary">Kumar</span>
            </a>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Yaswanth Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
