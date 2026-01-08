import { useRef, useState, useCallback } from 'react';
import { Link } from 'react-router';

interface GlowCardProps {
 to: string;
 children: React.ReactNode;
 className?: string;
}

export default function GlowCard({ to, children, className = '' }: GlowCardProps) {
 const cardRef = useRef<HTMLAnchorElement>(null);
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [isHovered, setIsHovered] = useState(false);

 const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
  if (!cardRef.current) return;

  const rect = cardRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  setMousePosition({ x, y });
 }, []);

 const handleMouseEnter = useCallback(() => {
  setIsHovered(true);
 }, []);

 const handleMouseLeave = useCallback(() => {
  setIsHovered(false);
 }, []);

 return (
  <Link
   ref={cardRef}
   to={to}
   className={`group relative bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 overflow-hidden ${className}`}
   onMouseMove={handleMouseMove}
   onMouseEnter={handleMouseEnter}
   onMouseLeave={handleMouseLeave}
   style={{
    background: isHovered
     ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.06), transparent 40%), rgb(31 41 55)`
     : undefined,
   }}
  >
   {/* Glowing border effect */}
   <div
    className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
    style={{
     opacity: isHovered ? 1 : 0,
     background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), transparent 40%)`,
    }}
   />

   {/* Border glow */}
   <div
    className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300"
    style={{
     opacity: isHovered ? 1 : 0,
     padding: '1px',
     background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.4), transparent 40%)`,
     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
     maskComposite: 'xor',
     WebkitMaskComposite: 'xor',
    }}
   />

   {/* Content */}
   <div className="relative z-10">{children}</div>
  </Link>
 );
}
