import React, { useState } from 'react';
import { Card, Steps, List, Checkbox, Progress, Typography, Row, Col, Avatar, Tag, Button, Space, Divider } from 'antd';
import { RocketOutlined, UserOutlined, BookOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';

const { Title, Text, Paragraph } = Typography;

interface OnboardingTask {
    id: number;
    title: string;
    completed: boolean;
    group: string;
}

const Onboarding: React.FC = () => {
    const [tasks, setTasks] = useState<OnboardingTask[]>([
        { id: 1, title: 'Email chào mừng & Cấp quyền truy cập', completed: true, group: 'Trước khi gia nhập' },
        { id: 2, title: 'Thiết lập thiết bị CNTT (Laptop, Email)', completed: true, group: 'Trước khi gia nhập' },
        { id: 3, title: 'Buổi định hướng văn hóa công ty', completed: false, group: 'Tuần 1' },
        { id: 4, title: 'Xem xét Chính sách & Sổ tay nhân viên', completed: false, group: 'Tuần 1' },
        { id: 5, title: 'Giới thiệu nhóm & Gặp gỡ Buddy', completed: false, group: 'Tuần 1' },
        { id: 6, title: 'Đào tạo nhận thức an ninh bảo mật', completed: false, group: 'Đào tạo' },
        { id: 7, title: 'Đào tạo công cụ chuyên môn', completed: false, group: 'Đào tạo' },
    ]);

    const toggleTask = (id: number) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const progress = Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

    return (
        <div className="space-y-6">
            <PageHeader
                title="Chào mừng, Nguyễn Văn D!"
                subtitle="Nhân viên Thiết kế Sản phẩm • Gia nhập 2 ngày trước"
                extra={
                    <div className="text-right w-64">
                        <Text strong>Tiến độ Hội nhập</Text>
                        <Progress percent={progress} status="active" strokeColor="#1677ff" />
                    </div>
                }
            />

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                    <Card
                        title={<span><RocketOutlined className="mr-2" /> Hành trình Hội nhập của bạn</span>}
                        bordered={false}
                        className="shadow-sm"
                    >
                        <Steps
                            current={1}
                            size="small"
                            items={[
                                { title: 'Tiền hội nhập', description: 'Truy cập & Công cụ' },
                                { title: 'Định hướng', description: 'Văn hóa & Chính sách' },
                                { title: 'Đào tạo', description: 'Xây dựng kỹ năng' },
                                { title: 'Sẵn sàng', description: 'Bắt đầu làm việc' },
                            ]}
                            style={{ marginBottom: 32 }}
                        />

                        <Divider orientation="left">Onboarding Checklist</Divider>
                        <List
                            dataSource={tasks}
                            renderItem={item => (
                                <List.Item className="px-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between w-full">
                                        <Space>
                                            <Checkbox
                                                checked={item.completed}
                                                onChange={() => toggleTask(item.id)}
                                            />
                                            <div className={item.completed ? 'text-gray-400 line-through' : ''}>
                                                {item.title}
                                                <div className="text-[10px] text-gray-500">{item.group}</div>
                                            </div>
                                        </Space>
                                        {item.completed ? (
                                            <Tag color="success" icon={<CheckCircleOutlined />}>Hoàn thành</Tag>
                                        ) : (
                                            <Tag color="warning" icon={<ClockCircleOutlined />}>Đang chờ</Tag>
                                        )}
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={8}>
                    <Card
                        title={<span><BookOutlined className="mr-2" /> Tài liệu Thiết yếu</span>}
                        bordered={false}
                        className="shadow-sm"
                    >
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { title: 'Sổ tay Nhân viên', desc: 'Quy định & Văn hóa' },
                                { title: 'Hướng dẫn Phúc lợi', desc: 'Bảo hiểm & Đặc quyền' },
                                { title: 'Cổng hỗ trợ IT', desc: 'Phần cứng & Phần mềm' },
                                { title: 'Bộ nhận diện Thương hiệu', desc: 'Tài nguyên & Style' },
                            ]}
                            renderItem={item => (
                                <List.Item className="cursor-pointer hover:bg-gray-50 p-3 rounded-lg">
                                    <List.Item.Meta
                                        title={<Text strong className="text-blue-600">{item.title}</Text>}
                                        description={item.desc}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>

                    <Card title="Khảo sát nhanh" bordered={false} className="shadow-sm mt-4 bg-blue-50">
                        <Paragraph className="text-sm">
                            Trải nghiệm hội nhập của bạn thế nào? Phản hồi của bạn giúp chúng tôi cải thiện tốt hơn.
                        </Paragraph>
                        <Button type="primary" block>Thực hiện Khảo sát</Button>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Onboarding;
