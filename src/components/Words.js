// Splits a headline into words that slide up one after another.
export default function Words({ text, start = 1.3, step = 0.06, style }) {
  const words = text.split(" ");
  return words.map((w, i) => (
    <span key={i}>
      <span className="w">
        <span style={{ animationDelay: `${(start + i * step).toFixed(2)}s`, ...style }}>{w}</span>
      </span>
      {i < words.length - 1 ? " " : null}
    </span>
  ));
}
