import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TiDelete } from "react-icons/ti";
const AppointmentList = ({ apps, setApps }) => {
    const handleDelete = (id) => {
        setApps(apps.filter((item) => item.id !== id));
    };

    const handleDoubleClick = (id) => {
        setApps(
            apps.map((item) =>
                item.id === id ? { ...item, consulted: !item.consulted } : item
            )
        );
    };
    return (
        <Container className="p-2">
            <h3
                className="display-6 mb-2"
            >
                Appointment List
            </h3>
            {apps.length < 1 && <img src="./img/appointment.jpg" width="70%" alt="calender"/>}

            {apps.map(({ id, guestName, consulted, restaurants, day }) => (
                <div
                    key={id}
                    className={
                        consulted ? "appointments consulted" : "appointments"
                    }
                    onDoubleClick={() => handleDoubleClick(id)}
                >
                    <Row className="justify-content-between align-items-center">
                        <Col xs={12} sm={12} md={6}>
                            <h4>{guestName}</h4>
                            <h5>{restaurants}</h5>
                        </Col>
                        <Col>
                            <h5>{day}</h5>
                        </Col>
                        <Col className="text-end">
                            <TiDelete
                                className="text-danger fs-1"
                                type="button"
                                onClick={() => handleDelete(id)}
                            />
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
};

export default AppointmentList;
