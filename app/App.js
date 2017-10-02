import React from 'react';
import styles from './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random_numbers: [],
      current_idx: 0,
      max_count: 5000
    };
    this.setCurrentIdx = this.setCurrentIdx.bind(this);
  }

  componentWillMount() {
    let ar = [];
    for (let i = 0; i < this.state.max_count; i++) {
      ar[i] = i + 1;
    }

    // randomize the array
    ar.sort(function () {
        return Math.random() - 0.5;
    });

    this.setState({
      random_numbers: ar
    });
  }

  componentDidMount() {
    setInterval(this.setCurrentIdx, 2000);
  }

  setCurrentIdx() {
    let current_idx = this.state.current_idx + 1 < this.state.max_count ? this.state.current_idx + 1 : 0;
    this.setState({
      current_idx: current_idx
    });
  }

  render() {
    return (
      <div className={styles.heading}>
        <div>Can you guess the next number in the series ??</div>
        <div className={styles.app}>
         { this.state.random_numbers[this.state.current_idx] }
        </div>
      </div>
    );
  }
}
