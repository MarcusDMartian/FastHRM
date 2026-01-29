
import React from 'react';
import { Row, Col, Card, Progress, Typography, Table, Tag, Badge, List, Avatar } from 'antd';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const { Title, Text } = Typography;

const radarData = [
  { subject: 'Năng suất', A: 120, fullMark: 150 },
  { subject: 'Độ tin cậy', A: 98, fullMark: 150 },
  { subject: 'Phát triển Kỹ năng', A: 86, fullMark: 150 },
  { subject: 'Tuân thủ', A: 99, fullMark: 150 },
  { subject: 'Làm việc nhóm', A: 85, fullMark: 150 },
  { subject: 'Lãnh đạo', A: 65, fullMark: 150 },
];

const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={8}>
          <Card title="Chỉ số Hiệu suất Nhóm" bordered={false} className="shadow-sm">
            <div className="text-center py-6">
              <Progress type="dashboard" percent={82} strokeColor="#52c41a" />
              <div className="mt-4">
                <Title level={4}>Tốt (8.2/10)</Title>
                <Text type="secondary">Dựa trên Đánh giá Q4</Text>
              </div>
            </div>
          </Card>

          <Card title="Phân bổ Kỹ năng" bordered={false} className="shadow-sm mt-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" fontSize={12} />
                  <Radar name="Average" dataKey="A" stroke="#1677ff" fill="#1677ff" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={16}>
          <Card title="Chỉ số hiệu suất chính (KPIs)" bordered={false} className="shadow-sm">
            <Table
              pagination={false}
              dataSource={[
                { id: 1, kpi: 'Tỷ lệ Giao hàng đúng hạn', target: '90%', actual: '88.5%', status: 'Cảnh báo' },
                { id: 2, kpi: 'Tỷ lệ Lỗi kho bãi trung bình', target: '< 1%', actual: '0.4%', status: 'Thành công' },
                { id: 3, kpi: 'Hợp đồng Sales mới', target: '40', actual: '42', status: 'Thành công' },
                { id: 4, kpi: 'Chỉ số hài lòng khách hàng NPS', target: '8.0', actual: '7.8', status: 'Cảnh báo' },
              ]}
              columns={[
                { title: 'Chỉ số', dataIndex: 'kpi' },
                { title: 'Mục tiêu', dataIndex: 'target' },
                { title: 'Thực tế', dataIndex: 'actual' },
                { title: 'Trạng thái', dataIndex: 'status', render: (s) => <Tag color={s === 'Thành công' ? 'green' : 'orange'}>{s}</Tag> },
                { title: 'Xu hướng', render: () => <Progress percent={Math.random() * 100} size="small" showInfo={false} /> }
              ]}
            />
          </Card>

          <Card title="Nhân sự Xuất sắc (Xếp hạng Cao)" bordered={false} className="shadow-sm mt-4">
            <List
              itemLayout="horizontal"
              dataSource={[
                { name: 'Nguyễn Văn A', score: 4.9, role: 'Tài xế Cao cấp' },
                { name: 'Trần Thị B', score: 4.8, role: 'Quản lý Kho' },
                { name: 'Lê Văn C', score: 4.7, role: 'Trưởng nhóm CNTT' },
              ]}
              renderItem={(item) => (
                <List.Item extra={<Badge count={item.score} style={{ backgroundColor: '#52c41a' }} />}>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://picsum.photos/seed/${item.name}/100`} />}
                    title={item.name}
                    description={item.role}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Chu kỳ Đánh giá Hiệu suất" bordered={false} className="shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4">
          <div className="text-center flex-1">
            <div className="text-xs text-gray-500 uppercase font-bold mb-2">Giai đoạn 1</div>
            <div className="h-2 bg-blue-500 rounded-full mb-2"></div>
            <div className="font-bold">Thiết lập Mục tiêu</div>
            <div className="text-xs">01/01 - 15/01</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-xs text-gray-500 uppercase font-bold mb-2">Giai đoạn 2</div>
            <div className="h-2 bg-blue-500 rounded-full mb-2"></div>
            <div className="font-bold">Đánh giá Giữa năm</div>
            <div className="text-xs">01/06 - 30/06</div>
          </div>
          <div className="text-center flex-1">
            <div className="text-xs text-gray-500 uppercase font-bold mb-2">Giai đoạn 3</div>
            <div className="h-2 bg-gray-200 rounded-full mb-2"></div>
            <div className="font-bold">Đánh giá Năm</div>
            <div className="text-xs text-gray-400">01/12 - 31/12</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Performance;
