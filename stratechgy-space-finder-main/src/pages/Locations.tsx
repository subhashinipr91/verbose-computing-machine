import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Users,
  Briefcase,
  Building,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapWithMarker from "@/components/MapWithMarker";

const Locations = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  const annaNagarFeatures = [
    "Flexible hourly pricing",
    "Plug & play workstations",
    "High-speed WiFi",
    "Meeting room access",
    "Air conditioning",
    "Power backup",
    "Housekeeping",
    "Tea & coffee",
  ];

  const velacheryFeatures = [
    "Dedicated private offices",
    "Custom seating capacity",
    "24/7 access",
    "Receptionist services",
    "Mail handling",
    "Conference room credits",
    "Printing facilities",
    "Fully furnished spaces",
  ];

  // Updated map URLs with specific addresses
  const annaNagarMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5795799999997!2d80.2038952!3d13.0852973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263c13c6f5f1d%3A0x4ca66c632029d576!2s2nd%20Floor%2C%20Shivananth%20Building%2C%20X-41%2C%202nd%20Ave%2C%20next%20to%20Ayyappan%20Temple%2C%20X%20Block%2C%20Tower%20Park%2C%20Anna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600040!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  
  const velacheryMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.0795799999997!2d80.2038952!3d12.9752873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d9e14c59fff%3A0x5a42c0c0f5e3c0c0!2s1st%20Floor%2C%20PSK%20Booshanam%20Mahal%2C%20127%2C%20Velachery%20Bypass%20Rd%2C%20Velachery%2C%20Chennai%2C%20Tamil%20Nadu%20600042!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 section-padding bg-secondary">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Our Locations
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Two strategic locations in Chennai designed for your success
            </p>
          </div>
        </div>
      </section>

      {/* Anna Nagar Section */}
      <section id="anna-nagar" className="py-16 md:py-24 section-padding scroll-mt-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Anna Nagar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Hourly Coworking Space
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Anna Nagar location is perfect for freelancers, remote workers,
                and professionals who need a workspace by the hour. Pay only for what
                you use with our flexible hourly pricing model.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Hourly Booking</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Freelancers & Remote Workers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Short-term Meetings</span>
                </div>
              </div>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Features Included</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {annaNagarFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/amenities#contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/amenities#contact">Book Now</Link>
                </Button>
              </div>
            </div>

            {/* Anna Nagar Map */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <MapWithMarker
                src={annaNagarMapUrl}
                title="Anna Nagar Location"
                address="2nd Floor, Shivananth Building, X-41, 2nd Ave, next to Ayyappan Temple, X Block, Tower Park, Anna Nagar, Chennai, Tamil Nadu 600040"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-padding">
        <div className="container-max">
          <hr className="border-border" />
        </div>
      </div>

      {/* Velachery Section */}
      <section id="velachery" className="py-16 md:py-24 section-padding scroll-mt-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Velachery Map */}
            <div className="order-2 lg:order-1 animate-fade-in-up">
              <MapWithMarker
                src={velacheryMapUrl}
                title="Velachery Location"
                address="1st Floor, PSK Booshanam Mahal, 127, Velachery Bypass Rd, Velachery, Chennai, Tamil Nadu 600042"
              />
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 text-primary mb-4">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Velachery</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Monthly Office Rental
              </h2>
              <p className="text-muted-foreground mb-6">
                Our Velachery location offers dedicated office spaces for startups
                and growing teams. Get your own private office with all amenities
                included in a single monthly rental.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>Private Offices</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Teams & Startups</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Briefcase className="h-4 w-4" />
                  <span>Long-term Solutions</span>
                </div>
              </div>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Features Included</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {velacheryFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/amenities#contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/amenities#contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;