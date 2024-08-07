import Card from 'react-bootstrap/Card';

function SurahCard(props) {
  return (
    <Card className='w-100 mt-2 hoverable'>
      <Card.Body>
        <h4>{props.id}</h4>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.othertitle}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default SurahCard;