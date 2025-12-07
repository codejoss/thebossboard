interface BannerProps {
  children: React.ReactElement;
  className?: string;
}

export function Banner({
  className = "",
  children }: BannerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
}
