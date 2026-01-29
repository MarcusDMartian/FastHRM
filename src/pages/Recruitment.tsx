import React, { useState } from 'react';
import { Card, Tag, Avatar, Button, Space, Typography, Row, Col, Badge, Input, Select, Rate, Empty } from 'antd';
import { PlusOutlined, SearchOutlined, FilterOutlined, CalendarOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';
import { useRecruitmentStore } from '../store/recruitmentStore';
import { useEmployeeStore } from '../store/employeeStore';
import { EmployeeStatus } from '../types/employee';
import { Popconfirm, message } from 'antd';

const { Title, Text } = Typography;

const Recruitment: React.FC = () => {
  const { candidates, updateCandidateStage, deleteCandidate } = useRecruitmentStore();
  const { addEmployee } = useEmployeeStore();

  const stages = ['Hồ sơ', 'Phỏng vấn', 'Kỹ thuật', 'Mời việc', 'Đã tuyển'];

  const getCandidatesByStage = (stage: string) => {
    return candidates.filter(c => c.stage === stage);
  };

  return (
    <div className="space-y-6 h-full flex flex-col">
      <PageHeader
        title="Quy trình Tuyển dụng Active"
        subtitle="Đang quản lý 12 vị trí và 145 ứng viên"
        extra={
          <Space>
            <Button icon={<CalendarOutlined />}>Lịch phỏng vấn</Button>
            <Button type="primary" icon={<PlusOutlined />}>Đăng tin tuyển dụng</Button>
          </Space>
        }
      />

      <div className="bg-white p-4 rounded-lg shadow-sm flex flex-wrap gap-4 items-center">
        <Input placeholder="Tìm kiếm ứng viên..." prefix={<SearchOutlined />} className="w-64" />
        <Select defaultValue="all" className="w-48">
          <Select.Option value="all">Tất cả Phòng ban</Select.Option>
          <Select.Option value="logistics">Logistics</Select.Option>
          <Select.Option value="it">CNTT</Select.Option>
        </Select>
        <Button icon={<FilterOutlined />}>Bộ lọc khác</Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 h-full min-h-[500px]">
        {stages.map(stage => (
          <div key={stage} className="flex-shrink-0 w-80 bg-gray-100/50 p-3 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
              <Text strong className="uppercase text-xs text-gray-500 tracking-wider">
                {stage} <Badge count={getCandidatesByStage(stage).length} offset={[10, -5]} size="small" style={{ backgroundColor: '#999' }} />
              </Text>
              <Button size="small" type="text" icon={<PlusOutlined />} />
            </div>
            <div className="space-y-3">
              {getCandidatesByStage(stage).length > 0 ? (
                getCandidatesByStage(stage).map(candidate => (
                  <Card key={candidate.id} size="small" className="mb-3 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <Avatar src={candidate.avatar || `https://picsum.photos/seed/${candidate.id}/50`} />
                      <Badge status={candidate.score > 85 ? 'success' : 'warning'} />
                    </div>
                    <div className="font-bold">{candidate.fullName}</div>
                    <div className="text-xs text-gray-500 mb-2">{candidate.position}</div>

                    <Space wrap>
                      <Tag className="text-[10px]">{candidate.appliedDate}</Tag>
                      <Rate disabled defaultValue={candidate.score / 20} className="text-[10px]" />
                    </Space>

                    {candidate.stage === 'Offer' && (
                      <Popconfirm
                        title="Tuyển dụng ứng viên"
                        description="Bạn có muốn tuyển ứng viên này vào hệ thống chính thức?"
                        onConfirm={() => {
                          addEmployee({
                            id: `EMP${Math.floor(Math.random() * 1000)}`,
                            fullName: candidate.fullName,
                            role: candidate.position,
                            department: 'Kinh doanh' as any,
                            email: `${candidate.fullName.toLowerCase().replace(/ /g, '.')}@fastyear.tech`,
                            phone: '0901 234 567',
                            startDate: new Date().toISOString().split('T')[0],
                            status: EmployeeStatus.ACTIVE,
                            avatar: candidate.avatar || `https://picsum.photos/seed/${candidate.id}/100`,
                            baseSalary: 15000000
                          });
                          deleteCandidate(candidate.id);
                          message.success(`Đã tuyển thành công ${candidate.fullName}`);
                        }}
                      >
                        <Button type="primary" size="small" block className="mt-3 bg-green-500 border-green-500">
                          Tuyển dụng ngay
                        </Button>
                      </Popconfirm>
                    )}
                  </Card>
                ))
              ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={<span className="text-xs">Không có ứng viên</span>} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
