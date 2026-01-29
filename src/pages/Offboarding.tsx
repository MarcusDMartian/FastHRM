import React, { useState } from 'react';
import { Card, Row, Col, Typography, Steps, List, Button, Tag, Space, Alert, Form, Input, Select, Progress, Divider } from 'antd';
import { LogoutOutlined, SafetyCertificateOutlined, FileTextOutlined, WarningOutlined, SaveOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

interface OffboardingStep {
    title: string;
    description: string;
}

interface HandoverItem {
    task: string;
    status: string;
    owner: string;
}

interface AssetRecoverItem {
    item: string;
    serial: string;
    status: string;
}

const Offboarding: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps: OffboardingStep[] = [
        { title: 'Thông báo & Ý định', description: 'Báo cáo chính thức' },
        { title: 'Bàn giao', description: 'Chuyển giao công việc' },
        { title: 'Tài sản & CNTT', description: 'Thu hồi thiết bị' },
        { title: 'Quyết toán', description: 'Thanh toán cuối cùng' },
    ];

    return (
        <div className="space-y-6">
            <PageHeader
                title="Quy trình Nghỉ việc (Offboarding)"
                subtitle="Nhân viên: Lê Văn C (EMP003) • Phòng Kinh doanh"
                extra={
                    <div className="flex gap-2">
                        <Tag color="error" icon={<LogoutOutlined />}>Đơn thôi việc</Tag>
                        <Tag color="volcano">Ngày cuối: 15/02/2026</Tag>
                        <Button type="primary" danger icon={<WarningOutlined />}>Cần Bàn giao Gấp</Button>
                    </div>
                }
            />

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                    <Card title="Quy trình Nghỉ việc" bordered={false} className="shadow-sm">
                        <Steps
                            current={currentStep}
                            onChange={setCurrentStep}
                            items={steps}
                            className="mb-8"
                        />

                        {currentStep === 1 && (
                            <div className="space-y-4">
                                <Divider orientation="left">Checklist Bàn giao Công việc</Divider>
                                <List
                                    dataSource={[
                                        { task: 'Cập nhật tài liệu dự án', status: 'Xong', owner: 'Nhân viên' },
                                        { task: 'Chuyển giao danh sách khách hàng', status: 'Đang chờ', owner: 'Nhân viên' },
                                        { task: 'Bàn giao các Lead tiềm năng', status: 'Đang xử lý', owner: 'Quản lý' },
                                        { task: 'Bàn giao mật khẩu & quyền truy cập', status: 'Đang chờ', owner: 'Nhân viên' },
                                    ]}
                                    renderItem={(item: HandoverItem) => (
                                        <List.Item extra={<Tag color={item.status === 'Xong' ? 'success' : 'warning'}>{item.status}</Tag>}>
                                            <List.Item.Meta title={item.task} description={`Chủ quản: ${item.owner}`} />
                                        </List.Item>
                                    )}
                                />
                                <Button type="primary" icon={<SaveOutlined />}>Cập nhật Tiến độ</Button>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="space-y-4">
                                <Divider orientation="left">Thu hồi Tài sản</Divider>
                                <Alert
                                    message="Các mục Quan trọng cần thu hồi"
                                    description="Vui lòng đảm bảo các tài sản công ty sau được hoàn trả trước khi thực hiện quyết toán cuối cùng."
                                    type="warning"
                                    showIcon
                                />
                                <List
                                    dataSource={[
                                        { item: 'MacBook Pro 14"', serial: 'FVF-9988', status: 'Đã thu hồi' },
                                        { item: 'Thẻ tín dụng Công ty', serial: 'XXXX-1234', status: 'Đang chờ' },
                                        { item: 'Thẻ từ ra vào tòa nhà', serial: 'ID-4422', status: 'Đã thu hồi' },
                                    ]}
                                    renderItem={(item: AssetRecoverItem) => (
                                        <List.Item extra={<Button size="small" type={item.status === 'Đã thu hồi' ? 'dashed' : 'primary'}>{item.status === 'Đã thu hồi' ? 'Hoàn tác' : 'Xác nhận Đã nhận'}</Button>}>
                                            <List.Item.Meta title={item.item} description={`Số Serial/Ref: ${item.serial}`} />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        )}
                    </Card>

                    <Card title="Phỏng vấn Thôi việc (Exit Interview)" bordered={false} className="shadow-sm mt-4">
                        <Form layout="vertical">
                            <Form.Item label="Lý do nghỉ việc">
                                <Select placeholder="Chọn lý do chính">
                                    <Select.Option value="career">Phát triển Sự nghiệp</Select.Option>
                                    <Select.Option value="personal">Lý do Cá nhân</Select.Option>
                                    <Select.Option value="relocation">Thay đổi Nơi ở</Select.Option>
                                    <Select.Option value="compensation">Mức đãi ngộ tốt hơn</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="Phản hồi Chi tiết">
                                <TextArea rows={4} placeholder="Chúng tôi có thể cải thiện điều gì tốt hơn?" />
                            </Form.Item>
                            <Button type="primary">Gửi Phản hồi</Button>
                        </Form>
                    </Card>
                </Col>

                <Col xs={24} lg={8}>
                    <Card title="Ước tính Quyết toán cuối cùng" bordered={false} className="shadow-sm">
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <Text>Lương (01/02 - 15/02)</Text>
                                <Text strong>5,000,000 VNĐ</Text>
                            </div>
                            <div className="flex justify-between">
                                <Text>Phép năm chưa dùng (12 ngày)</Text>
                                <Text strong>7,500,000 VNĐ</Text>
                            </div>
                            <div className="flex justify-between">
                                <Text>Trợ cấp thôi việc</Text>
                                <Text strong>0 VNĐ</Text>
                            </div>
                            <Divider className="my-2" />
                            <div className="flex justify-between">
                                <Title level={4} style={{ margin: 0 }}>Tổng thực lĩnh</Title>
                                <Title level={4} style={{ margin: 0, color: '#52c41a' }}>12,500,000 VNĐ</Title>
                            </div>
                            <Paragraph className="text-[10px] text-gray-400 italic">
                                * Đây là bản ước tính sơ bộ. Con số cuối cùng sẽ được bộ phận Nhân sự quyết toán sau khi hoàn tất 100% checklist.
                            </Paragraph>
                            <Button block icon={<FileTextOutlined />}>Tạo Phiếu lương Tạm thời</Button>
                        </div>
                    </Card>

                    <Card title="Hỗ trợ Sau Nghỉ việc" bordered={false} className="shadow-sm mt-4">
                        <Space direction="vertical" className="w-full">
                            <Button block icon={<SafetyCertificateOutlined />}>Chứng nhận Công tác</Button>
                            <Button block icon={<FileTextOutlined />}>Chứng từ Khấu trừ Thuế (TNCN)</Button>
                            <Divider className="my-2" />
                            <Text className="text-xs text-center block">Giữ kết nối qua mạng lưới FastYear Alumni</Text>
                        </Space>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Offboarding;
