import { Link } from 'react-router-dom';
import  logoUrl  from '/Tralis_logo.png';


const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
           <img
            src={logoUrl}
            alt="TRALIS AI Logo"
            className="h-8 w-auto block"
            loading="lazy"
          />
          <span className="font-sora font-semibold text-xl text-foreground">TRALIS AI</span>
      </div>

            <p className="text-text-muted text-sm max-w-md">
              Custom finance dashboards built on your data. Clear metrics, AI insights, and faster decisions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sora font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-text-muted hover:text-primary text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-text-muted hover:text-primary text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text-muted hover:text-primary text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-sora font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-text-muted hover:text-primary text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-text-muted hover:text-primary text-sm transition-colors">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text-muted hover:text-primary text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} TRALIS AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
