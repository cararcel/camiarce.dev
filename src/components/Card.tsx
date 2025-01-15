export default function Card({
    children,
    className = '',
}: React.ComponentProps<'div'>) {
    return (
        <div
            className={`border-2 border-black shadow-black rounded-lg ${className}`}
        >
            {children}
        </div>
    );
}
