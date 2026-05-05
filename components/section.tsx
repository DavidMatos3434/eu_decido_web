export default function Section({ title, children }: any) {
  return (
    <section style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
