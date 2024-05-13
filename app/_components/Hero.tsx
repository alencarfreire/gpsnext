export default function Hero() {
  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet" />
      <div className="flex flex-col justify-center items-center my-10 mx-6">
        <header>
          <div className="mb-12">
            <span className="border rounded-full py-3 px-5 font-bold text-[#1F1818]">
              📲 • Status do Atendimento:{" "}
              <span className="text-green-500" id="online">
                Online.
              </span>
            </span>
          </div>
        </header>
        <div className="flex flex-col text-center text-[#1F1818]">
          <h1 className="text-5xl font-extrabold mb-6 leading-[4rem]">
            Tenha um veículo <span className="text-[#F2444A]">exclusivo</span> a sua espera no Aeroporto de{" "}
            <span className="text-[#F2444A]">Porto Seguro</span>
          </h1>
          <p className="text-lg max-w-[520px] m-auto">
            Conectamos você ao{" "}
            <span className="font-medium leading-7">
              Arraial d{"'"}Ajuda, Trancoso, Club Med Trancoso, Caraíva, Santo André, Aeroporto de Porto Seguro
            </span>{" "}
            e região 🚗
          </p>
        </div>
        <a
          href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
          className="mt-12 mb-4 bg-green-500 text-white px-8 py-4 rounded-full flex gap-2"
          target="_blank"
        >
          <button>Entrar em Contato</button>
          <i className="ri-whatsapp-fill text-2xl"></i>
        </a>
      </div>
    </>
  );
}
