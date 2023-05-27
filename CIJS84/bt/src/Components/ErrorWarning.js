const ErrorWarning = ({ errorContent }) => {
  const styleWarning = { color: 'red', height: '10px', fontSize: '0.8rem', marginBottom: '8px', fontStyle: 'italic' };

  return <div style={{ ...styleWarning, visibility: errorContent == '' ? 'hidden' : 'visible' }}>{errorContent}</div>;
};

export default ErrorWarning;
