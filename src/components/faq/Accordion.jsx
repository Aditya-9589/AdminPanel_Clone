import AccordionItem from "./AccordionItem";

const Accordion = ({ items, onEdit, onDelete }) => {
    return (
        <div className="-mx-6">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    index={index + 1}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default Accordion;
