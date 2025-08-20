const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);  // this usecase will give empty value because the input field is empty at that time and we are trying to get the value of it.



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');


    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = 'Please enter a valid height';
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please enter a valid weight';
    }
    else {
        const bmi = (weight / ((height * height)/1000)).toFixed(2);

        if(bmi < 18.6){
            results.innerHTML = `<span>Your BMI is ${bmi} which means you are underweight </span>`;
        }else if(bmi > 18.6 && bmi <= 24.9){
            results.innerHTML = `<span>Your BMI is ${bmi} which means you have normal weight</span>`;
        }else{
            results.innerHTML = `<span>Your BMI is ${bmi} which means you are overweight</span>`;
        }
    }
}
)

