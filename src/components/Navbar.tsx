import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MenuIcon, User } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/90645373-09eb-4c3c-9c55-d8328c9a0868.png" 
              alt="Logo" 
              className="h-8 w-auto logo"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Matches
            </Link>
            <Link to="/statistics" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Statistics
            </Link>
            <Link to="/ranking" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Ranking
            </Link>
            <Link to="/prizes" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Prizes
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Link to="/profile" className="hidden md:flex">
            <Button variant="ghost" size="icon" className="rounded-full" aria-label="Profile">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          
          <Button variant="default" className="hidden md:inline-flex" size="sm">
            Create your prediction
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="pb-4">
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                <Link to="/" className="text-base font-medium transition-colors hover:text-primary py-2">
                  Matches
                </Link>
                <Link to="/statistics" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2">
                  Statistics
                </Link>
                <Link to="/ranking" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2">
                  Ranking
                </Link>
                <Link to="/prizes" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2">
                  Prizes
                </Link>
                <Link to="/profile" className="text-base font-medium text-muted-foreground transition-colors hover:text-primary py-2">
                  Profile
                </Link>
                <Button size="sm" className="mt-4">
                  Create your prediction
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;