import React, { useState } from 'react'
import { KTIcon } from '../../../helpers'
import styled from 'styled-components'

// StatisticsWidget5 Component
type StatisticsWidget5Props = {
  className: string
  color: string
  svgIcon: string
  iconColor: string
  title: string
  titleColor?: string
  description: string
  descriptionColor?: string
}

const StatisticsWidget5: React.FC<StatisticsWidget5Props> = ({
  className,
  color,
  svgIcon,
  iconColor,
  title,
  titleColor = 'dark',
  description,
  descriptionColor = 'muted',
}) => {
  return (
    <a href='#' className={`card bg-${color} hoverable ${className}`}>
      <div className='card-body'>
        <KTIcon iconName={svgIcon} className={`text-${iconColor} fs-3x ms-n1`} />

        <div className={`text-${titleColor} fw-bold fs-2 mb-2 mt-5`}>{title}</div>

        <div className={`fw-semibold text-${descriptionColor}`}>{description}</div>
      </div>
    </a>
  )
}

// Shared styled components for both TaskListWidget and CarePlanListWidget
const WidgetContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const WidgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1.2em;
  color: #333;
`

const Description = styled.p`
  margin: 0;
  font-size: 0.9em;
  color: #666;
`

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`

const Name = styled.span`
  font-size: 1em;
  color: #333;
`

// TaskListWidget Component
const TaskStatus = styled.span<{ status: 'pending' | 'completed' }>`
  font-size: 0.9em;
  color: ${props => (props.status === 'completed' ? 'green' : 'orange')};
`

interface Task {
  id: number
  name: string
  status: 'pending' | 'completed'
}

interface TaskListWidgetProps {
  className?: string
  color?: string
  title: string
  description: string
  tasks?: Task[]
}

const TaskListWidget: React.FC<TaskListWidgetProps> = ({
  className,
  title,
  description,
  tasks = [],
}) => {
  return (
    <WidgetContainer className={className}>
      <WidgetHeader>
        <Title>{title}</Title>
      </WidgetHeader>
      <Description>{description}</Description>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Name>{task.name}</Name>
            <TaskStatus status={task.status}>{task.status}</TaskStatus>
          </ListItem>
        ))}
      </List>
    </WidgetContainer>
  )
}

// CarePlanListWidget Component
const CarePlanStatus = styled.span<{ status: 'active' | 'inactive' }>`
  font-size: 0.9em;
  color: ${props => (props.status === 'active' ? 'green' : 'red')};
`

const ActionButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 0.9em;
  cursor: pointer;
`

interface CarePlan {
  id: number
  name: string
  status: 'active' | 'inactive'
}

interface CarePlanListWidgetProps {
  className?: string
  color?: string
  title: string
  description: string
  carePlans: CarePlan[]
  onUpdate: (id: number, name: string, status: 'active' | 'inactive') => void
  onDelete: (id: number) => void
}

const CarePlanListWidget: React.FC<CarePlanListWidgetProps> = ({
  className,
  title,
  description,
  carePlans,
  onUpdate,
  onDelete,
}) => {
  return (
    <WidgetContainer className={className}>
      <WidgetHeader>
        <Title>{title}</Title>
      </WidgetHeader>
      <Description>{description}</Description>
      <List>
        {carePlans.map(carePlan => (
          <ListItem key={carePlan.id}>
            <Name>{carePlan.name}</Name>
            <CarePlanStatus status={carePlan.status}>
              {carePlan.status}
            </CarePlanStatus>
            <ActionButton
              onClick={() =>
                onUpdate(carePlan.id, carePlan.name, carePlan.status)
              }
            >
              Edit
            </ActionButton>
            <ActionButton onClick={() => onDelete(carePlan.id)}>Delete</ActionButton>
          </ListItem>
        ))}
      </List>
    </WidgetContainer>
  )
}

// CarePlanForm Component
const FormContainer = styled.form`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const InputGroup = styled.div`
  margin-bottom: 15px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`

interface CarePlanFormProps {
  onSubmit: (name: string, status: 'active' | 'inactive') => void
}

const CarePlanForm: React.FC<CarePlanFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState<'active' | 'inactive'>('active')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, status)
    setName('')
    setStatus('active')
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor='name'>Care Plan Name</Label>
        <Input
          type='text'
          id='name'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor='status'>Status</Label>
        <Select
          id='status'
          value={status}
          onChange={e => setStatus(e.target.value as 'active' | 'inactive')}
          required
        >
          <option value='active'>Active</option>
          <option value='inactive'>Inactive</option>
        </Select>
      </InputGroup>
      <SubmitButton type='submit'>Add Care Plan</SubmitButton>
    </FormContainer>
  )
}

// Export components
export {
  StatisticsWidget5,
  TaskListWidget,
  CarePlanListWidget,
  CarePlanForm
}
