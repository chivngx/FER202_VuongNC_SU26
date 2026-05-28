import React, { useState } from 'react';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MyModal from './MyModal';

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};

    if (!formData.username.trim()) {
      tempErrors.username = 'Tên đăng nhập không được để trống';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email không được để trống';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Email không đúng định dạng (VD: example@domain.com)';
      }
    }

    if (!formData.password) {
      tempErrors.password = 'Mật khẩu không được để trống';
    } else {
      if (formData.password.length < 6) {
        tempErrors.password = 'Mật khẩu phải chứa ít nhất 6 ký tự';
      } else {
        const hasUpper = /[A-Z]/.test(formData.password);
        const hasLower = /[a-z]/.test(formData.password);
        const hasDigit = /[0-9]/.test(formData.password);
        const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);

        if (!hasUpper || !hasLower || !hasDigit || !hasSpecial) {
          tempErrors.password = 'Mật khẩu phải có ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt';
        }
      }
    }

    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = 'Xác nhận mật khẩu không được để trống';
    } else if (formData.confirmPassword !== formData.password) {
      tempErrors.confirmPassword = 'Mật khẩu xác nhận không trùng khớp';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowModal(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({});
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/home');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center py-5" style={{ minHeight: 'calc(100vh - 56px)' }}>
      <Card className="shadow-lg border-0 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
        <Card.Body className="p-4 p-sm-5">
          <div className="text-center mb-4">
            <span className="fs-1">🔑</span>
            <h2 className="fw-bold text-primary mt-2">Đăng Ký Tài Khoản</h2>
            <p className="text-muted">Vui lòng điền thông tin bên dưới để đăng ký</p>
          </div>

          <Form onSubmit={handleRegister} noValidate>
            <Form.Group className="mb-3" controlId="registerUsername">
              <Form.Label className="fw-semibold">Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Nhập tên đăng nhập"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                className="rounded-3 py-2"
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerEmail">
              <Form.Label className="fw-semibold">Địa chỉ Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="example@domain.com"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
                className="rounded-3 py-2"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="registerPassword">
              <Form.Label className="fw-semibold">Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Nhập mật khẩu"
                value={formData.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
                className="rounded-3 py-2"
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="registerConfirmPassword">
              <Form.Label className="fw-semibold">Xác nhận mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Nhập lại mật khẩu"
                value={formData.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
                className="rounded-3 py-2"
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="g-2">
              <Col xs={6}>
                <Button
                  type="submit"
                  variant="primary"
                  className="w-100 py-2 fw-semibold rounded-3 shadow-sm"
                >
                  Register
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  type="button"
                  variant="outline-secondary"
                  onClick={handleCancel}
                  className="w-100 py-2 fw-semibold rounded-3"
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <MyModal
        show={showModal}
        onHide={handleCloseModal}
        title="Đăng Ký Thành Công!"
        data={{
          username: formData.username,
          email: formData.email,
          message: 'Tài khoản của bạn đã được khởi tạo thành công.',
          redirecting: 'Nhấp Close để đi tới trang chủ Blog Post.'
        }}
      />
    </Container>
  );
}

export default RegistrationForm;