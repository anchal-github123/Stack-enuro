export default function Button({ name, styleType }) {
  const baseStyles = "px-5 py-2 rounded-full shadow-md border-3";
  const dynamicStyle =
    styleType === "primary"
      ? "bg-primary text-white"
      : "bg-white text-primary";

  return (
    <button className={`${baseStyles} ${dynamicStyle}`}>
      {name}
    </button>
  );
}
