import React , {PureComponent,useState} from 'react';

class App2 extends PureComponent{
	state={
		count:0
	};
	componentDidMount(){
		document.title=this.state.count;
	};
	componentDidUpdate(){
		document.title=this.state.count;
	};
	render(){
		const {count}=this.state;
		return(
			<button
				type="button"
				onClick={()=>{this.setState({count:count + 1})}}
			>
				click({count})
			</button>
		);
	}
}

function App (props){

	const [count,setCount] = useState(()=>{
		console.log("inint count");
		return props.defaultCount || 0;
	});
    return (
      <button
      	type="button"
      	onClick={()=>{setCount(count+1)}}
      >
      click ({count})
      </button>
    );
}

export default App2;
