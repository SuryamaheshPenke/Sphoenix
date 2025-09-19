import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ScrollToTop />
      
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They are widely used to make websites work more efficiently and to provide 
                information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
              <p>Sphoenix uses cookies for several purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functionality Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Performance Cookies:</strong> Improve website speed and functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground">Session Cookies</h3>
                  <p>These are temporary cookies that remain in your browser until you leave the website.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Persistent Cookies</h3>
                  <p>These remain in your browser for a set period or until you delete them.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Third-Party Cookies</h3>
                  <p>These are set by third-party services we use, such as analytics providers.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
              <p>
                You can control and manage cookies in various ways. Most browsers allow you to refuse cookies 
                or delete cookies. The methods for doing so vary from browser to browser. Please note that 
                if you choose to block cookies, some features of our website may not work properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. Any changes will be posted on this page 
                with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at{' '}
                <a href="mailto:info@sphoenixit.com" className="text-primary hover:underline">
                  info@sphoenixit.com
                </a>
              </p>
            </section>

            <p className="text-sm text-foreground/60 mt-8">
              Last updated: January 2020
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;