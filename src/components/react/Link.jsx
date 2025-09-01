// src/components/react/Link.jsx
export default function Link({ className = '', icon, label, ...props }) {
    return (
        <a
            {...props}
            className={`font-extrabold rounded-full border-2 border-black flex items-center gap-1 ${className}`}
        >
            {icon}
            {label && <span className="text-lg">{label}</span>}
        </a>
    );
}
