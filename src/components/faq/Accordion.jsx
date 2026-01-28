import AccordionItem from "./AccordionItem";

const Accordion = ({ items }) => {
    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={item.id}
                    item={item}
                    index={index + 1}
                />
            ))}
        </div>
    );
};

export default Accordion;
