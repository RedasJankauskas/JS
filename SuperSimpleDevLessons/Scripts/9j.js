let calculation = localStorage.getItem('calculation') || '';

      displayCalculation();

      function displayCalculation(){
        let skaiciavimas=localStorage.getItem('calculation');
        document.querySelector('.calculationDisplay').innerHTML=skaiciavimas;
      }

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
      }

      // Optional: you can also create a function in order
      // to reuse this code.
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }