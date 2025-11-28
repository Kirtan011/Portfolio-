import { Facebook, Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-foreground bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b-4 border-foreground pb-12">
          <div className="animate-fade-in-up">
            <h4 className="font-black text-foreground mb-4">PROJECTS</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-100">
            <h4 className="font-black text-foreground mb-4">ME</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in-up delay-200">
            <h4 className="font-black text-foreground mb-4">CONTACT ME</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-bold text-foreground hover:opacity-60 transition-opacity"
                >
                  Connect with me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in-up delay-400">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center border-3 border-foreground bg-primary transition-all hover:scale-110">
              <span className="text-sm font-black text-primary-foreground">
                KS
              </span>
            </div>
            <p className="font-black text-foreground">© 2025 KIRTAN SUTHAR</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-blue-400 transition-opacity font-black"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition-opacity font-black"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-black transition-opacity font-black"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="hover:text-pink-600 transition-opacity font-black"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
