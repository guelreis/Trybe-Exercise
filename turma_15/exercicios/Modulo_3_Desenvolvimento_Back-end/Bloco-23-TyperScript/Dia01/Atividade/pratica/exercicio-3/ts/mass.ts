function convert(value: number, fromUnit: string, toUnit: string) {
    const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
    const fromIndex = units.indexOf(fromUnit);
    const toIndex = units.indexOf(toUnit);
    const exponent = toIndex - fromIndex;

    console.log(value * Math.pow(10, exponent))
}

export default convert

convert(1, 'kg', 'g')