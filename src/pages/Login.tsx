import React, { useState } from 'react';
import { Card, Form, Input, Button, Typography, Space, Divider, message, Row, Col, Badge } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined, SafetyCertificateOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';
import { useAuthStore, UserRole } from '../store/authStore';

const { Title, Text, Paragraph } = Typography;

const LoginPage: React.FC = () => {
    const login = useAuthStore((state) => state.login);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        setLoading(true);
        // Giả lập delay bộ xử lý đăng nhập
        setTimeout(() => {
            let role: UserRole = 'SUPER_ADMIN';
            if (values.email.includes('hr')) role = 'HR_MANAGER';
            if (values.email.includes('trainer')) role = 'TRAINER';
            if (values.email.includes('sales')) role = 'EMPLOYEE';

            login(values.email, role);
            message.success('Đăng nhập thành công!');
            setLoading(false);
        }, 1000);
    };

    const demoAccounts = [
        { role: 'SUPER_ADMIN', email: 'admin@fastyear.tech', pass: 'admin123', icon: <SafetyCertificateOutlined />, color: '#1677ff', desc: 'Toàn quyền hệ thống & Phân quyền' },
        { role: 'HR_MANAGER', email: 'hr@fastyear.tech', pass: 'hr123', icon: <RocketOutlined />, color: '#722ed1', desc: 'Quản lý nhân sự & Bảng lương' },
        { role: 'TRAINER', email: 'trainer@fastyear.tech', pass: 'trainer123', icon: <TeamOutlined />, color: '#52c41a', desc: 'Quản lý đào tạo & Hiệu suất' },
        { role: 'EMPLOYEE', email: 'sales@fastyear.tech', pass: 'sales123', icon: <UserOutlined />, color: '#faad14', desc: 'Nhân viên (Sales/CS/Vận hành)' },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#001529] via-[#002140] to-[#1677ff]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />
            </div>

            <Row gutter={[32, 32]} className="w-full max-w-5xl z-10" align="middle">
                <Col xs={24} lg={12}>
                    <div className="text-white mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="https://sv2.anhsieuviet.com/2025/12/31/image789b6391d44939b4.png" alt="Logo" className="w-12 h-12" />
                            <Title level={1} style={{ color: 'white', margin: 0, fontSize: '2.5rem' }}>Fast HRM</Title>
                        </div>
                        <Title level={3} style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>
                            Giải pháp Quản trị Nhân sự Toàn diện & Hiện đại
                        </Title>
                        <Paragraph style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
                            Hệ thống quản lý 360° giúp tối ưu quy trình tuyển dụng, chấm công, tiền lương và đào tạo cho doanh nghiệp Việt.
                        </Paragraph>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {demoAccounts.map(acc => (
                            <Card
                                key={acc.role}
                                size="small"
                                className="bg-white/5 border-white/10 hover:bg-white/10 cursor-pointer transition-all"
                                onClick={() => {
                                    form.setFieldsValue({
                                        email: acc.email,
                                        password: acc.pass
                                    });
                                    message.success(`Đã chọn tài khoản ${acc.role}`);
                                }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${acc.color}20`, color: acc.color }}>
                                        {acc.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <Text strong style={{ color: 'white' }}>{acc.role}</Text>
                                            <Badge status="processing" text={<Text style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>Role: {acc.role}</Text>} />
                                        </div>
                                        <div className="text-[12px] style={{ color: 'rgba(255,255,255,0.45)' }}">{acc.desc}</div>
                                        <div className="flex gap-4 mt-1">
                                            <Text style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Email: {acc.email}</Text>
                                            <Text style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>Pass: {acc.pass}</Text>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </Col>

                <Col xs={24} lg={12}>
                    <Card
                        className="backdrop-blur-xl bg-white/90 shadow-2xl rounded-2xl border-none"
                        bodyStyle={{ padding: '40px' }}
                    >
                        <div className="mb-8 text-center">
                            <Title level={2}>Chào mừng trở lại</Title>
                            <Text type="secondary">Vui lòng đăng nhập để quản lý hệ thống</Text>
                        </div>

                        <Form
                            form={form}
                            name="login"
                            layout="vertical"
                            onFinish={onFinish}
                            size="large"
                        >
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập email!' }, { type: 'email', message: 'Email không hợp lệ!' }]}
                            >
                                <Input
                                    prefix={<UserOutlined className="text-gray-400" />}
                                    placeholder="Email đăng nhập"
                                />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined className="text-gray-400" />}
                                    placeholder="Mật khẩu"
                                />
                            </Form.Item>

                            <div className="flex justify-between mb-6">
                                <Button type="link" size="small" style={{ padding: 0 }}>Quên mật khẩu?</Button>
                            </div>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    icon={<LoginOutlined />}
                                    loading={loading}
                                    className="h-12 text-lg rounded-lg shadow-lg shadow-blue-500/30"
                                >
                                    Đăng nhập ngay
                                </Button>
                            </Form.Item>
                        </Form>

                        <Divider plain><Text type="secondary" className="text-xs">Demo Fast HRM</Text></Divider>

                        <div className="text-center">
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                © 2026 Fast HRM. Toàn quyền bảo lưu.
                            </Text>
                        </div>
                        <div className="text-center">
                            <Text type="secondary" style={{ fontSize: '12px' }}>
                                Powered by <Text strong>FastYear.</Text>.
                            </Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;
