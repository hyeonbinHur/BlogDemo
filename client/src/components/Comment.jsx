import ListGroup from 'react-bootstrap/ListGroup';
export default function Comment({ comment }) {
  return <ListGroup.Item>{comment.content}</ListGroup.Item>;
}
