
import React, { useState, useMemo } from 'react';
import { Card, Table, Tag, Row, Col, Statistic, Button, Select, Space, Typography, Tooltip } from 'antd';
import { DollarOutlined, FileTextOutlined, InfoCircleOutlined, DownloadOutlined } from '@ant-design/icons';
import { INSURANCE_RATES } from '../constants';
import { useEmployeeStore } from '../store/employeeStore';
import { useAuthStore } from '../store/authStore';
import { usePayrollStore } from '../store/payrollStore';
import { filterPayrollData } from '../utils/securityUtils';
import { useEffect } from 'react';

const { Title, Text } = Typography;

const Payroll: React.FC = () => {
  const { user } = useAuthStore();
  const { employees } = useEmployeeStore();
  const { records, generateMonthlyPayroll } = usePayrollStore();
  const [selectedMonth, setSelectedMonth] = useState('2026-01');

  useEffect(() => {
    if (employees.length > 0) {
      generateMonthlyPayroll(selectedMonth, employees);
    }
  }, [employees, selectedMonth, generateMonthlyPayroll]);

  const rawPayrollData = useMemo(() => {
    return records.filter(r => r.period === selectedMonth);
  }, [records, selectedMonth]);

  const payrollData = useMemo(() => filterPayrollData(user, rawPayrollData), [user, rawPayrollData]);

  const totalNet = useMemo(() => payrollData.reduce((acc: number, curr: any) => acc + (curr.net || 0), 0), [payrollData]);

  const columns = [
    {
      title: 'Nhân viên',
      dataIndex: 'employeeName',
      render: (text: string, record: any) => (
        <Space>
          <Avatar size="small" src={`https://i.pravatar.cc/150?u=${record.email}`} />
          <div>
            <div className="font-medium text-xs">{text}</div>
            <div className="text-[10px] text-gray-500">{record.employeeId}</div>
          </div>
        </Space>
      )
    },
    {
      title: 'Lương cơ bản (VNĐ)',
      dataIndex: 'baseSalary',
      render: (val: number) => val.toLocaleString()
    },
    {
      title: 'Lương tăng ca',
      dataIndex: 'otPay',
      render: (val: number) => <Text type="success">{val.toLocaleString()}</Text>
    },
    {
      title: 'Bảo hiểm',
      dataIndex: 'empIns',
      render: (val: number) => <Text type="danger">-{val.toLocaleString()}</Text>
    },
    {
      title: 'Thuế TNCN',
      dataIndex: 'pit',
      render: (val: number) => <Text type="danger">-{val.toLocaleString()}</Text>
    },
    {
      title: 'Thực lĩnh',
      dataIndex: 'net',
      render: (val: number) => <Text strong className="text-emerald-600">{val.toLocaleString()}</Text>
    },
    {
      title: 'Thao tác',
      render: () => (
        <Space>
          <Tooltip title="Xem Phiếu lương">
            <Button size="small" icon={<FileTextOutlined />} />
          </Tooltip>
          <Button size="small" icon={<DownloadOutlined />} />
        </Space>
      )
    }
  ];

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tổng Thực trả"
              value={totalNet}
              prefix={<DollarOutlined />}
              suffix="VNĐ"
              valueStyle={{ color: '#3f8600' }}
            />
            <Text type="secondary" className="text-xs">Tháng: {selectedMonth}</Text>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tổng Bảo hiểm Xã hội"
              value={payrollData.reduce((a, c) => a + c.empIns, 0)}
              suffix="VNĐ"
            />
            <Text type="secondary" className="text-xs">Hạn nộp: Ngày 15 tháng sau</Text>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tổng Thuế TNCN"
              value={payrollData.reduce((a, c) => a + c.pit, 0)}
              suffix="VNĐ"
            />
            <Text type="secondary" className="text-xs">Tổng hợp thuế thu nhập cá nhân</Text>
          </Card>
        </Col>
      </Row>

      <Card
        title="Danh sách Bảng lương"
        bordered={false}
        className="shadow-sm"
        extra={
          <Space>
            <Select defaultValue="2026-01" style={{ width: 140 }}>
              <Select.Option value="2026-01">Tháng 01/2026</Select.Option>
              <Select.Option value="2025-12">Tháng 12/2025</Select.Option>
            </Select>
            <Button type="primary">Duyệt tất cả</Button>
            <Button icon={<DownloadOutlined />}>Xuất file Ngân hàng</Button>
          </Space>
        }
      >
        <Table
          dataSource={payrollData}
          columns={columns}
          rowKey="id"
          pagination={false}
          footer={() => (
            <div className="flex justify-between font-bold px-4">
              <span>Tổng cộng cuối cùng</span>
              <span className="text-emerald-600">{totalNet.toLocaleString()} VNĐ</span>
            </div>
          )}
        />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Checklist Tuân thủ" size="small">
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center">
              <span>Kiểm tra Lương tối thiểu Vùng 1 (&gt;2,340,000)</span>
              <Tag color="success">Đã xác minh</Tag>
            </li>
            <li className="flex justify-between items-center">
              <span>Tính toán các khoản trích đóng BHXH</span>
              <Tag color="success">Đã xác minh</Tag>
            </li>
            <li className="flex justify-between items-center">
              <span>Mức giảm trừ gia cảnh Thuế TNCN (11M)</span>
              <Tag color="success">Đã xác minh</Tag>
            </li>
          </ul>
        </Card>

        <Card title="Lịch thanh toán" size="small">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-lg text-center">
              <div className="text-blue-600 font-bold">25</div>
              <div className="text-xs uppercase">THG 1</div>
            </div>
            <div>
              <div className="font-bold">Ngày Chi trả tiếp theo</div>
              <div className="text-xs text-gray-500">Bắt đầu xử lý trong 3 ngày tới</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

import { Avatar } from 'antd';
export default Payroll;
