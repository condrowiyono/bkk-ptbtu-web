import { Icons } from "./icons";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container grid grid-cols-1 gap-4 p-8 sm:px-12 md:grid-cols-2 md:px-32">
        <div>
          <h1 className="mb-2 text-lg font-bold">Hubungi Kami</h1>
          <address className="grid grid-cols-1 gap-2 not-italic">
            <a
              href="https://www.instagram.com/bajatitianutama.official"
              target="_blank"
            >
              <div className="flex items-center gap-2">
                <Icons.instagram />
                bajatitianutama.official
              </div>
            </a>
            <a href="https://twitter.com/BajaTitianUtama" target="_blank">
              <div className="flex items-center gap-2">
                <Icons.twitter />
                BajaTitianUtama
              </div>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089226504104"
              target="_blank"
            >
              <div className="flex items-center gap-2">
                <Icons.facebook />
                Baja Titian Utama
              </div>
            </a>
          </address>
        </div>
        <div>
          <h1 className="mb-2 text-lg font-bold">Lokasi Kami</h1>
          <address className="not-italic">
            ITS Tower, Nifarro Park <br />
            Jalan Raya Pasar Minggu <br />
            Jakarta Selatan
          </address>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[300px] rounded-xl bg-white px-8 py-2 shadow-sm">
          <Icons.logo />
        </div>
      </div>
      <div className="pb-8 text-center">
        <p>&copy; 2021 PT Baja Titian Utama. All rights reserved.</p>
      </div>
    </footer>
  );
};
