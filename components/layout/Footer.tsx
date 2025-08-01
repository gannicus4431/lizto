import React from 'react';
import Link from 'next/link';

const navigation = {
  main: [
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/chef' },
    { name: 'Join Us', href: '/' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://facebook.com/lizto.hk',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/lizto.hk',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    // Additional icons here...
  ],
};

export default function Footer() {
  return (
    <footer className="bg-amber-100 border-t border-amber-200">
      <style jsx global>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          5% { transform: scale(1.2); }
          10% { transform: scale(1); }
          15% { transform: scale(1.2); }
          20% { transform: scale(1); }

          50% { transform: scale(1); }
          55% { transform: scale(1.2); }
          60% { transform: scale(1); }
          65% { transform: scale(1.2); }
          70% { transform: scale(1); }
        }
      `}</style>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm text-amber-700"
        >
          {navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-amber-900 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-10 flex justify-center gap-x-8">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-900"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Location and Contact Info */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-sm text-amber-600">
            📍G75A, G76C & G76D, G/F, Citywalk, 1 Yeung Uk Road, Tsuen Wan
          </p>
          <p className="text-sm text-amber-600">
            Tel. 28860603
          </p>
          <p className="text-sm text-amber-600">
            Business Hour. Mon - Sun | 11:30-21:30
          </p>
        </div>
        
        <p className="mt-6 text-center text-sm text-amber-600 flex justify-center items-center gap-1">
          &copy; 2025 Lizto
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="#FF0000"  
            viewBox="0 0 16 16"
            className="w-4 h-4"
            style={{ animation: 'heartbeat 2.4s ease-in-out infinite' }}
          >
            <path d="M2.11 2.985a3.77 3.77 0 0 1 2.8-1.22c.809 0 1.55.256 2.2.76a4.5 4.5 0 0 1 .89.929q.395-.546.89-.93a3.52 3.52 0 0 1 2.2-.758c1.08 0 2.075.433 2.8 1.219.715.776 1.11 1.838 1.11 2.988 0 1.184-.441 2.268-1.389 3.411-.847 1.022-2.065 2.06-3.475 3.262-.482.41-1.028.876-1.595 1.372a.82.82 0 0 1-1.082 0c-.567-.496-1.113-.961-1.595-1.372-1.41-1.202-2.628-2.24-3.476-3.262C1.441 8.24 1 7.157 1 5.973c0-1.15.394-2.212 1.11-2.988" />
          </svg>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}