const screen = document.getElementById('screen');

    // Appends numbers or basic operators to the expression string
    function append(value) {
      screen.value += value;
    }

    // Completely resets the screen
    function clearScreen() {
      screen.value = '';
    }

    // Handles evaluation of the equation safely
    function calculate() {
      try {
        if (screen.value.trim() === '') return;
        
        // eval handles native JS operations like standard math order and ** (pow)
        let result = eval(screen.value);
        
        // Check if the result is a number or invalid (like dividing by zero)
        if (isNaN(result) || !isFinite(result)) {
          screen.value = 'Error';
        } else {
          screen.value = result;
        }
      } catch (error) {
        screen.value = 'Syntax Error';
      }
    }

    // Handles complex functions like Square Root and Percentage
    function runMath(type) {
      try {
        let currentVal = eval(screen.value);
        if (currentVal === undefined || isNaN(currentVal)) return;

        if (type === 'sqrt') {
          screen.value = Math.sqrt(currentVal);
        } else if (type === 'percent') {
          screen.value = currentVal / 100;
        }
      } catch (error) {
        screen.value = 'Syntax Error';
      }
    }