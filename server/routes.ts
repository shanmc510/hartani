import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log the message and simulate email sending
      console.log("Contact form submission:", {
        to: "shanmc510@gmail.com",
        from: validatedData.email,
        subject: `New Contact Form Submission: ${validatedData.interest}`,
        body: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Interest: ${validatedData.interest}
Message: ${validatedData.message}
        `
      });
      
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to send message" });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
