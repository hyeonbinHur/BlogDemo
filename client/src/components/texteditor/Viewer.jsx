export default function Viewer({ data }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  );
}
