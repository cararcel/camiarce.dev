import { ReactNode } from 'react';

export default function Link({
    className = '',
    icon,
    label,
    children,
    ...otherProps
}: React.ComponentProps<'a'> & {
    icon?: ReactNode;
    label?: string;
}) {
    return (
        <a
            {...otherProps}
            className={`font-extrabold rounded-full shadow-black-small hover:shadow-black-small-raised hover:-translate-x-1 hover:-translate-y-1 transition duration-150 ease-in-out border-2 border-black flex items-center gap-1 ${className}`}
        >
            {icon}
            {label && <span className="text-lg">{label}</span>}
            {children}
        </a>
    );
}
