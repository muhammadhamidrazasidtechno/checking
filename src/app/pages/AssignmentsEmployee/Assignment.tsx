// src/components/AssignmentsPage.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { Table, Button, Modal, Input, Select, Form, DatePicker } from 'antd';
import 'antd/dist/reset.css'; // For Ant Design styles
import dayjs from 'dayjs';
import { StatisticsWidget5 } from '../../../_metronic/partials/widgets'; // Ensure this import is correct

const { Option } = Select;
const { RangePicker } = DatePicker;

const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const StatsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FilterSection = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const AddButton = styled(Button)`
  margin-left: 10px;
`;

const AssignmentsPage: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [assignmentData, setAssignmentData] = useState<any[]>([]);
  const [editAssignment, setEditAssignment] = useState<any>(null);
  const [form] = Form.useForm();

  const handleAddAssignment = () => {
    setIsEditing(false);
    setEditAssignment(null);
    form.resetFields();
    setVisible(true);
  };

  const handleEditAssignment = (record: any) => {
    setIsEditing(true);
    setEditAssignment(record);
    form.setFieldsValue({
      name: record.name,
      scope: record.scope,
      timeline: [dayjs(record.timeline[0]), dayjs(record.timeline[1])],
      resources: record.resources,
      performance: record.performance,
      status: record.status,
    });
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(values => {
      if (isEditing && editAssignment) {
        setAssignmentData(prevData =>
          prevData.map(item => (item.id === editAssignment.id ? { ...item, ...values } : item))
        );
      } else {
        setAssignmentData(prevData => [
          ...prevData,
          { id: Date.now(), ...values },
        ]);
      }
      setVisible(false);
    });
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    { title: 'Assignment Name', dataIndex: 'name', key: 'name' },
    { title: 'Scope', dataIndex: 'scope', key: 'scope' },
    { title: 'Timeline', dataIndex: 'timeline', key: 'timeline', render: (text: any) => text.map((date: any) => date.format('YYYY-MM-DD')).join(' to ') },
    { title: 'Resources', dataIndex: 'resources', key: 'resources' },
    { title: 'Performance Expectations', dataIndex: 'performance', key: 'performance' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Actions', key: 'actions', render: (text: any, record: any) => (
      <Button onClick={() => handleEditAssignment(record)}>Edit</Button>
    )},
  ];

  return (
    <Container>
      <Header>
        <Title>Assignments Page</Title>
        <Subtitle>Manage and track assignments effectively.</Subtitle>
      </Header>

      <FilterSection>
        <Input.Search placeholder="Search assignments" style={{ width: 200 }} />
        <Select defaultValue="All" style={{ width: 120, marginLeft: 10 }}>
          <Option value="all">All</Option>
          <Option value="pending">Pending</Option>
          <Option value="completed">Completed</Option>
        </Select>
        <AddButton type="primary" onClick={handleAddAssignment}>Add Assignment</AddButton>
      </FilterSection>

      <StatsSection>
      <div className='col-xl-6'>
        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='book'
          color='info'
          iconColor='white'
          title='Total Assignments'
          description='Overall count of assignments'
          titleColor='white'
          descriptionColor='white'
        />
        </div>
      <div className='col-xl-6'>

        <StatisticsWidget5
          className='card-xl-stretch mb-5 mb-xl-8'
          svgIcon='book-open'
          color='success'
          iconColor='white'
          title='Assignments Completed'
          description='Count of completed assignments'
          titleColor='white'
          descriptionColor='white'
        />
        </div>

      </StatsSection>

      <Table columns={columns} dataSource={assignmentData} rowKey="id" />

      <Modal
        title={isEditing ? 'Edit Assignment' : 'Add New Assignment'}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Assignment Name"
            rules={[{ required: true, message: 'Please input the assignment name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="scope"
            label="Scope"
            rules={[{ required: true, message: 'Please input the assignment scope!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="timeline"
            label="Timeline"
            rules={[{ required: true, message: 'Please select the assignment timeline!' }]}
          >
            <RangePicker />
          </Form.Item>
          <Form.Item
            name="resources"
            label="Resources"
            rules={[{ required: true, message: 'Please input the resources!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="performance"
            label="Performance Expectations"
            rules={[{ required: true, message: 'Please input performance expectations!' }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select the status!' }]}
          >
            <Select>
              <Option value="Pending">Pending</Option>
              <Option value="In Progress">In Progress</Option>
              <Option value="Completed">Completed</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Container>
  );
};

export default AssignmentsPage;
