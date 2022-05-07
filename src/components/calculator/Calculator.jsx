import React from 'react'
import Button from '../buttons/Button'
import './calculator.scss'

const Calculator = () => {
  const [display, setDisplay] = React.useState('0')
  const [lastOperator, setLastOperator] = React.useState('')
  const [lastNumber, setLastNumber] = React.useState('')
  const [result, setResult] = React.useState(0)
  const [waitingForSecondNumber, setWaitingForSecondNumber] = React.useState(false)

  const handleClear = () => {
    setDisplay('0')
    setLastOperator('')
    setLastNumber('')
    setResult(0)
  }

  const handleOperator = (operator) => {
    if (display !== '0') {
      setLastOperator(operator)
      setLastNumber(display)
      setWaitingForSecondNumber(true)
    }
  }

  const handleEntry = (entry) => {
    if (waitingForSecondNumber) {
      setDisplay(entry)
      setWaitingForSecondNumber(false)
    } else {
      if (display === '0') {
        setDisplay(entry)
      } else {
        setDisplay(display + entry)
      }
    }
  }

  const handleSign = (entry) => {
    if (display !== '0') {
      if (entry === '±') {
        setDisplay(display * -1)
      } else if (entry === '.') {
        if (!display.includes('.')) {
          setDisplay(display + '.')
        }
      } else if (entry === '%') {
        setDisplay(display / 100)
      } else if (entry === '+/-') {
        setDisplay(display * -1)
      }
    }
  }

  const showResult = () => {
    let finalResult = 0
    // Only use the first 9 digits of each number
    const firstNumber = parseFloat(lastNumber.toString().substring(0, 9))
    const secondNumber = parseFloat(display.toString().substring(0, 9))
    switch (lastOperator) {
      case '+':
        finalResult = firstNumber + secondNumber
        setResult(finalResult)
        break
      case '-':
        finalResult = firstNumber - secondNumber
        setResult(finalResult)
        break
      case '*':
        finalResult = firstNumber * secondNumber
        setResult(finalResult)
        break
      case '/':
        finalResult = firstNumber / secondNumber
        setResult(finalResult)
        break
      default:
        setResult(result)
        break
    }
    // If the result is a number greater than 999999999 show error
    if (finalResult > 999999999 || finalResult < 0) {
      setDisplay('Error')
    } else {
      setDisplay(finalResult)
    }
    setLastOperator('')
    setLastNumber('')
  }

  return (
    <div className="calculator">
      <div className="calculator-display">
        {display}
      </div>
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <div className="input-keys-row">
              <Button contentText='AC' setValue={handleClear} isFunctionalButton />
              <Button contentText='±' setValue={() => handleSign('±')} isFunctionalButton />
              <Button contentText='%' setValue={() => handleSign('%')} isFunctionalButton />
              <Button contentText='÷' setValue={() => handleOperator('/')} isOperatorButton />
            </div>
            <div className="input-keys-row">
              <Button contentText='7' setValue={() => handleEntry('7')} />
              <Button contentText='8' setValue={() => handleEntry('8')} />
              <Button contentText='9' setValue={() => handleEntry('9')} />
              <Button contentText='x' setValue={() => handleOperator('*')} isOperatorButton />
            </div>
            <div className="input-keys-row">
              <Button contentText='4' setValue={() => handleEntry('4')} />
              <Button contentText='5' setValue={() => handleEntry('5')} />
              <Button contentText='6' setValue={() => handleEntry('6')} />
              <Button contentText='-' setValue={() => handleOperator('-')} isOperatorButton />
            </div>
            <div className="input-keys-row">
              <Button contentText='1' setValue={() => handleEntry('1')} />
              <Button contentText='2' setValue={() => handleEntry('2')} />
              <Button contentText='3' setValue={() => handleEntry('3')} />
              <Button contentText='+' setValue={() => handleOperator('+')} isOperatorButton />
            </div>
            <div className="input-keys-row">
              <Button contentText='0' setValue={() => handleEntry('0')} />
              <Button contentText='.' setValue={() => handleSign('.')} />
              <Button contentText='=' setValue={showResult} isOperatorButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator