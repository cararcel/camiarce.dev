// src/components/react/Link.jsx
export default function Link({
    className = '',
    icon,
    label,
    children,
    ...props
}) {
    return (
        <a
            {...props}
            className={`font-extrabold rounded-full shadow-black-small hover:shadow-black-small-raised hover:-translate-x-1 hover:-translate-y-1 transition duration-150 ease-in-out border-2 border-black flex items-center gap-1 ${className}`}
        >
            {icon}
            {children}
            {label && <span className="text-lg">{label}</span>}
        </a>
    );
}
