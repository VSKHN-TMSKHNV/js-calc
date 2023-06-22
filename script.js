let calc = document.querySelector('input[type="text"]')

calc.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
data = event.target.value;
try{
    if( data == '') throw new Error ('Заполните инпут')
    if ( validate(data) === false) throw new Error('Некорректный оператор')
    // if ( data.indexOf('/') != -1 && data.match(/[0-9]+\/0/) !== null) throw new Error('Деление на ноль запрещено');
    let divide =  data.indexOf('/') != -1 && data.match(/[0-9]+\/0.01/) !== null;

    data = getValues(data)
    document.querySelector('.result').textContent=data
}catch (e){
    console.error(e)
    }
  }
})

function validate (data){
    let correct = data.match(/[0-9]+[+|-|*|\/]{1}[0-9]+/)
    if ( correct !== null) return true;
    return false
}

function getValues (data){
    let value1, value2, operator
    if ( data.indexOf('+') != -1){
        value1 = data.split('+')[0];
        value2 = data.split('+')[1];
        return `${value1} + ${value2} = ${+value1 + +value2}`
    }else if (data.indexOf('-') != -1){
        value1 = data.split('-')[0];
        value2 = data.split('-')[1];
        return `${value1} - ${value2} = ${+value1 - +value2}` 
    }else if (data.indexOf('*') != -1){
        value1 = data.split('*')[0];
        value2 = data.split('*')[1];
        return `${value1} * ${value2} = ${+value1 * +value2}` 
    }else if (data.indexOf('/') != -1){
        value1 = data.split('/')[0];
        value2 = data.split('/')[1];
        return `${value1} / ${value2} = ${+value1 / +value2}` 
    }
    console.log
}