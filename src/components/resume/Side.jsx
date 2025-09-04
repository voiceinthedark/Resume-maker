import Section from "./Section";

export default function Side({ data }) {

  return (
    <section className="preview-side">
      <Section type="contact" data={data} />
      <Section type="skills" data={data} />
      <Section type="languages" data={data} />
    </section>
  )

}
