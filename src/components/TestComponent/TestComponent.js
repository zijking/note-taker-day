import React from 'react';
import style from './TestComponent.module.css';

class TestComponent extends React.Component {
  //втановлення значень по замовчуванню
  static defaultProps = {
    initValue: 0,
  };

  //стан.
  state = {
    value: this.props.initValue,
  };

  addValue = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  reduseValue = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <>
        <div className={style.CounterContainer}>
          <p className={style.CounterAmount}>{this.state.value}</p>
          <div className={style.CounerButtonConteiner}>
            <button onClick={this.addValue} className={style.CounterAdd}>
              +1
            </button>
            <button onClick={this.reduseValue} className={style.CounterReduce}>
              -1
            </button>
          </div>{' '}
        </div>
      </>
    );
  }
}

export default TestComponent;
