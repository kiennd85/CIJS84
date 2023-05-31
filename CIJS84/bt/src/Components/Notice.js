const Notice = ({ content, show }) => {
  const styleNotice = { fontSize: '0.8rem', fontStyle: 'italic', paddingBottom: '10px', color: 'blue' };

  return <div style={{ ...styleNotice, visibility: show == false ? 'hidden' : 'visible' }}>{content}</div>;
};

export default Notice;
