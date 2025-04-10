// src/app/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';  // Usar Next.js Link en vez de react-router-dom
import { Button } from 'react-bootstrap'; // Si usas un componente de un paquete como react-bootstrap
import { MenuIcon, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/90645373-09eb-4c3c-9c55-d8328c9a0868.png"
              alt="Logo"
              className="h-8 w-auto logo"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Matches
            </Link>
            <Link href="/statistics" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Statistics
            </Link>
            <Link href="/ranking" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Ranking
            </Link>
            <Link href="/prizes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Prizes
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/profile" className="hidden md:flex">
            <Button variant="outline" size="sm">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          <Button variant="primary" size="sm">
            Create your prediction
          </Button>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-full">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;