"use client";
export default function FAQ() {
  return (
    <>
      <div className="py-10 flex flex-col justify-center items-center gap-4 max-w-[450px] lg:max-w-[600px]">
        <h3 className="text-[#F2444A] text-3xl font-extrabold px-6 mb-6 text-center">PERGUNTAS FREQUENTES</h3>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-lg font-bold text-[#1F1818]">
            Por que contratar um Transfer de forma atencipada?
          </div>
          <div className="collapse-content">
            <p className="text-[#1F1818] text-sm opacity-80">
              Garantia de que você será atendido com horário agendado, tranquilidade, atendimento exclusivo e um melhor
              valor.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-bold text-[#1F1818]">
            Em Porto Seguro não tem Uber, 99 ou outro aplicativo de transporte?
          </div>
          <div className="collapse-content">
            <p className="text-[#1F1818] text-sm opacity-80">
              Tem sim, porém com cobertura limitada e vários cancelamentos até conseguir uma corrida. Os aplicativos de
              corrida funcionam somente no Centro e Orla norte de Porto Seguro, para outros destinos como Arraial
              d’Ajuda, Club Med, Trancoso e Caraíva, o ideal é contratar um Transfer.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-bold text-[#1F1818]">
            Vocês buscam no Hotel ou no Aeroporto pela madrugada?
          </div>
          <div className="collapse-content">
            <p className="text-[#1F1818] text-sm opacity-80">
              Com certeza. O Transfer é a mesma coisa que uma corrida agendada, o diferencial da GPS Transfer é que
              cumprimos o horário e os valores já combinados, sem pegadinha no momento do Transfer.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-bold text-[#1F1818]">Como faço para contratar o Transfer?</div>
          <div className="collapse-content">
            <p className="text-[#1F1818] text-sm opacity-80">
              Entre em contato através do nosso WhatsApp:{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
                target="_blank"
              >
                <span className="text-[#F2444A]">(73) 99834-4769</span>
              </a>
              , informe a data, horário e quantidade de pessoas, local de embarque e destino, em seguida enviaremos uma
              cotação.
            </p>
          </div>
        </div>
        <h3 className="text-[#F2444A] text-3xl font-extrabold px-6 text-center mt-14">AGENDE O SEU TRANSFER 👇</h3>
        <a
          href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
          className="mt-6 mb-4 bg-green-500 text-white px-8 py-4 rounded-full flex gap-2"
          target="_blank"
        >
          <button>Entrar em Contato</button>
          <i className="ri-whatsapp-fill text-2xl"></i>
        </a>
      </div>
    </>
  );
}
