function Subject() {
    const subjectsArr = ['React', 'React Native', 'NodeJS'];
  return (
    <>
      <h1>Course names</h1>
      <ul>
        {subjectsArr.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </>
  );
}
export default Subject;