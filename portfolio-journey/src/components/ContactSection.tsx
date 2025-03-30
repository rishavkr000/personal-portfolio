
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll respond as soon as possible.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="section-container">
        <div className="text-center mb-12 space-y-2 animate-fade-in">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <div className="h-1 w-20 bg-primary rounded mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in-left">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to contact me through any of these channels, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    rishavkr000@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+11234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9608571248
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Bangalore, KA</p>
                </div>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Input
                id="subject"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              size="lg" 
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
