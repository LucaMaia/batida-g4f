import Accordion from 'react-bootstrap/Accordion';

export default function AccordionComponent({link}) {
    return (
        <Accordion >
            {link.map((item,index) => {
                return (
                    <Accordion.Item eventKey={item.number} key={index}>
                        <Accordion.Header >
                            {item.title}
                        </Accordion.Header>

                        <Accordion.Body >
                            {item.text}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            })}
        </Accordion>
    );
}
