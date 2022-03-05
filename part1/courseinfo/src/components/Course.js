const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ content }) => {
  return (
    <div>
      {content.map((cont) => (
        <Part key={cont.id} part={cont} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.exercises;
  }, 0);
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

export const Course = ({ courses }) => {
  return courses.map((course) => {
    return (
      <div key={course.id}>
        <Header course={course} />
        <Content content={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  });
};


