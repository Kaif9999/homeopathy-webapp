export function Footer() {
  return (
    <footer className="border-t border-emerald-900/20 bg-background/95 backdrop-blur-lg">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">About Clinic</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leading homeopathic clinic providing natural healthcare solutions for the whole family.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Home</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">About Us</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Services</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Chronic Diseases</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Skin Disorders</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Digestive Issues</li>
              <li className="transition-all hover:text-emerald-500 hover:translate-x-1 cursor-pointer">Mental Health</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground bg-emerald-950/30 p-6 rounded-2xl backdrop-blur-sm border border-emerald-900/20">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">📍</span> 123 Health Street
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">🌍</span> City, State 12345
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">📞</span> (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✉️</span> info@clinic.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-emerald-900/20 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Homeopathy Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

