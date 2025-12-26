export function Button({ children, variant = "primary", ...props }) {
  const styles = {
    primary: "bg-green-600 hover:bg-green-700 text-white",
    secondary: "bg-zinc-700 hover:bg-zinc-600 text-white",
    danger: "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      {...props}
      className={`w-full py-3 rounded-xl font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}
