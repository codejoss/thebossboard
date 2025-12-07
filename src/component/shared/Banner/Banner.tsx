interface BannerProps {
  children: React.ReactElement;
}

export function Banner({ children }: BannerProps) {
  return (
    <div className="mt-10 flex items-center justify-center">{children}</div>
  );
}
