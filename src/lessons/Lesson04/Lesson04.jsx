import Button from "../../componets/Button/Button";
import Counter from "../../componets/Counter/Counter";
import "./styles.css";

function Lesson04() {
  const showMessage = () => {
    alert("Example outer function");
  };

  const showMEssageWithName = (name) => {
    alert(`Outer click - ${name}`);
  };

  return (
    <div className="lesson04-wrapper">
        <Counter />
      {/* Пример 1 - создание функции внутри onClick (анонимная функция) */}
      <Button
        name="INNER FUNC"
        onButtonClick={() => {
          alert("Example inner function");
        }}
      />
      {/* Пример 2 - создание функции вне кнопки и передача названия */}
      <Button name="OUTER FUNC" onButtonClick={showMessage} />
      {/* Пример 3 - создание функции вне кнопки и с передачей данных */}
      <Button
        name="FUNC WITH PARAM"
        onButtonClick={() => {
          showMEssageWithName("Tom");
        }}
      />
    </div>
  );
}

export default Lesson04;
