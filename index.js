function taxable(state, taxExempt) {
    if (state == IA && taxExempt == false){
        return "is taxable";
    }
    if (state == FL && taxExempt == true){
        return "is taxable";
    }
}

function isVehicle(hasWheels, canFly, canSwim){
    if (hasWheels == true || canFly == true || canSwim == true){
        return "is vehicle";
    }
}