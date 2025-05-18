import { frontendSkills, backendSkills, databaseSkills, cloudSkills, skillsInProgress, otherSkills } from "@/lib/types";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Frontend Development</h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full progress-bar" 
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Backend Development</h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full progress-bar" 
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Database Systems</h3>
            
            <div className="space-y-6">
              {databaseSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full progress-bar" 
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">Cloud Services & Deployment</h3>
            
            <div className="space-y-6">
              {cloudSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-500 h-2 rounded-full progress-bar" 
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center">
              Skills in Progress 
              <span className="ml-2 text-sm text-red-500 font-normal italic">(Currently Learning)</span>
            </h3>
            
            <div className="space-y-6">
              {skillsInProgress.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full progress-bar" 
                      data-width={`${skill.level}%`}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-heading font-semibold mb-6 text-center">Other Skills & Tools</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <div key={index} className="bg-gray-100 rounded-lg px-4 py-3 flex items-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <i className={`${skill.icon} text-xl text-gray-700 mr-2`}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
