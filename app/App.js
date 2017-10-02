import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random_numbers: [],
      max_count: 5000,
      display_value: null
    };
    this.findRandomNumber = this.findRandomNumber.bind(this);
  }

  componentWillMount() {
    this.initializeList();
    setInterval(this.findRandomNumber, 2000);
  }

  findRandomNumber() {
    if (!this.state.random_numbers.length) {
      this.initializeList();
    } else {
      let idx = Math.floor(Math.random() * this.state.random_numbers.length);
      this.setState({
        display_value: this.state.random_numbers[idx]
      }, () => {
        let random_numbers = this.state.random_numbers;
        random_numbers.splice(idx, 1);
        this.setState({
          random_numbers: random_numbers
        });
      })
    }
  }

  initializeList() {
    let initialDisplayValue = Math.floor(Math.random() * this.state.max_count) + 1;
    this.setState({
      display_value: initialDisplayValue
    });
    let random_numbers = [];
    for (let i = 0; i < this.state.max_count; i++) {
      if (i === initialDisplayValue - 1) {
        continue;
      }
      random_numbers.push(i+1);
    }
    this.setState({
      random_numbers: random_numbers
    })
  }


  render() {
    return (
      <div className={styles.heading}>
        <div>Can you guess the next number in the series ??</div>
        <div className={styles.app}>
         { this.state.display_value }
        </div>
      </div>
    );
  }
}
