// src/pages/ProgramManager/CarePlansManagement.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { CarePlanForm, CarePlanListWidget } from '../../../../_metronic/partials/widgets';

const ManagementContainer = styled.div`
    font-family: Arial, sans-serif;
    padding: 20px;
`;
interface CarePlan {
    id: number;
    name: string;
    status: 'active' | 'inactive';
  }
const Header = styled.header`
    background-color: #4CAF50;
    color: white;
    padding: 10px 0;
    text-align: center;
`;

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
`;

const CarePlansManagement: React.FC = () => {
    const [carePlans, setCarePlans] = useState<CarePlan[]>([
        { id: 1, name: 'Care Plan 1', status: 'active' },
        { id: 2, name: 'Care Plan 2', status: 'inactive' },
        { id: 3, name: 'Care Plan 3', status: 'active' },
    ]);
    const addCarePlan = (name: string, status: 'active' | 'inactive') => {
        const newCarePlan = { id: carePlans.length + 1, name, status };
        setCarePlans([...carePlans, newCarePlan]);
    };

    const updateCarePlan = (id: number, name: string, status: 'active' | 'inactive') => {
        const updatedCarePlans = carePlans.map(plan =>
            plan.id === id ? { ...plan, name, status } : plan
        );
        setCarePlans(updatedCarePlans);
    };

    const deleteCarePlan = (id: number) => {
        const updatedCarePlans = carePlans.filter(plan => plan.id !== id);
        setCarePlans(updatedCarePlans);
    };

    return (
        <ManagementContainer>
            <Header>
                <h1>Care Plans Management</h1>
            </Header>
            <Main>
                <div>
                    <h2>Care Plans</h2>
                    <CarePlanListWidget
                        className='card-xl-stretch mb-5 mb-xl-8'
                        color='success'
                        title='Care Plans'
                        description='Review and update care plans across programs'
                        carePlans={carePlans}
                        onUpdate={updateCarePlan}
                        onDelete={deleteCarePlan}
                    />
                </div>
                <div>
                    <h2>Add Care Plan</h2>
                    <CarePlanForm onSubmit={addCarePlan} />
                </div>
            </Main>
        </ManagementContainer>
    );
};

export default CarePlansManagement;