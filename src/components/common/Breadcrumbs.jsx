import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
    return (
        <nav className="mb-4 text-sm text-[var(--text-secondary)]">
            <ol className="flex items-center gap-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        {item.to ? (
                            <Link
                                to={item.to}
                                className="hover:text-[var(--color-brand)] transition"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-[var(--text-primary)] font-medium">
                                {item.label}
                            </span>
                        )}

                        {index < items.length - 1 && <span>/</span>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
