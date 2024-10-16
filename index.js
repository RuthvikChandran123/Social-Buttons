const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="head">Social Buttons</h1>
    <div className="buttonCont">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comm-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
