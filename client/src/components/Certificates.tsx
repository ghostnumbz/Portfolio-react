import { useState } from "react";
import { certificatesData } from "@/lib/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Certificates() {
  // State to manage active tab (default to first category)
  const [activeTab, setActiveTab] = useState(certificatesData[0]?.category || "");

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Certificates & Credentials</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my skills and knowledge in different areas.
          </p>
        </div>

        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full space-y-8"
        >
          {/* Categories as tabs */}
          <div className="flex justify-center">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {certificatesData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <i className={category.icon}></i>
                  <span className="hidden md:inline">{category.category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Display certificates for each category */}
          {certificatesData.map((category) => (
            <TabsContent key={category.category} value={category.category} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.certificates.map((certificate, index) => (
                  <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-2 pt-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-semibold">{certificate.name}</h3>
                          <p className="text-gray-500 flex items-center gap-1 mt-1">
                            <i className="fas fa-award text-amber-500"></i>
                            {certificate.issuer}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs font-normal bg-primary/5 text-primary border-primary/30">
                          {certificate.date}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {certificate.description && (
                        <p className="text-gray-600 text-sm mb-4">{certificate.description}</p>
                      )}
                      <Separator className="my-3" />
                      <div className="flex justify-end">
                        <a 
                          href={certificate.credentialUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary flex items-center text-sm font-medium hover:text-primary/80 transition-colors"
                        >
                          View Credential <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Add a message for an empty category */}
              {category.certificates.length === 0 && (
                <div className="text-center py-10">
                  <p className="text-gray-500">No certificates in this category yet.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}