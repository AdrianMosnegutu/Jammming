import { ProfileDisplay, SearchBar } from ".";

const Navigation = () => (
  <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between gap-10 bg-dark-tertiary px-10 text-light-main shadow-lg sm:px-12 lg:h-24">
    <h1 className="hidden text-5xl lg:block">
      Ja<em className="not-italic text-spotify-green">mmm</em>ing
    </h1>
    <SearchBar />
    <ProfileDisplay />
  </nav>
);

export default Navigation;
