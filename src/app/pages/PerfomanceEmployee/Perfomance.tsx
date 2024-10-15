import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

// Dummy data for demonstration
const initialGoals = [
  { id: 1, title: 'Increase Sales', description: 'Increase sales by 20% in Q4', progress: 60 },
  { id: 2, title: 'Improve Customer Satisfaction', description: 'Achieve a customer satisfaction score of 90%', progress: 80 }
];

const FeedbackForm: React.FC<{ onSubmit: (feedback: string) => void }> = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(feedback);
    setFeedback('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="feedback">
        <Form.Label>Submit Feedback</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Feedback
      </Button>
    </Form>
  );
};

const GoalCard: React.FC<{ goal: { title: string; description: string; progress: number } }> = ({ goal }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{goal.title}</Card.Title>
      <Card.Text>{goal.description}</Card.Text>
      <Card.Text>Progress: {goal.progress}%</Card.Text>
    </Card.Body>
  </Card>
);

const PerformancePage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<string[]>([]);

  const handleFeedbackSubmit = (feedback: string) => {
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h2>Performance Goals</h2>
          {initialGoals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </Col>
        <Col md={4}>
          <h2>Submit Feedback</h2>
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
          <h3>Feedback Received</h3>
          <ul>
            {feedbacks.map((feedback, index) => (
              <li key={index}>{feedback}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PerformancePage;
