let readlineSync = require('readline-sync');
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert(value: number, fromUnit: string, toUnit: string) {
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;

    return value * Math.pow(10, exponent);
}


function exec() {
    const value = readlineSync.questionFloat('Digite o valor a ser convertido: \n');

    const fromUnitChoiceIndex = readlineSync.keyInSelect(units, 'Escolha um número para a unidade base:');

    const toUnitChoiceIndex = readlineSync.keyInSelect(units, 'Escolha um número para a conversão:');

    const toUnitChoice = units[toUnitChoiceIndex];
    const fromUnitChoice = units[fromUnitChoiceIndex];

    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }

    const result = convert(value, fromUnitChoice, toUnitChoice);

    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

    console.log(message);
}

exec();