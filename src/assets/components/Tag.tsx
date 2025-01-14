export default function Tag({
  className = "",
  icon,
  label,
  children,
  ...otherProps
}: React.ComponentProps<"div"> & {
  icon?: React.ReactNode;
  label?: string;
}) {
  return (
    <div
      {...otherProps}
      className={`flex items-center gap-1 font-extrabold rounded-lg shadow-black-small border-2 border-black px-2 py-1 ${className}`}
    >
      {icon}
      {label && <span>{label}</span>}
      {children}
    </div>
  );
}
