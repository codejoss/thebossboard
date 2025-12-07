import logoUrl from '../../assets/img/BossBoard-white.png';

const Header = () => {
  return (
    <div className="border-b border-stone-500/20 bg-bossDark py-12">
      <div className="container mx-auto px-6 text-center">
        <img className="inline h-40" src={logoUrl} alt="logo for The BossBoard" />
        <p className="animate-slide-up mt-4 text-xl font-bold text-white">
          Conoce a las jefas increíbles que forman parte de nuestra comunidad
        </p>
      </div>
    </div>
  );
};

export default Header;
