import { Link, useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-max section-padding py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tight text-foreground">
              Workcircle
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium co-working spaces in Chennai. Flexible solutions for modern professionals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/locations')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/amenities')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                >
                  Amenities
                </button>
              </li>
            </ul>
          </div>

          {/* Anna Nagar */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Anna Nagar</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>2nd Floor, Shivananth Building, X-41, 2nd Ave, next to Ayyappan Temple, X Block, Tower Park, Anna Nagar, Chennai, Tamil Nadu 600040</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 93449 59599</span>
              </li>
            </ul>
          </div>

          {/* Velachery */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Velachery</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>1st Floor, PSK Booshanam Mahal, 127, Velachery Bypass Rd, Velachery, Chennai, Tamil Nadu 600042</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+91 93449 59599</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Workcircle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;