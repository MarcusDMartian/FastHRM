import React from 'react';
// Added Space and Avatar to the imports
import { Row, Col, Card, Statistic, Table, Tag, Typography, Progress, Space, Avatar, Button } from 'antd';
import { UserOutlined, ArrowUpOutlined, ArrowDownOutlined, TeamOutlined, ClockCircleOutlined, DollarOutlined, ReloadOutlined } from '@ant-design/icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import PageHeader from '../components/PageHeader';
import { useEmployeeStore } from '../store/employeeStore';
import { useRecruitmentStore } from '../store/recruitmentStore';

const { Title, Text } = Typography;

const data = [
  { name: 'Jan', headcount: 240, payroll: 4500 },
  { name: 'Feb', headcount: 255, payroll: 4800 },
  { name: 'Mar', headcount: 270, payroll: 5100 },
  { name: 'Apr', headcount: 285, payroll: 5300 },
  { name: 'May', headcount: 300, payroll: 5600 },
];

const Dashboard: React.FC = () => {
  const { employees } = useEmployeeStore();
  const { candidates } = useRecruitmentStore();
  return (
    <div className="space-y-6">
      <PageHeader
        title="Bảng điều khiển Quản trị"
        subtitle="Tổng quan về hoạt động nhân sự và hiệu suất lao động"
        extra={
          <Button icon={<ReloadOutlined />}>Tải lại dữ liệu</Button>
        }
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tổng nhân sự"
              value={employees.length}
              prefix={<TeamOutlined className="text-blue-500 mr-2" />}
              suffix={<Text type="success" className="text-xs"><ArrowUpOutlined /> 4%</Text>}
            />
            <div className="mt-2">
              <Progress percent={75} size="small" status="active" />
              <Text type="secondary" className="text-xs">Định biên: 400</Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Thời gian Onboarding TB"
              value={5.2}
              precision={1}
              suffix="Ngày"
              prefix={<ClockCircleOutlined className="text-orange-500 mr-2" />}
            />
            <Text type="success" className="text-xs">Mục tiêu: 5.0 ngày</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Tỷ lệ Nghỉ việc"
              value={12.5}
              precision={1}
              suffix="%"
              prefix={<ArrowDownOutlined className="text-green-500 mr-2" />}
            />
            <Text type="secondary" className="text-xs">So với 18% TB Ngành</Text>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false} className="shadow-sm">
            <Statistic
              title="Quỹ lương chờ Duyệt"
              value={2.4}
              precision={1}
              prefix={<DollarOutlined className="text-emerald-500 mr-2" />}
              suffix="Tỷ VNĐ"
            />
            <Tag color="processing">Giai đoạn phê duyệt</Tag>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Tỷ lệ Tăng trưởng Nhân sự" bordered={false} className="shadow-sm">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip labelFormatter={(label) => `Tháng: ${label}`} />
                  <Bar dataKey="headcount" name="Số nhân sự" fill="#1677ff" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Phễu Tuyển dụng" bordered={false} className="shadow-sm">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <Text>Hồ sơ ứng tuyển</Text>
                  <Text strong>{candidates.length}</Text>
                </div>
                <Progress percent={100} showInfo={false} />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <Text>Đang Phỏng vấn</Text>
                  <Text strong>{candidates.filter(c => c.stage === 'Interview').length}</Text>
                </div>
                <Progress
                  percent={candidates.length > 0 ? (candidates.filter(c => c.stage === 'Interview').length / candidates.length) * 100 : 0}
                  strokeColor="#faad14"
                  showInfo={false}
                />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <Text>Đã Tuyển dụng (Tháng)</Text>
                  <Text strong>{candidates.filter(c => c.stage === 'Hired').length}</Text>
                </div>
                <Progress percent={20} strokeColor="#52c41a" showInfo={false} />
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Card title="Hoạt động Gần đây" bordered={false} className="shadow-sm">
        <Table
          pagination={false}
          size="middle"
          columns={[
            // Fixed: Space and Avatar now available
            { title: 'Nhân viên', dataIndex: 'name', render: (text, record: any) => <Space><Avatar size="small" src={`https://picsum.photos/seed/${record.id}/50`} />{record.name}</Space> },
            { title: 'Hành động', dataIndex: 'action' },
            { title: 'Phân hệ', dataIndex: 'module' },
            { title: 'Thời gian', dataIndex: 'time' },
            { title: 'Trạng thái', dataIndex: 'status', render: (s) => <Tag color={s === 'Xong' ? 'green' : 'gold'}>{s === 'Done' ? 'Xong' : 'Đang chờ'}</Tag> },
          ]}
          dataSource={[
            { id: 1, name: 'Nguyễn Văn A', action: 'Ghi nhận Chấm công', module: 'Chấm công', time: '08:00 AM', status: 'Done' },
            { id: 2, name: 'Lê Thị B', action: 'Gửi yêu cầu Nghỉ phép', module: 'Nghỉ phép', time: '09:15 AM', status: 'Pending' },
            { id: 3, name: 'Hệ thống HR', action: 'Đã tạo Bảng lương', module: 'Tiền lương', time: '10:00 AM', status: 'Done' },
          ]}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
