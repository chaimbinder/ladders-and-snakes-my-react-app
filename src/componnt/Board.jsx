const Board = (props) => {
  let arr = [];
  function bildBoard(num) {
    for (let i = 1; i < num; i++) {
      arr.unshift(i);
    }
  }
  bildBoard(101);

  const style1 = {
      backgroundColor :'beige',
  };

  const style2 = {
      backgroundColor :'blue',
      position: "relative",
      "zIndex" : 2,
  };

  const style3 = {
      backgroundColor :'red',
      "zIndex" : 2,
      position: "relative"
  };

  const style4 = {
    background : "repeating-radial-gradient(red, blue 10%, red 15%)",
    "zIndex" : 2,
    position: "relative"
  };
  
  return (
    <div className="Board">
      {arr.map((index) => {
        return (
          <div className={`${index} player`} key={index} 
            style={
              index !== props.current1 && index !== props.current2 && props.current1 !== props.current2 ? style1 :
              index !== props.current1 && props.current1 !== props.current2 ? style2 : 
              index !== props.current2 && props.current1 !== props.current2 ?  style3 :
              props.current1 === index && props.current2 === index ? style4 : 
              {}
            }
          >
          </div>
        );
      })}
    </div>
  );
};

export default Board;
