
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Users, TrendingUp, Star, ExternalLink } from 'lucide-react';

interface ClientData {
  name: string;
  logo?: string;
  industry: string;
  location: string;
  services: string[];
  description: string;
  year: string;
  teamSize?: string;
  results?: string;
  website?: string;
  testimonial?: string;
  isInternational?: boolean;
}

interface ClientModalProps {
  client: ClientData | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClientModal = ({ client, isOpen, onClose }: ClientModalProps) => {
  if (!client) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4 text-2xl font-bold text-mdm-black font-satoshi">
            {client.logo ? (
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">{client.logo}</span>
              </div>
            ) : (
              <div className="w-12 h-12 bg-mdm-gold rounded-lg flex items-center justify-center">
                <span className="text-mdm-black font-bold text-lg">{client.name.charAt(0)}</span>
              </div>
            )}
            {client.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4 text-mdm-gold" />
              <span className="font-satoshi">{client.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4 text-mdm-gold" />
              <span className="font-satoshi">Since {client.year}</span>
            </div>
            {client.teamSize && (
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-4 h-4 text-mdm-gold" />
                <span className="font-satoshi">{client.teamSize}</span>
              </div>
            )}
            {client.results && (
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp className="w-4 h-4 text-mdm-gold" />
                <span className="font-satoshi">{client.results}</span>
              </div>
            )}
          </div>

          {/* Industry */}
          <Card className="bg-mdm-gold/5 border-mdm-gold/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-mdm-black mb-2 font-satoshi">Industry</h4>
              <p className="text-mdm-dark-gold font-satoshi font-semibold">{client.industry}</p>
            </CardContent>
          </Card>

          {/* Description */}
          <div>
            <h4 className="font-semibold text-mdm-black mb-2 font-satoshi">About</h4>
            <p className="text-gray-600 font-satoshi leading-relaxed">{client.description}</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-mdm-black mb-3 font-satoshi">Services Provided</h4>
            <div className="flex flex-wrap gap-2">
              {client.services.map((service, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-mdm-gold/10 text-mdm-dark-gold text-sm rounded-full font-satoshi font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {client.testimonial && (
            <Card className="bg-gradient-to-r from-mdm-gold/10 to-mdm-dark-gold/10 border-0">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-mdm-gold" />
                  <h4 className="font-semibold text-mdm-black font-satoshi">Client Testimonial</h4>
                </div>
                <p className="text-gray-700 font-satoshi italic">"{client.testimonial}"</p>
              </CardContent>
            </Card>
          )}

          {/* Website Link */}
          {client.website && (
            <div className="flex justify-center pt-4">
              <a
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-mdm-gold text-mdm-black rounded-lg hover:bg-mdm-dark-gold transition-colors font-satoshi font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClientModal;
