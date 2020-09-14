import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';

let workoutUrl = 'https://immense-earth-33685.herokuapp.com/workout/';

let currentWorkout = "";
class Delete extends Component {
	constructor() {
		super();
		this.state = {
			workouts: {},
			redirect: false,
		};
	}
	deleteGame() {
		fetch(`${workoutUrl}${currentWorkout.id}`, {
			method: 'DELETE',
		}).then(() => {
			this.props.readworkouts()
			this.setState({redirect: true})
		});
	}

	render() {
		currentWorkout = this.props.workouts.find((workout) => {
			return this.props.match.params.workout === workout.exercise

		})
		console.log(currentWorkout);
		if (this.state.redirect) {
			return <Redirect to='/'></Redirect>;
		}
		return (
			
			<div>
				<Button
					variant='outline-danger'
					className='btn'
					onClick={(event) => {
						this.deleteGame(event);
					}}>
					Delete
				</Button>
			</div>
		);
	}
}

export default Delete;
