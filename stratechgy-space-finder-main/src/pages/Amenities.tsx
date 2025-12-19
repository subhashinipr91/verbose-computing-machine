import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Wifi,
  Zap,
  Wind,
  Shield,
  Car,
  Coffee,
  Printer,
  Users,
  Phone,
  Clock,
  Sparkles,
  Building,
  X,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Amenities = () => {
  const { toast } = useToast();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });
  // Added state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (location.hash === "#contact") {
      const element = document.getElementById("contact");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  // Updated handleSubmit function to use Web3Forms API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.location || !formData.message) {
      toast({
        title: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare form data for Web3Forms
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "e827c0c5-2cd7-4c3f-ae5f-6d4cf1f046ce");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("location", formData.location);
      formDataToSend.append("message", formData.message);
      
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          location: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const amenities = [
    { icon: Wifi, name: "High-Speed WiFi", description: "100 Mbps dedicated internet" },
    { icon: Zap, name: "Power Backup", description: "Uninterrupted power supply" },
    { icon: Wind, name: "Air Conditioning", description: "Climate controlled spaces" },
    { icon: Shield, name: "24/7 Security", description: "CCTV and access control" },
    { icon: Car, name: "Parking", description: "Two-wheeler & car parking" },
    { icon: Printer, name: "Printing", description: "Print, scan & copy services" },
    { icon: Users, name: "Meeting Rooms", description: "Bookable conference rooms" },
    { icon: Phone, name: "Phone Booths", description: "Private call spaces" },
    { icon: Clock, name: "Flexible Hours", description: "24/7 access for members" },
    { icon: Sparkles, name: "Housekeeping", description: "Daily cleaning service" },
    { icon: Building, name: "Reception", description: "Professional front desk" },
  ];

  const galleryImages = [
    {
      src: "/IMG20251218144819.jpg",
      alt: "Workcircle Hall Area",
    },
    {
      src: "/IMG20251218144932.jpg",
      alt: "Workcircle Interior Space",
    },
    {
      src: "/hall.webp",
      alt: "Workcircle Hall View",
    },
    {
      src: "/WhatsApp Image 2025-12-19 at 11.56.11 AM (1).jpeg",
      alt: "Workcircle Office Space",
    },
    {
      src: "/WhatsApp Image 2025-12-19 at 11.56.11 AM (2).jpeg",
      alt: "Workcircle Meeting Room",
    },
    {
      src: "/WhatsApp Image 2025-12-19 at 11.56.11 AM.jpeg",
      alt: "Workcircle Workspace",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 section-padding bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Amenities & Contact
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Everything you need for productive work, all under one roof
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            World-Class Amenities
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Our spaces are equipped with everything you need to work efficiently
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <Card
                key={amenity.name}
                className="border-none shadow-none bg-secondary animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-background mb-4">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{amenity.name}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 md:py-24 bg-secondary section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Our Spaces
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Take a virtual tour of our premium co-working spaces
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-foreground hover:text-muted-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 section-padding scroll-mt-20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Ready to find your perfect workspace? Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <Card className="animate-fade-in-up">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Interested Location *</Label>
                      <Select
                        value={formData.location}
                        onValueChange={(value) =>
                          setFormData({ ...formData, location: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="anna-nagar">Anna Nagar (Hourly)</SelectItem>
                          <SelectItem value="velachery">Velachery (Monthly)</SelectItem>
                          <SelectItem value="both">Both Locations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amenities;