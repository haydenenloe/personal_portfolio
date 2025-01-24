"use client";
// This component creates the website footer with social links
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Hayden Enloe. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/haydenenloe"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hayden-enloe"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
