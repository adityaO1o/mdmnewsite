
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, X } from 'lucide-react';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationPopup = ({ isOpen, onClose }: ConsultationPopupProps) => {
  const phoneNumber = "+918700954700";
  const whatsappNumber = "+918700954700";

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
    onClose();
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your consultation services. Could you please provide more information?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-mdm-black font-satoshi mb-2">
            Free Consultation
          </DialogTitle>
          <p className="text-center text-gray-600 font-satoshi">
            Choose your preferred way to connect with us
          </p>
        </DialogHeader>
        
        <div className="space-y-4 pt-4">
          <Button
            onClick={handleCall}
            className="w-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-satoshi font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            size="lg"
          >
            <Phone className="w-5 h-5" />
            Call Now
            <span className="text-sm opacity-90">{phoneNumber}</span>
          </Button>

          <Button
            onClick={handleWhatsApp}
            className="w-full bg-gradient-to-r from-mdm-gold to-mdm-dark-gold hover:from-mdm-dark-gold hover:to-mdm-gold text-mdm-black font-satoshi font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            size="lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Button>

          <div className="text-center pt-2">
            <p className="text-sm text-gray-500 font-satoshi">
              Available Monday - Saturday, 9 AM - 6 PM IST
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationPopup;
