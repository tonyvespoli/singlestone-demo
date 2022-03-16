const Step = ({ stepNumber, title, body }) => (
  <div className="step fade-in">
    <div>
      <span>0{stepNumber}</span>
    </div>
    <h3>{title}</h3>
    <p>{body}</p>
  </div>
);

export default Step;
