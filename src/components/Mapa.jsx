const Mapa = () => {
  return (
    <>
      <h1 className="mapa-tittle" id="mapa">
        Loja <span className="highlight">Presencial</span>
      </h1>
      <a
        href="https://www.google.com/maps/place/King+Smartphones/@-23.5546889,-46.6002177,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce592d181d6289:0x70a767148dbf7cf8!8m2!3d-23.5546889!4d-46.6002177!16s%2Fg%2F11rvjtqdqt?entry=ttu&g_ep=EgoyMDI1MDgwMy4wIKXMDSoASAFQAw%3D%3D"
        className="mapa-subtittle"
      >
        Rua Taquari, 91 - Mooca, São Paulo - SP, 03166-000
      </a>
      <div className="mapa-container">
        <iframe
          title="Localização da Loja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.382868188686!2d-46.600217699999995!3d-23.5546889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce592d181d6289%3A0x70a767148dbf7cf8!2sKing%20Smartphones!5e0!3m2!1spt-BR!2sbr!4v1754448494635!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Mapa;
