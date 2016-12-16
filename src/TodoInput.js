import React from 'react';

export default class TodoInput extends React.Component{

	constructor(props){
		super(props);
		this.state = {input: ''}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.store = this.store.bind(this);
	}

	handleChange(event){
		this.setState({input: event.target.value});
	}

	handleSubmit(event){
		this.store("task1",this.state.input);
		event.preventDefault();
	}

	store(key, data){
		if(data){
			localStorage.setItem(key,data);
		}
	}

	render(){
		return (<div>
					<form onSubmit={this.handleSubmit}>
						<input name="input" type="text" onChange={this.handleChange} value={this.state.value}/>
						<button name="submit" type="submit">+</button>
					</form>
				</div>)
	}
}