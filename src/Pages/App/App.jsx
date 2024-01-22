import React from 'react'
import Button from '@/Components/Forms/Button/Button'
import Counter from '@/Components/Elements/Counter/Counter'
import './App.scss'


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onReset = this.onReset.bind(this)
  }

  onIncrement = () => {
    this.setState( ({count}) => ({count: count + 1}))
  }

  onDecrement = () => {
    this.setState( ({count}) => ({count: count - 1}))
  }

  onReset = () => {
    this.setState( ({count}) => ({count: 0}))
  }

  render() {
    return (
      <>
        <section className='container my-5'>
          <div className='row '>
            <div className='col-12 mb-3 text-center'>
              <h1>Contador</h1>
              <div className='border border-primary rounded-3 mx-auto my-0 d-flex align-items-center justify-content-center' style={{width: '100px', height: '100px'}}>
                <Counter value={this.state.count}/>
              </div>
            </div>
  
            <div className='col-12 text-center'>
  
              <Button text='Incrementar' onClickCustom={this.onIncrement} color='primary'/>
              <Button text='Decrementar' onClickCustom={this.onDecrement} color='secondary'/>
              <Button text='Resetear' onClickCustom={this.onReset} color='success'/>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default App
