import { styled } from '@/lib/theme';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';

const FooterContainer = styled('footer', {
  backgroundColor: '$text',
  color: '$surface',
  padding: '$12 0 $8',
  marginTop: 'auto',
});

const FooterContent = styled('div', {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 $4',
});

const FooterGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '$8',
  marginBottom: '$8',
  paddingBottom: '$8',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
});

const FooterSection = styled('div', {
  '& h4': {
    fontFamily: '$heading',
    fontSize: '$lg',
    fontWeight: '$semibold',
    marginBottom: '$4',
    color: '$surface',
  },

  '& ul': {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },

  '& li': {
    marginBottom: '$2',
  },

  '& a': {
    color: 'rgba(255, 255, 255, 0.7)',
    textDecoration: 'none',
    fontSize: '$sm',
    transition: 'color $normal',
    display: 'inline-block',

    '&:hover': {
      color: '$surface',
    },
  },
});

const ContactInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  marginBottom: '$2',
  fontSize: '$sm',
  color: 'rgba(255, 255, 255, 0.7)',
});

const SocialLinks = styled('div', {
  display: 'flex',
  gap: '$3',
  marginTop: '$4',
});

const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '$full',
  color: '$surface',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$primary',
    transform: 'translateY(-2px)',
  },
});

const NewsletterSection = styled('div', {
  gridColumn: '1 / -1',
  textAlign: 'center',
  padding: '$6 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  marginBottom: '$8',
});

const NewsletterTitle = styled('h3', {
  fontFamily: '$heading',
  fontSize: '$xl',
  fontWeight: '$semibold',
  marginBottom: '$2',
  color: '$surface',
});

const NewsletterDescription = styled('p', {
  fontSize: '$sm',
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '$4',
  maxWidth: '400px',
  margin: '0 auto $4',
});

const NewsletterForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  maxWidth: '400px',
  margin: '0 auto',

  '@md': {
    flexDirection: 'row',
  },
});

const NewsletterInput = styled('input', {
  flex: 1,
  padding: '$3 $4',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '$md',
  fontSize: '$sm',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: '$surface',

  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },

  '&:focus': {
    outline: 'none',
    borderColor: '$primary',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
});

const NewsletterButton = styled('button', {
  padding: '$3 $6',
  backgroundColor: '$primary',
  border: 'none',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$semibold',
  color: '$surface',
  cursor: 'pointer',
  transition: 'all $normal',

  '&:hover': {
    backgroundColor: '$primaryHover',
    transform: 'translateY(-1px)',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
    transform: 'none',
  },
});

const FooterBottom = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
  textAlign: 'center',

  '@md': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'left',
  },
});

const Copyright = styled('p', {
  fontSize: '$sm',
  color: 'rgba(255, 255, 255, 0.6)',
  margin: 0,
});

const FooterLinks = styled('div', {
  display: 'flex',
  gap: '$6',
  flexWrap: 'wrap',
  justifyContent: 'center',

  '@md': {
    justifyContent: 'flex-end',
  },
});

const FooterLink = styled('a', {
  fontSize: '$sm',
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  transition: 'color $normal',

  '&:hover': {
    color: '$surface',
  },
});

export const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <NewsletterSection>
          <NewsletterTitle>Stay Updated</NewsletterTitle>
          <NewsletterDescription>
            Subscribe to our newsletter for exclusive offers, new arrivals, and fashion inspiration.
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="Enter your email address"
              required
              aria-label="Email address for newsletter"
            />
            <NewsletterButton type="submit">
              Subscribe
            </NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterGrid>
          <FooterSection>
            <h4>Shop</h4>
            <ul>
              <li><Link href="/shop">All Products</Link></li>
              <li><Link href="/jilbabs">Jilbabs</Link></li>
              <li><Link href="/accessories">Accessories</Link></li>
              <li><Link href="/new-arrivals">New Arrivals</Link></li>
              <li><Link href="/sale">Sale</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Customer Service</h4>
            <ul>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/shipping">Shipping Info</Link></li>
              <li><Link href="/returns">Returns & Exchanges</Link></li>
              <li><Link href="/size-guide">Size Guide</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>About</h4>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/values">Our Values</Link></li>
              <li><Link href="/sustainability">Sustainability</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h4>Contact</h4>
            <ul>
              <li>
                <ContactInfo>
                  <Mail size={16} />
                  <span>hello@sagheerah.com</span>
                </ContactInfo>
              </li>
              <li>
                <ContactInfo>
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </ContactInfo>
              </li>
              <li>
                <ContactInfo>
                  <MapPin size={16} />
                  <span>123 Fashion Ave, NY 10001</span>
                </ContactInfo>
              </li>
            </ul>
            <SocialLinks>
              <SocialLink href="https://instagram.com/sagheerah" aria-label="Follow us on Instagram">
                <Instagram size={18} />
              </SocialLink>
              <SocialLink href="https://facebook.com/sagheerah" aria-label="Follow us on Facebook">
                <Facebook size={18} />
              </SocialLink>
              <SocialLink href="https://twitter.com/sagheerah" aria-label="Follow us on Twitter">
                <Twitter size={18} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © 2024 Sagheerah. All rights reserved.
          </Copyright>
          <FooterLinks>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/cookies">Cookie Policy</FooterLink>
            <FooterLink href="/accessibility">Accessibility</FooterLink>
          </FooterLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}; 