import React, { useState } from 'react';
import { Card, Row, Col, Typography, List, Tag, Progress, Button, Avatar, Space, Tabs, Input, Empty } from 'antd';
import { PlayCircleOutlined, BookOutlined, StarOutlined, SearchOutlined, TrophyOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';

const { Title, Text, Paragraph } = Typography;

interface Course {
    id: number;
    title: string;
    category: string;
    progress: number;
    thumbnail: string;
    instructor: string;
}

const Training: React.FC = () => {
    const [courses] = useState<Course[]>([
        { id: 1, title: 'Lái xe An toàn & Cơ bản về Logistics', category: 'Compliance', progress: 100, thumbnail: 'https://picsum.photos/seed/course1/300/200', instructor: 'Trần Logistics' },
        { id: 2, title: 'Dịch vụ Khách hàng Xuất sắc', category: 'Kỹ năng mềm', progress: 45, thumbnail: 'https://picsum.photos/seed/course2/300/200', instructor: 'Lê Văn B' },
        { id: 3, title: 'Quản trị Kho bãi Nâng cao', category: 'Kỹ thuật', progress: 0, thumbnail: 'https://picsum.photos/seed/course3/300/200', instructor: 'HCM Expert' },
        { id: 4, title: 'Tiếng Anh chuyên ngành Logistics', category: 'Ngôn ngữ', progress: 15, thumbnail: 'https://picsum.photos/seed/course4/300/200', instructor: 'Oxford Pro' },
    ]);

    return (
        <div className="space-y-6">
            <PageHeader
                title="Đào tạo & Phát triển"
                subtitle="Khám phá 45 khóa học và 12 lộ trình nghề nghiệp tại FastYear"
                extra={
                    <Space>
                        <Input placeholder="Tìm khóa học..." prefix={<SearchOutlined />} className="w-64" />
                        <Button type="primary">Học tập của tôi</Button>
                    </Space>
                }
            />

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={18}>
                    <Tabs
                        defaultActiveKey="all"
                        items={[
                            {
                                key: 'all',
                                label: 'Tất cả Khóa học',
                                children: (
                                    <Row gutter={[16, 16]}>
                                        {courses.map(course => (
                                            <Col xs={24} sm={12} key={course.id}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt={course.title} src={course.thumbnail} />}
                                                    className="shadow-sm border-none overflow-hidden"
                                                    bodyStyle={{ padding: 16 }}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <Tag color="blue">{course.category}</Tag>
                                                        <Space size="small">
                                                            <StarOutlined className="text-yellow-500" />
                                                            <Text strong>4.8</Text>
                                                        </Space>
                                                    </div>
                                                    <Title level={5} className="line-clamp-1 h-12">{course.title}</Title>
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <Avatar size="small" src={`https://picsum.photos/seed/${course.instructor}/50`} />
                                                        <Text type="secondary" className="text-xs">{course.instructor}</Text>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="flex justify-between text-xs">
                                                            <Text type="secondary">Tiến độ</Text>
                                                            <Text strong>{course.progress}%</Text>
                                                        </div>
                                                        <Progress percent={course.progress} size="small" showInfo={false} strokeColor="#52c41a" />
                                                        <Button type="primary" block icon={<PlayCircleOutlined />} className="mt-2">
                                                            {course.progress === 0 ? 'Bắt đầu học' : 'Học tiếp'}
                                                        </Button>
                                                    </div>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                )
                            },
                            {
                                key: 'career',
                                label: 'Lộ trình Nghề nghiệp',
                                children: <Empty description="Bản đồ lộ trình đang được xây dựng" />
                            },
                            {
                                key: 'certifications',
                                label: 'Chứng chỉ',
                                children: (
                                    <List
                                        grid={{ gutter: 16, column: 2 }}
                                        dataSource={[
                                            { title: 'Chuyên gia Logistics 2025', date: 'Tháng 01/2026', level: 'Nâng cao' },
                                            { title: 'Chứng chỉ Sơ cấp cứu', date: 'Tháng 12/2025', level: 'Bắt buộc' },
                                        ]}
                                        renderItem={(item: { title: string; date: string; level: string }) => (
                                            <List.Item>
                                                <Card className="shadow-sm border-emerald-100 hover:border-emerald-300 transition-colors">
                                                    <Space size="middle">
                                                        <TrophyOutlined className="text-3xl text-yellow-500" />
                                                        <div>
                                                            <div className="font-bold">{item.title}</div>
                                                            <Text type="secondary" className="text-xs">Cấp ngày: {item.date} • {item.level}</Text>
                                                            <Button type="link" size="small" className="p-0 mt-1">Tải PDF</Button>
                                                        </div>
                                                    </Space>
                                                </Card>
                                            </List.Item>
                                        )}
                                    />
                                )
                            }
                        ]}
                    />
                </Col>

                <Col xs={24} lg={6}>
                    <Card title="Khung Năng lực" bordered={false} className="shadow-sm">
                        <div className="space-y-4">
                            {[
                                { skill: 'Giao tiếp', level: 85 },
                                { skill: 'Giải quyết Vấn đề', level: 72 },
                                { skill: 'Kiến thức Ngành', level: 90 },
                                { skill: 'Kỹ năng Số', level: 60 },
                            ].map(s => (
                                <div key={s.skill}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <Text>{s.skill}</Text>
                                        <Text strong>{s.level}%</Text>
                                    </div>
                                    <Progress percent={s.level} size="small" showInfo={false} />
                                </div>
                            ))}
                            <Button type="dashed" block className="mt-4">Cập nhật Kiểm tra Kỹ năng</Button>
                        </div>
                    </Card>

                    <Card title="Học viên Tiêu biểu" bordered={false} className="shadow-sm mt-4">
                        <List
                            itemLayout="horizontal"
                            dataSource={[
                                { name: 'Nguyen Van A', pts: 1250 },
                                { name: 'Le Thi B', pts: 980 },
                                { name: 'Tran Van C', pts: 850 },
                            ]}
                            renderItem={(item: { name: string; pts: number }, index: number) => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={`https://picsum.photos/seed/${item.name}/50`} />}
                                        title={item.name}
                                        description={`${item.pts} Điểm • Hạng #${index + 1}`}
                                    />
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Training;
