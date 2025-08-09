import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Clock, Truck } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", interest: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or email us directly at shanmc510@gmail.com",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interest || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Ready to Create Your Custom Piece?
          </h2>
          <p className="text-xl text-soft-black/80">
            Contact us to begin your sustainable luxury journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-semibold text-charcoal">Get In Touch</h3>
              <p className="text-soft-black/80 leading-relaxed">
                We'd love to create something beautiful for you. Reach out for custom orders, 
                sizing consultations, or any questions about our sustainable practices.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earthy text-cream rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Email</p>
                  <a href="mailto:shanmc510@gmail.com" className="text-earthy hover:underline">
                    shanmc510@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earthy text-cream rounded-lg flex items-center justify-center">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Response Time</p>
                  <p className="text-soft-black/80">Within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-earthy text-cream rounded-lg flex items-center justify-center">
                  <Truck size={20} />
                </div>
                <div>
                  <p className="font-medium text-charcoal">Production Time</p>
                  <p className="text-soft-black/80">2-3 weeks for custom pieces</p>
                </div>
              </div>
            </div>
            
            <div className="bg-cream p-6 rounded-lg">
              <h4 className="font-playfair text-lg font-semibold text-charcoal mb-3">
                What to Include in Your Message:
              </h4>
              <ul className="space-y-2 text-soft-black/80">
                <li>• Preferred dress style and size range</li>
                <li>• Timeline for your order</li>
                <li>• Any customization preferences</li>
                <li>• Questions about our process</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-charcoal p-8 rounded-lg text-cream">
            <h3 className="font-playfair text-2xl font-semibold mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg focus:outline-none focus:border-earthy text-cream placeholder-cream/60"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg focus:outline-none focus:border-earthy text-cream placeholder-cream/60"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="interest" className="block text-sm font-medium mb-2">
                  Interest
                </Label>
                <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                  <SelectTrigger className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg focus:outline-none focus:border-earthy text-cream">
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Custom Dress Order">Custom Dress Order</SelectItem>
                    <SelectItem value="Sizing Consultation">Sizing Consultation</SelectItem>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Wholesale Partnership">Wholesale Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-cream/10 border border-cream/20 rounded-lg focus:outline-none focus:border-earthy text-cream placeholder-cream/60"
                  placeholder="Tell us about your vision..."
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-earthy text-cream py-3 px-6 rounded-lg font-medium hover:bg-earthy/90 transition-colors duration-200 disabled:opacity-50"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
