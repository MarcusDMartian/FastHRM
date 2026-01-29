
import React from 'react';
import { Card, Row, Col, Statistic, Table, Tag, Button, Calendar, Badge, Space, Alert, Typography } from 'antd';
import { EnvironmentOutlined, ClockCircleOutlined, CheckCircleOutlined, WarningOutlined } from '@ant-design/icons';

const { Text } = Typography;

const Attendance: React.FC = () => {
  const getListData = (value: any) => {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [{ type: 'success', content: 'Đúng giờ' }];
        break;
      case 10:
        listData = [{ type: 'error', content: 'Muộn (15p)' }];
        break;
      case 15:
        listData = [{ type: 'warning', content: 'Yêu cầu Tăng ca' }];
        break;
      default:
    }
    return listData || [];
  };

  const dateCellRender = (value: any) => {
    const listData = getListData(value);
    return (
      <ul className="list-none p-0 m-0">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as any} text={item.content} className="text-[10px]" />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="space-y-6">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Alert
            message="Tuân thủ Luật Lao động VN"
            description="Tất cả ca làm việc được giám sát để đảm bảo tối đa 48 giờ/tuần và có thời gian nghỉ ngơi 30 phút bắt buộc."
            type="info"
            showIcon
            closable
          />
        </Col>
        <Col xs={24} lg={16}>
          <Card title="Lịch sử Chấm công" bordered={false} className="shadow-sm">
            <Calendar fullscreen={false} cellRender={dateCellRender} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Trạng thái Thời gian thực" bordered={false} className="shadow-sm space-y-4">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
              <Text type="secondary">Trạng thái hiện tại</Text>
              <div className="text-2xl font-bold text-blue-600">ĐÃ CHẤM CÔNG VÀO</div>
              <div className="text-sm">Vào lúc 08:00 AM Hôm nay</div>
              <Button type="primary" danger className="mt-4" icon={<ClockCircleOutlined />}>Chấm công Ra</Button>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center text-sm">
                <span>Thời gian làm việc hôm nay</span>
                <span className="font-mono">07:22:15</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Xác thực GPS</span>
                <Tag color="green"><CheckCircleOutlined /> Đã xác thực</Tag>
              </div>
            </div>
          </Card>

          <Card title="Ca làm việc sắp tới" bordered={false} className="shadow-sm mt-4">
            <div className="space-y-3">
              {[
                { day: 'Ngày mai', shift: 'Ca Sáng', time: '06:00 - 14:00' },
                { day: 'Thứ 4, 21/01', shift: 'Ca Đêm', time: '22:00 - 06:00' },
              ].map((s, idx) => (
                <div key={idx} className="flex items-center justify-between border-b pb-2 last:border-0">
                  <div>
                    <div className="font-medium text-sm">{s.day}</div>
                    <div className="text-xs text-gray-500">{s.time}</div>
                  </div>
                  <Tag color="cyan">{s.shift}</Tag>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      <Card title="Vi phạm Kỷ luật Lao động" bordered={false} className="shadow-sm">
        <Table
          pagination={false}
          dataSource={[
            { id: 1, name: 'Trần Văn E', dept: 'Logistics', violation: 'Vượt giờ làm tuần', value: '52h / 48h', status: 'Cảnh báo' },
            { id: 2, name: 'Bùi Thị F', dept: 'Kho bãi', violation: 'Đi muộn', value: 'Lần thứ 4 trong tháng', status: 'Gửi báo cáo' },
          ]}
          columns={[
            { title: 'Nhân viên', dataIndex: 'name' },
            { title: 'Phòng ban', dataIndex: 'dept' },
            { title: 'Loại vi phạm', dataIndex: 'violation' },
            { title: 'Chi tiết', dataIndex: 'value' },
            { title: 'Trạng thái', dataIndex: 'status', render: (s) => <Tag color={s === 'Cảnh báo' ? 'orange' : 'red'}>{s}</Tag> },
            { title: 'Thao tác', render: () => <Button type="link">Báo Quản lý</Button> }
          ]}
        />
      </Card>
    </div>
  );
};

export default Attendance;
