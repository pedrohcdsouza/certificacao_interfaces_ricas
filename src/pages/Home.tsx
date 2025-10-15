import { Button, Space, DatePicker, version } from 'antd';
export default function Home() {
    return (
        <Space direction="vertical">
            <h1>Home Page</h1>
            <DatePicker />
            <Button type="primary">Primary Button</Button>
            <p>Ant Design version: {version}</p>
        </Space>
    );
}