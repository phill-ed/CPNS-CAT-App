import { Github, Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white text-lg font-semibold mb-4">CAT App</h3>
            <p className="text-sm max-w-md mb-4">
              Platform latihan soal Computer Assisted Test (CAT) untuk persiapan
              seleksi CPNS dan ujian nasional Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/phill-ed" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:tendaedwin.et@gmail.com" className="hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="#tests" className="hover:text-white transition-colors">Tests</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kategori</h4>
            <ul className="space-y-2 text-sm">
              <li><span>TWK - Tes Wawasan Kebangsaan</span></li>
              <li><span>TKP - Tes Karakteristik Pribadi</span></li>
              <li><span>PU - Tes Intelegensi Umum</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} CAT App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
