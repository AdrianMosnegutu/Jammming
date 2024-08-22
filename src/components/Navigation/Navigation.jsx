import { ProfileDisplay, SearchBar } from ".";

const Navigation = () => (
  <nav className="bg-dark-tertiary text-light-main flex h-24 w-full items-center justify-between px-12">
    <h1 className="text-5xl">
      Ja<em className="text-spotify-green not-italic">mmm</em>ing
    </h1>
    <SearchBar />
    <ProfileDisplay />
  </nav>
);

export default Navigation;
