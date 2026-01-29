
import React, { useState } from 'react';
import { Layout, Menu, Typography, ConfigProvider, Avatar, Dropdown, Space, Badge } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    SolutionOutlined,
    ClockCircleOutlined,
    DollarOutlined,
    RocketOutlined,
    AuditOutlined,
    LogoutOutlined,
    BellOutlined,
    SettingOutlined,
    LineChartOutlined,
    CalendarOutlined,
    FileTextOutlined
} from '@ant-design/icons';
import viVN from 'antd/locale/vi_VN';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';
import { useAuthStore } from '../store/authStore';

dayjs.locale('vi');

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

interface MainLayoutProps {
    children: React.ReactNode;
    selectedKey: string;
    onMenuClick: (key: string) => void;
}

const menuItems = [
    { key: 'dashboard', icon: <DashboardOutlined />, label: 'Bảng điều khiển' },
    { key: 'employees', icon: <UserOutlined />, label: 'Hồ sơ nhân sự 360°' },
    { key: 'recruitment', icon: <SolutionOutlined />, label: 'Tuyển dụng (ATS)' },
    { key: 'onboarding', icon: <RocketOutlined />, label: 'Hội nhập (Onboarding)' },
    { key: 'leave', icon: <CalendarOutlined />, label: 'Quản lý nghỉ phép' },
    { key: 'attendance', icon: <ClockCircleOutlined />, label: 'Chấm công & Thời gian' },
    { key: 'payroll', icon: <DollarOutlined />, label: 'Lương & Phúc lợi' },
    { key: 'performance', icon: <LineChartOutlined />, label: 'Đánh giá hiệu suất' },
    { key: 'training', icon: <AuditOutlined />, label: 'Đào tạo & Phát triển' },
    { key: 'offboarding', icon: <LogoutOutlined />, label: 'Nghỉ việc (Offboarding)' },
    { key: 'my_payroll', icon: <FileTextOutlined />, label: 'Phiếu lương của tôi' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Quản lý Phân quyền' },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children, selectedKey, onMenuClick }) => {
    const { user, logout, canAccess } = useAuthStore();
    const [collapsed, setCollapsed] = useState(false);

    const filteredMenuItems = menuItems.filter(item => canAccess(item.key));

    return (
        <ConfigProvider
            locale={viVN}
            theme={{
                token: {
                    colorPrimary: '#1677ff',
                    borderRadius: 8,
                },
            }}
        >
            <Layout className="min-h-screen">
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                    breakpoint="lg"
                    width={240}
                >
                    <div className="p-4 flex items-center justify-center">
                        <div className="bg-white/10 p-2 rounded-lg w-full text-center">
                            <span className="text-white font-bold text-lg">
                                {collapsed ? 'HRM' : 'Fast HRM'}
                            </span>
                        </div>
                    </div>
                    <Menu
                        theme="dark"
                        selectedKeys={[selectedKey]}
                        mode="inline"
                        items={filteredMenuItems}
                        onClick={({ key }) => onMenuClick(key)}
                    />
                </Sider>
                <Layout>
                    <Header className="bg-white px-6 flex items-center justify-between shadow-sm sticky top-0 z-10 h-16">
                        <Title level={4} style={{ margin: 0 }} className="capitalize">
                            {menuItems.find(i => i.key === selectedKey)?.label}
                        </Title>
                        <Space size="middle">
                            <Badge count={5}>
                                <BellOutlined className="text-xl cursor-pointer hover:text-blue-500" />
                            </Badge>
                            <SettingOutlined className="text-xl cursor-pointer hover:text-blue-500" />
                            <Dropdown menu={{
                                items: [
                                    { key: 'profile', label: 'Hồ sơ của tôi' },
                                    { key: 'logout', label: 'Đăng xuất', danger: true, onClick: logout },
                                ]
                            }}>
                                <Space className="cursor-pointer">
                                    <Avatar src={user?.avatar || "https://picsum.photos/seed/admin/100"} />
                                    <div className="flex flex-col text-left">
                                        <span className="font-medium hidden sm:inline leading-tight">{user?.name || 'Quản trị viên'}</span>
                                        <span className="text-[10px] text-gray-400 hidden sm:inline">{user?.role} - {user?.department}</span>
                                    </div>
                                </Space>
                            </Dropdown>
                        </Space>
                    </Header>
                    <Content className="m-4 lg:m-6 overflow-x-hidden">
                        <div className="min-h-[calc(100vh-120px)]">
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default MainLayout;
