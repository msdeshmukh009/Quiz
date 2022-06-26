const ProgressRing = ({ currentQuestionNumber, totalNumberOfQuestion }) => {
  const styleRing = () => {
    const r = 30;
    const circleLength = 2 * Math.PI * r;
    const primaryColor = "#44B77B";

    let colored = (circleLength * currentQuestionNumber) / totalNumberOfQuestion;
    let gray = circleLength > colored ? circleLength - colored : 0;

    return {
      fill: "none",
      strokeWidth: "5",
      stroke: primaryColor,
      strokeDasharray: `${colored} ${gray}`,
    };
  };

  return (
    <svg
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: "#ffffff",
        borderRadius: "999px",
      }}
    >
      <circle
        style={{ fill: "none", strokeWidth: "5", stroke: "#F3F4FA" }}
        cx="50%"
        cy="50%"
        r="30"
      ></circle>
      <text fill="#171717" font-size="36" x="29" y="45">
        {currentQuestionNumber}
      </text>
      <text fill="lightgray" font-size="16" x="46" y="50">
        /
      </text>
      <text fill="lightgray" font-size="16" x="50" y="54">
        {totalNumberOfQuestion}
      </text>
      <circle cx="50%" cy="50%" r="30" style={styleRing()}></circle>
    </svg>
  );
};

export { ProgressRing };
