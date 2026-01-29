import React, { useState, useMemo, useEffect } from 'react';
import { Card, Row, Col, Statistic, Table, Typography, Select, Tag, Button, Empty, Divider, Space } from 'antd';
import { DollarOutlined, FileTextOutlined, DownloadOutlined, LineChartOutlined, PrinterOutlined } from '@ant-design/icons';
import { useAuthStore } from '../store/authStore';
import { usePayrollStore, PayrollRecord } from '../store/payrollStore';
import { useEmployeeStore } from '../store/employeeStore';
import PageHeader from '../components/PageHeader';

const { Title, Text } = Typography;

const MyPayroll: React.FC = () => {
    const { user } = useAuthStore();
    const { employees } = useEmployeeStore();
    const { records, getPersonalHistory, generateMonthlyPayroll } = usePayrollStore();
    const [selectedPeriod, setSelectedPeriod] = useState<string>('2026-01');

    // Tự động generate demo data nếu chưa có
    useEffect(() => {
        if (employees.length > 0) {
            generateMonthlyPayroll('2026-01', employees);
            generateMonthlyPayroll('2025-12', employees);
            generateMonthlyPayroll('2025-11', employees);
        }
    }, [employees, generateMonthlyPayroll]);

    const history = useMemo(() => user ? getPersonalHistory(user.email) : [], [user, getPersonalHistory, records]);
    const currentPayslip = useMemo(() => history.find(r => r.period === selectedPeriod), [history, selectedPeriod]);

    const availablePeriods = useMemo(() => {
        return history.map(h => ({ label: `Tháng ${h.period}`, value: h.period }));
    }, [history]);

    if (!user) return <Empty description="Vui lòng đăng nhập" />;

    return (
        <div className="space-y-6">
            <PageHeader
                title="Phiếu lương của tôi"
                subtitle="Xem và quản lý thu nhập cá nhân qua các kỳ"
                extra={
                    <Space>
                        <Select
                            placeholder="Chọn kỳ lương"
                            style={{ width: 160 }}
                            options={availablePeriods}
                            value={selectedPeriod}
                            onChange={setSelectedPeriod}
                        />
                        <Button icon={<PrinterOutlined />}>Trong phiếu lương</Button>
                        <Button type="primary" icon={<DownloadOutlined />}>Tải PDF</Button>
                    </Space>
                }
            />

            {!currentPayslip ? (
                <Card className="text-center py-20 shadow-sm border-none">
                    <Empty description="Không có dữ liệu lương cho kỳ này" />
                </Card>
            ) : (
                <Row gutter={[24, 24]}>
                    <Col xs={24} lg={8}>
                        <Card bordered={false} className="shadow-sm h-full flex flex-col justify-center text-center bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                            <Statistic
                                title={<span className="text-blue-100">Thực lĩnh tháng {selectedPeriod}</span>}
                                value={currentPayslip.net}
                                suffix="VNĐ"
                                valueStyle={{ color: '#fff', fontSize: '32px', fontWeight: 'bold' }}
                            />
                            <div className="mt-4 opacity-80 text-xs">Đã thanh toán vào {currentPayslip.processedDate}</div>
                        </Card>
                    </Col>

                    <Col xs={24} lg={16}>
                        <Card title="Chi tiết Thu nhập & Khấu trừ" bordered={false} className="shadow-sm">
                            <div className="space-y-4">
                                <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
                                    <Text strong>Lương cơ bản</Text>
                                    <Text>{currentPayslip.baseSalary.toLocaleString()} VNĐ</Text>
                                </div>
                                <div className="flex justify-between items-center p-3">
                                    <Text>Lương tăng ca (OT)</Text>
                                    <Text type="success">+{currentPayslip.otPay.toLocaleString()} VNĐ</Text>
                                </div>
                                <div className="flex justify-between items-center p-3">
                                    <Text>Phụ cấp (Ăn trưa, xăng xe)</Text>
                                    <Text type="success">+{currentPayslip.allowances.toLocaleString()} VNĐ</Text>
                                </div>
                                <Divider className="my-2" />
                                <div className="flex justify-between items-center p-3 text-red-500">
                                    <Text type="danger">Bảo hiểm (10.5%)</Text>
                                    <Text type="danger">-{currentPayslip.empIns.toLocaleString()} VNĐ</Text>
                                </div>
                                <div className="flex justify-between items-center p-3 text-red-500">
                                    <Text type="danger">Thuế TNCN</Text>
                                    <Text type="danger">-{currentPayslip.pit.toLocaleString()} VNĐ</Text>
                                </div>
                                <Divider className="my-2" />
                                <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                                    <Text strong className="text-lg">TỔNG THỰC NHẬN</Text>
                                    <Text strong className="text-lg text-blue-600">{currentPayslip.net.toLocaleString()} VNĐ</Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col span={24}>
                        <Card title="Lịch sử thu nhập gần đây" bordered={false} className="shadow-sm">
                            <Table
                                dataSource={history}
                                pagination={false}
                                size="small"
                                rowKey="id"
                                columns={[
                                    { title: 'Kỳ lương', dataIndex: 'period', render: (p) => `Tháng ${p}` },
                                    { title: 'Tổng thu nhập', render: (r) => (r.baseSalary + r.otPay + r.allowances).toLocaleString() },
                                    { title: 'Khấu trừ', render: (r) => (r.empIns + r.pit).toLocaleString(), className: 'text-red-500' },
                                    { title: 'Thực nhận', dataIndex: 'net', render: (v) => <Text strong>{v.toLocaleString()}</Text> },
                                    { title: 'Trạng thái', dataIndex: 'status', render: () => <Tag color="green">Đã chuyển khoản</Tag> },
                                    { title: 'Thao tác', render: () => <Button type="link" size="small">Chi tiết</Button> }
                                ]}
                            />
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    );
};

export default MyPayroll;
