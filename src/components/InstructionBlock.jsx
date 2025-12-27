import '../styles/InstructionBlock.css';

export default function InstructionBlock({ text, image, reverse }) {

    return (
    <div className={`instrucntion-block ${reverse  ? 'reverse' : ''}`}>
      <div className="instruction-text">
        {text}
      </div>
      <div className="instruction-image">
        <img src={image} alt="Instruction" />
      </div>
    </div>
  );
}