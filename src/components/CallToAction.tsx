
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-mdm-black via-mdm-dark-gold to-mdm-black">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-satoshi mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-200 font-satoshi mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your goals with our comprehensive 
            technology, marketing, and media production services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-mdm-gold hover:bg-white text-mdm-black font-satoshi font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-mdm-gold text-mdm-gold hover:bg-mdm-gold hover:text-mdm-black font-satoshi font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
