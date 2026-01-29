import React, { useState } from 'react';
import { Table, Input, Button, Space, Tag, Avatar, Modal, Descriptions, Tabs, Empty, Card, Badge, Popconfirm, Form, Select } from 'antd';
import PageHeader from '../components/PageHeader';
import { SearchOutlined, UserAddOutlined, InfoCircleOutlined, MailOutlined, PhoneOutlined, AuditOutlined } from '@ant-design/icons';
import { useEmployeeStore } from '../store/employeeStore';
import { Employee, EmployeeStatus } from '../types/employee';
import { useAuthStore } from '../store/authStore';
import { filterEmployees, canViewSensitiveInfo } from '../utils/securityUtils';
import { message } from 'antd';

const { Search } = Input;

const EmployeeDirectory: React.FC = () => {
  const { user } = useAuthStore();
  const { employees, deleteEmployee, addEmployee } = useEmployeeStore();
  const [selectedEmp, setSelectedEmp] = useState<Employee | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [form] = Form.useForm();

  const filteredData = filterEmployees(user, employees).filter(emp =>
    emp.fullName.toLowerCase().includes(searchText.toLowerCase()) ||
    emp.id.toLowerCase().includes(searchText.toLowerCase()) ||
    emp.role.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    {
      title: 'Nhân viên',
      key: 'employee',
      render: (_: any, record: Employee) => (
        <Space>
          <Avatar src={record.avatar} />
          <div>
            <div className="font-medium">{record.fullName}</div>
            <div className="text-xs text-gray-500">{record.id}</div>
          </div>
        </Space>
      ),
    },
    { title: 'Chức vụ', dataIndex: 'role', key: 'role' },
    { title: 'Phòng ban', dataIndex: 'department', key: 'department' },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: EmployeeStatus) => {
        let color = 'green';
        if (status === EmployeeStatus.PROBATION) color = 'gold';
        if (status === EmployeeStatus.SUSPENDED) color = 'red';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: 'Ngày bắt đầu', dataIndex: 'startDate', key: 'startDate' },
    {
      title: 'Thao tác',
      key: 'action',
      render: (_: any, record: Employee) => (
        <Space>
          <Button
            type="link"
            icon={<InfoCircleOutlined />}
            onClick={() => {
              setSelectedEmp(record);
              setIsModalVisible(true);
            }}
          >
            Xem hồ sơ
          </Button>
          <Popconfirm
            title="Xóa nhân viên"
            description="Bạn có chắc chắn muốn xóa nhân viên này khỏi danh sách?"
            onConfirm={() => deleteEmployee(record.id)}
            okText="Xóa"
            cancelText="Hủy"
            okButtonProps={{ danger: true }}
          >
            <Button type="link" danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <PageHeader
        title="Danh bạ Nhân sự 360°"
        subtitle={`Quản lý thông tin cho ${employees.length} nhân viên`}
        extra={
          <Space>
            <Search
              placeholder="Tìm theo tên, ID hoặc chức vụ"
              prefix={<SearchOutlined />}
              style={{ width: 300 }}
              allowClear
              onChange={e => setSearchText(e.target.value)}
            />
            <Button type="default">Bộ lọc</Button>
            <Button type="primary" icon={<UserAddOutlined />} onClick={() => setIsAddModalVisible(true)}>Thêm nhân viên mới</Button>
          </Space>
        }
      />

      <Card bordered={false} className="shadow-sm">
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title={`Hồ sơ Nhân viên 360°: ${selectedEmp?.fullName}`}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        width={1000}
        footer={[
          <Button key="close" onClick={() => setIsModalVisible(false)}>Đóng</Button>,
          <Button key="edit" type="primary">Chỉnh sửa Hồ sơ</Button>
        ]}
      >
        {selectedEmp && (
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
              <Avatar size={100} src={selectedEmp.avatar} />
              <div className="flex-1">
                <div className="text-2xl font-bold flex items-center gap-2">
                  {selectedEmp.fullName}
                  <Tag color="blue">{selectedEmp.status}</Tag>
                </div>
                <div className="text-gray-500 mb-2">{selectedEmp.role} • {selectedEmp.department}</div>
                <Space split={<div className="w-1 h-1 bg-gray-300 rounded-full" />}>
                  <Space><MailOutlined /> {selectedEmp.email}</Space>
                  <Space><PhoneOutlined /> {canViewSensitiveInfo(user, selectedEmp) ? selectedEmp.phone : '********'}</Space>
                </Space>
              </div>
            </div>

            <Tabs defaultActiveKey="info" items={[
              {
                key: 'info',
                label: 'Thông tin cá nhân',
                children: (
                  <Descriptions bordered column={{ xxl: 3, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}>
                    <Descriptions.Item label="Mã nhân viên">{selectedEmp.id}</Descriptions.Item>
                    <Descriptions.Item label="Ngày sinh">15/05/1995</Descriptions.Item>
                    <Descriptions.Item label="Giới tính">Nam</Descriptions.Item>
                    <Descriptions.Item label="Số CMND/CCCD">123456789</Descriptions.Item>
                    <Descriptions.Item label="Mã số thuế">TAX-8822</Descriptions.Item>
                    <Descriptions.Item label="Tài khoản ngân hàng">1234 5678 90 (Vietcombank)</Descriptions.Item>
                    <Descriptions.Item label="Loại hợp đồng">Chính thức</Descriptions.Item>
                    <Descriptions.Item label="Ngày gia nhập">{selectedEmp.startDate}</Descriptions.Item>
                    <Descriptions.Item label="Quản lý trực tiếp">Trần Manager</Descriptions.Item>
                  </Descriptions>
                )
              },
              {
                key: 'history',
                label: 'Quá trình Công tác',
                children: <Empty description="Thông tin công tác sẽ hiển thị tại đây" />
              },
              {
                key: 'docs',
                label: 'Hồ sơ & Văn bản',
                children: (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Hợp đồng Lao động', 'CCCD (Bản sao)', 'Giấy khám sức khỏe', 'Bằng Đại học'].map(doc => (
                      <Card key={doc} size="small" hoverable className="text-center">
                        <AuditOutlined className="text-3xl text-blue-500 mb-2" />
                        <div className="text-xs font-medium">{doc}</div>
                      </Card>
                    ))}
                  </div>
                )
              },
              {
                key: 'performance',
                label: 'Hiệu suất công việc',
                children: (
                  <div className="space-y-4">
                    <Card size="small" title="Đánh giá gần nhất (Q4 2025)">
                      <div className="flex justify-between items-center">
                        <div>Điểm: <Badge count="4.2/5.0" style={{ backgroundColor: '#52c41a' }} /></div>
                        <Tag color="green">Nhân sự Xuất sắc</Tag>
                      </div>
                    </Card>
                  </div>
                )
              }
            ]} />
          </div>
        )}
      </Modal>

      <Modal
        title="Thêm nhân viên mới"
        open={isAddModalVisible}
        onCancel={() => setIsAddModalVisible(false)}
        onOk={() => {
          form.validateFields().then(values => {
            const newEmp: Employee = {
              id: `EMP${Math.floor(Math.random() * 1000)}`,
              fullName: values.fullName,
              role: values.role,
              department: values.department,
              email: values.email,
              phone: '0901 234 567',
              startDate: '2026-02-01',
              status: EmployeeStatus.ACTIVE,
              avatar: `https://i.pravatar.cc/150?u=${values.email}`,
              baseSalary: 15000000
            };
            addEmployee(newEmp);
            setIsAddModalVisible(false);
            form.resetFields();
          });
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="fullName" label="Họ và tên" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Chức vụ" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="department" label="Phòng ban" rules={[{ required: true }]}>
            <Select>
              <Select.Option value="Logistics">Logistics</Select.Option>
              <Select.Option value="Kinh doanh">Kinh doanh</Select.Option>
              <Select.Option value="CNTT">CNTT</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeeDirectory;
