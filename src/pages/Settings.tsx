import React from 'react';
import { Card, Table, Tag, Switch, Space, Typography, Alert } from 'antd';
import { SafetyCertificateOutlined, UserOutlined, TeamOutlined, RocketOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';

const { Title, Text } = Typography;

const Settings: React.FC = () => {
    const roles = [
        { key: 'SUPER_ADMIN', name: 'Super Admin', icon: <SafetyCertificateOutlined className="text-blue-500" />, color: 'blue' },
        { key: 'HR_MANAGER', name: 'HR Manager', icon: <RocketOutlined className="text-purple-500" />, color: 'purple' },
        { key: 'TRAINER', name: 'Trainer', icon: <TeamOutlined className="text-green-500" />, color: 'green' },
        { key: 'EMPLOYEE', name: 'Employee', icon: <UserOutlined className="text-orange-500" />, color: 'orange' },
    ];

    const modules = [
        { key: 'dashboard', name: 'Bảng điều khiển' },
        { key: 'employees', name: 'Hồ sơ nhân sự 360°' },
        { key: 'recruitment', name: 'Tuyển dụng (ATS)' },
        { key: 'onboarding', name: 'Hội nhập (Onboarding)' },
        { key: 'leave', name: 'Quản lý nghỉ phép' },
        { key: 'attendance', name: 'Chấm công & Thời gian' },
        { key: 'payroll', name: 'Lương & Phúc lợi' },
        { key: 'performance', name: 'Đánh giá hiệu suất' },
        { key: 'training', name: 'Đào tạo & Phát triển' },
        { key: 'offboarding', name: 'Nghỉ việc (Offboarding)' },
        { key: 'settings', name: 'Quản lý Phân quyền' },
    ];

    const columns = [
        {
            title: 'Module / Chức năng',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left' as const,
            width: 200,
            render: (text: string) => <Text strong>{text}</Text>
        },
        ...roles.map(role => ({
            title: (
                <Space>
                    {role.icon}
                    <span>{role.name}</span>
                </Space>
            ),
            key: role.key,
            align: 'center' as const,
            render: (_: any, record: any) => {
                // Logic demo fixed based on the RBAC proposal
                const hasAccess = (roleKey: string, moduleKey: string) => {
                    const matrix: Record<string, string[]> = {
                        SUPER_ADMIN: ['dashboard', 'employees', 'recruitment', 'onboarding', 'leave', 'attendance', 'payroll', 'performance', 'training', 'offboarding', 'settings'],
                        HR_MANAGER: ['dashboard', 'employees', 'recruitment', 'onboarding', 'leave', 'attendance', 'payroll', 'performance', 'training', 'offboarding'],
                        TRAINER: ['dashboard', 'employees', 'onboarding', 'performance', 'training'],
                        EMPLOYEE: ['dashboard', 'onboarding', 'leave', 'attendance', 'payroll', 'training', 'offboarding']
                    };
                    return matrix[roleKey]?.includes(moduleKey);
                };

                return (
                    <Switch
                        checked={hasAccess(role.key, record.key)}
                        disabled={role.key === 'SUPER_ADMIN' && record.key === 'settings'}
                        size="small"
                    />
                );
            }
        }))
    ];

    return (
        <div className="space-y-6">
            <PageHeader
                title="Quản lý Phân quyền Hệ thống"
                subtitle="Cấu hình quyền truy cập module cho từng nhóm vai trò người dùng"
            />

            <Alert
                message="Chế độ Demo"
                description="Trong bản demo này, các quyền hạn được thiết lập cố định theo ma trận RBAC đã đề xuất để minh họa logic phân quyền. Trong thực tế, Super Admin có thể bật/tắt từng module cho từng Role tại đây."
                type="info"
                showIcon
                className="mb-6"
            />

            <Card bordered={false} className="shadow-sm">
                <Table
                    dataSource={modules}
                    columns={columns}
                    pagination={false}
                    scroll={{ x: 800 }}
                    rowKey="key"
                    bordered
                />
            </Card>

            <Card title="Quản lý Người dùng & Vai trò" bordered={false} className="shadow-sm">
                <Table
                    size="small"
                    dataSource={[
                        { id: 'admin', name: 'Quản trị viên', email: 'admin@fastyear.tech', role: 'SUPER_ADMIN' },
                        { id: 'hr', name: 'Lưu Thị Hồng', email: 'hr@fastyear.tech', role: 'HR_MANAGER' },
                        { id: 'trainer', name: 'Trần Văn Huấn', email: 'trainer@fastyear.tech', role: 'TRAINER' },
                        { id: 'sales', name: 'Nguyễn Công Tứ', email: 'sales@fastyear.tech', role: 'EMPLOYEE' },
                    ]}
                    columns={[
                        { title: 'Họ tên', dataIndex: 'name' },
                        { title: 'Email', dataIndex: 'email' },
                        {
                            title: 'Vai trò',
                            dataIndex: 'role',
                            render: (role: string) => {
                                const r = roles.find(item => item.key === role);
                                return <Tag color={r?.color}>{r?.name}</Tag>;
                            }
                        },
                        { title: 'Thao tác', render: () => <Button type="link">Chỉnh sửa</Button> }
                    ]}
                    pagination={false}
                />
            </Card>
        </div>
    );
};

import { Button } from 'antd';
export default Settings;
