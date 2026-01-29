import React, { useState } from 'react';
import { Card, Row, Col, Statistic, Table, Tag, Button, Modal, Form, Select, DatePicker, Input, Space, Typography, Calendar, Badge, Alert } from 'antd';
import { CoffeeOutlined, MedicineBoxOutlined, CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';
import { useLeaveStore, LeaveRequest } from '../store/leaveStore';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;


const Leave: React.FC = () => {
    const { leaveRequests, addLeaveRequest } = useLeaveStore();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        form.validateFields().then(values => {
            const newRequest: LeaveRequest = {
                id: Date.now(),
                type: values.type === 'annual' ? 'Nghỉ phép năm' : values.type === 'sick' ? 'Nghỉ ốm' : 'Nghỉ khác',
                start: values.range[0].format('YYYY-MM-DD'),
                end: values.range[1].format('YYYY-MM-DD'),
                days: values.range[1].diff(values.range[0], 'day') + 1,
                status: 'Đang chờ',
                reason: values.reason,
            };
            addLeaveRequest(newRequest);
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const columns = [
        { title: 'Loại nghỉ phép', dataIndex: 'type', key: 'type' },
        { title: 'Thời gian', key: 'period', render: (_: any, record: LeaveRequest) => `${record.start} đến ${record.end}` },
        { title: 'Số ngày', dataIndex: 'days', key: 'days' },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color = status === 'Đã duyệt' ? 'green' : status === 'Đang chờ' ? 'gold' : 'red';
                return <Tag color={color}>{status}</Tag>;
            }
        },
        { title: 'Lý do', dataIndex: 'reason', key: 'reason' },
    ];

    const getListData = (value: any) => {
        let listData: { type: 'success' | 'warning' | 'error' | 'processing' | 'default'; content: string }[] = [];
        const dateStr = value.format('YYYY-MM-DD');
        if (dateStr === '2026-02-10' || dateStr === '2026-02-11' || dateStr === '2026-02-12') {
            listData = [{ type: 'success', content: 'Nghỉ phép năm' }];
        }
        if (dateStr === '2026-03-05') {
            listData = [{ type: 'warning', content: 'Yêu cầu đang chờ' }];
        }
        return listData;
    };

    const dateCellRender = (value: any) => {
        const listData = getListData(value);
        return (
            <ul className="list-none p-0">
                {listData.map((item) => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} className="text-[10px]" />
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="space-y-6">
            <PageHeader
                title="Quản lý Nghỉ phép"
                extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalVisible(true)}>Gửi yêu cầu Nghỉ phép</Button>}
            />

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={8}>
                    <Card bordered={false} className="shadow-sm">
                        <Statistic
                            title="Số dư Phép năm"
                            value={12}
                            suffix="/ 15"
                            prefix={<CoffeeOutlined className="text-blue-500 mr-2" />}
                        />
                        <Text type="secondary" className="text-xs">Hết hạn vào 31/03/2026</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card bordered={false} className="shadow-sm">
                        <Statistic
                            title="Nghỉ ốm đã dùng"
                            value={2}
                            suffix="Ngày"
                            prefix={<MedicineBoxOutlined className="text-red-500 mr-2" />}
                        />
                        <Text type="secondary" className="text-xs">Tiêu chuẩn: 5 ngày hưởng lương/năm</Text>
                    </Card>
                </Col>
                <Col xs={24} sm={8}>
                    <Card bordered={false} className="shadow-sm">
                        <Statistic
                            title="Nghỉ khác"
                            value={0}
                            suffix="Ngày"
                            prefix={<CalendarOutlined className="text-orange-500 mr-2" />}
                        />
                        <Text type="secondary" className="text-xs">Kết hôn, Tang chế, v.v.</Text>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} lg={16}>
                    <Card title="Yêu cầu & Lịch sử Nghỉ phép" bordered={false} className="shadow-sm">
                        <Table dataSource={leaveRequests} columns={columns} rowKey="id" pagination={{ pageSize: 5 }} />
                    </Card>
                </Col>
                <Col xs={24} lg={8}>
                    <Card title="Lịch Nghỉ phép" bordered={false} className="shadow-sm">
                        <Calendar fullscreen={false} cellRender={dateCellRender} />
                    </Card>
                </Col>
            </Row>

            <Modal
                title="Tạo Yêu cầu Nghỉ phép mới"
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                onOk={handleOk}
                footer={[
                    <Button key="back" onClick={() => setIsModalVisible(false)}>Hủy bỏ</Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>Gửi Yêu cầu</Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Loại nghỉ phép" name="type" rules={[{ required: true, message: 'Vui lòng chọn loại nghỉ phép!' }]}>
                        <Select placeholder="Chọn loại nghỉ phép">
                            <Option value="annual">Nghỉ phép năm</Option>
                            <Option value="sick">Nghỉ ốm</Option>
                            <Option value="marriage">Nghỉ kết hôn</Option>
                            <Option value="maternity">Nghỉ thai sản/Nam nghỉ khi vợ sinh</Option>
                            <Option value="unpaid">Nghỉ không lương</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Thời gian" name="range" rules={[{ required: true, message: 'Vui lòng chọn thời gian nghỉ!' }]}>
                        <RangePicker className="w-full" />
                    </Form.Item>
                    <Form.Item label="Lý do">
                        <Input.TextArea rows={4} placeholder="Nhập lý do nghỉ phép..." />
                    </Form.Item>
                    <Alert
                        message="Lưu ý Luật Lao động VN"
                        description="Nhân viên được hưởng 100% lương cho các ngày nghỉ kết hôn (3 ngày) và nghỉ tang chế (3 ngày cho tứ thân phụ mẫu/vợ chồng/con cái)."
                        type="info"
                        showIcon
                        className="mt-2"
                    />
                </Form>
            </Modal>
        </div>
    );
};

export default Leave;
