import { MapPin } from "lucide-react";

interface MapWithMarkerProps {
  src: string;
  title: string;
  address: string;
  className?: string;
}

const MapWithMarker = ({ src, title, address, className = "" }: MapWithMarkerProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="aspect-video bg-muted rounded-lg overflow-hidden">
        <iframe
          src={src}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </div>
      
      {/* Custom marker overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            {/* Marker shadow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black opacity-20 rounded-full animate-pulse"></div>
            
            {/* Marker pin */}
            <div className="relative z-10 text-primary animate-bounce">
              <MapPin className="h-8 w-8 drop-shadow-lg" fill="currentColor" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 p-3 bg-secondary rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Address:</strong> {address}
        </p>
      </div>
    </div>
  );
};

export default MapWithMarker;