export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <b key={i}>{part.slice(2, -2)}</b>;
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
