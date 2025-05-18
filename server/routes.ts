import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // In a real app, you would save this to a database or send an email
      console.log('Contact form submission:', validatedData);
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: 'Thank you for your message. I will get back to you soon!' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        console.error('Error processing contact form:', error);
        res.status(500).json({ 
          success: false, 
          message: 'An unexpected error occurred'
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
