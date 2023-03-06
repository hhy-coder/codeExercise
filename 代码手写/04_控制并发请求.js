function withConcurrency(request, { max = 5 } = {}) {
  const queue = [];
  let running = 0;
  let currentRunning = 0;
  function newReqest(options) {
    queue.push(options);
    next();
  }

  newReqest.getCurrentRunning = function () {
    return currentRunning;
  }

  function next() {
    if (running >= max) {
      return;
    }
    if (queue.length === 0) {
      return;
    }
    running++;
    currentRunning++;
    const options = queue.shift();
    const complete = () => {
      options.complete && options.complete();
      running--;
      next();
    }
    request({
      ...options,
      complete,
    });
    next();
  }
  return newReqest;
}

// const [text, setText] = useState('Initial value');
// const textRef = useRef(text);
// const handleClick= useCallback(() => {
//      console.log(textRef.current);
//  }, []); 

//  useEffect(() => {
//      console.log('update text')
//      textRef.current = text;
//  }, [text])

function reducer(state, action) {
  switch(action.type) {
      case 'update':
          return action.preload;
      case 'childComponent':
          // 要执行的函数  
          return state;     
  }
}
export default function Index() { // 父组件
  const [state, dispatch] = useReducer(reducer, 'Initial value');

  return (
      <>
          <input value={state} onChange={(e) => dispatch({
              type: 'update', 
              preload: e.target.value
          })} />
          <ChildComponent dispatch={dispatch} />
      </>
  )
}