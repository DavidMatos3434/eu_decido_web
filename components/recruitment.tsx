export default function Recruitment() {
  return (
    <section style={{ padding: "40px", background: "#eef2f7" }}>
      <h2>Junta-te ao Projeto</h2>

      <form>
        <input placeholder="Nome" /><br />
        <input placeholder="Email" /><br />

        <select>
          <option>AI Engineers</option>
          <option>Software Developers</option>
          <option>Política / Governance</option>
        </select><br />

        <textarea placeholder="Mensagem"></textarea><br />

        <button>Enviar</button>
      </form>
    </section>
  );
}
