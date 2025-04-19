import { useAccordion } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({className, children}){
const {toggleItem} = useAccordion();
const id = useAccordionItemContext();

    return <h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
}
