import { Button } from "@/components/ui/button";
import Image from "../assets/Profile.jpg" 

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 bg-gradient-to-br from-light to-blue-50"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-2 animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 animate-fade-in animate-delay-100">
              Yaswanth Kumar
            </h1>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-600 mb-6 animate-fade-in animate-delay-200">
              Aspiring Full Stack Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg animate-fade-in animate-delay-300">
              I build responsive, user-friendly web applications with modern
              technologies. Passionate about creating clean, efficient, and
              scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-md"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white text-primary border-primary hover:bg-primary/5"
              >
                <a href="#contact">Contact Me</a>
              </Button>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-md"
              >
                <a href="#projects">Download cv</a>
              </Button>
            </div>
            <div className="flex gap-6 mt-10 animate-fade-in animate-delay-500">
              <a
                href="https://github.com/ghostnumbz"
                className="text-gray-600 hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/yaswanth-kumar-1aa95b248/"
                className="text-gray-600 hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://x.com/ghostnumbz"
                className="text-gray-600 hover:text-primary transition-colors text-xl"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="mailto:kumaryaswanth769@gmail.com"
                className="text-gray-600 hover:text-primary transition-colors text-xl"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src= {Image}
              alt="Yaswanth- Full Stack Developer"
              className="rounded-full w-56 h-56 md:w-80 md:h-80 object-cover border-8 border-white shadow-xl animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
