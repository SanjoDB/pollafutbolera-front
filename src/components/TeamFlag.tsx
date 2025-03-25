import React from 'react';

interface TeamFlagProps {
  country: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// A mapping of country codes to their respective flag images
const flagMap: Record<string, string> = {
  argentina: 'https://flagcdn.com/ar.svg',
  brazil: 'https://flagcdn.com/br.svg',
  england: 'https://flagcdn.com/gb-eng.svg',
  spain: 'https://flagcdn.com/es.svg',
  germany: 'https://flagcdn.com/de.svg',
  netherlands: 'https://flagcdn.com/nl.svg',
  croatia: 'https://flagcdn.com/hr.svg',
  japan: 'https://flagcdn.com/jp.svg',
  // Add more as needed
};

const TeamFlag: React.FC<TeamFlagProps> = ({ country, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };
  
  const flagUrl = flagMap[country.toLowerCase()] || 'https://flagcdn.com/xx.svg'; // Fallback flag
  
  return (
    <div className={`relative overflow-hidden rounded-full border shadow-sm team-flag ${sizeClasses[size]} ${className}`}>
      <img 
        src={flagUrl} 
        alt={`${country} flag`}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
};

export default TeamFlag;