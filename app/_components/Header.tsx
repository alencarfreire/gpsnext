import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-4 border-b max-w-[1080px] m-auto">
      <Image
        src="https://i.imgur.com/4ClvrNd.png"
        alt="Logo"
        width={150}
        height={25}
        className="w-[150px] lg:w-[200px] h-auto"
      />
      <nav>
        <ul>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
              className="text-sm text-[#15803d] font-bold"
            >
              Entrar em Contato 👆
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
