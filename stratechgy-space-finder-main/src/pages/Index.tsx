import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Wifi,
  Building,
  Users,
  Zap,
  Shield,
  Clock,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const highlights = [
    { icon: Building, title: "Fully Furnished", description: "Ready-to-use workspaces" },
    { icon: Wifi, title: "High-Speed Wi-Fi", description: "Seamless connectivity" },
    { icon: Users, title: "Meeting Rooms", description: "Professional spaces" },
    { icon: Zap, title: "Power Backup", description: "Uninterrupted work" },
    { icon: Shield, title: "24/7 Security", description: "Safe environment" },
    { icon: Clock, title: "Flexible Hours", description: "Work on your schedule" },
  ];

  const faqs = [
    {
      question: "What's the difference between Anna Nagar and Velachery?",
      answer: "Anna Nagar offers hourly coworking desks perfect for freelancers and short meetings. Velachery provides monthly office rentals ideal for startups and teams needing dedicated space.",
    },
    {
      question: "Do I need to book in advance?",
      answer: "For Anna Nagar hourly desks, we recommend booking at least 24 hours in advance. For Velachery monthly offices, please schedule a visit to discuss your requirements.",
    },
    {
      question: "What amenities are included?",
      answer: "All locations include high-speed WiFi, air conditioning, power backup, housekeeping, and access to common areas. Meeting rooms are available at both locations.",
    },
    {
      question: "Is there parking available?",
      answer: "Yes, both locations have dedicated parking spaces for members. Two-wheeler and four-wheeler parking is available.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Flexible Coworking Spaces in Chennai
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Hourly desks in Anna Nagar. Monthly offices in Velachery.
              <br className="hidden sm:block" />
              Premium workspaces designed for modern professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg">
                <Link to="/locations#anna-nagar">
                  Book Anna Nagar (Hourly)
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/locations#velachery">
                  Enquire Velachery (Monthly)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 md:py-24 bg-secondary section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Workcircle?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for productive work in one place
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="border-none shadow-none bg-background animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Locations
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Two strategic locations to serve your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Anna Nagar Card */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Anna Nagar</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Hourly Coworking
                </h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for freelancers, remote workers, and quick meetings.
                  Book by the hour and pay only for what you use.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Flexible hourly pricing</li>
                  <li>• Plug & play desks</li>
                  <li>• Meeting room access</li>
                </ul>
                <Button asChild className="group-hover:translate-x-1 transition-transform">
                  <Link to="/locations#anna-nagar">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Velachery Card */}
            <Card className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-primary mb-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">Velachery</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Monthly Office Rental
                </h3>
                <p className="text-muted-foreground mb-6">
                  Ideal for startups and growing teams. Get your own
                  dedicated office space with all amenities included.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li>• Dedicated office space</li>
                  <li>• Monthly rental plans</li>
                  <li>• Custom seating arrangements</li>
                </ul>
                <Button asChild variant="outline" className="group-hover:translate-x-1 transition-transform">
                  <Link to="/locations#velachery">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary section-padding">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Quick answers to common questions
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-lg px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 section-padding">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Find the perfect workspace for your needs. Book a tour or enquire about our spaces today.
            </p>
            <Button asChild size="lg">
              <Link to="/amenities#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;