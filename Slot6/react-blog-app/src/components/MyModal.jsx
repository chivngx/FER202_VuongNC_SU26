import { Modal, Button } from "react-bootstrap";

function MyModal({ show, onHide, title, data }) {
  const renderData = (obj) => {
    if (!obj) return null;
    return Object.entries(obj).map(([key, value]) => {
      const displayKey = key.charAt(0).toUpperCase() + key.slice(1);
      return (
        <p key={key}>
          <strong>{displayKey}:</strong> {String(value)}
        </p>
      );
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderData(data)}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyModal;