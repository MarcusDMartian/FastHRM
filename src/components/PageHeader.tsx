
import React from 'react';
import { Typography, Space } from 'antd';

const { Title, Text } = Typography;

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    extra?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, extra }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <Title level={4} style={{ margin: 0 }}>{title}</Title>
                {subtitle && <Text type="secondary">{subtitle}</Text>}
            </div>
            {extra && <Space>{extra}</Space>}
        </div>
    );
};

export default PageHeader;
