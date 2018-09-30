module.exports = {
    sections: {
        auto: {
            selector: 'app-auto',
            elements: {
                vin: {
                    selector: 'input[formcontrolname="ident_type_value"]'
                },
                power: {
                    selector: 'input[formcontrolname="engine_power"]'
                },
                numberPlate: {
                    selector: 'input[formcontrolname="number_plate"]'
                },
                series: {
                    selector: 'input[formcontrolname="number"]'
                },
                issueDate: {
                    selector: '#issue_date'
                },
                carMark: {
                    selector: '#car_mark'
                },
                carModel: {
                    selector: '#car_model'
                },
                carYear: {
                    selector: '#manufacturing_date'
                },
                markedItem: {
                    selector: 'div.ng-option-marked'
                },
                techPart: {
                    selector: 'div[formarrayname="credential"]'
                }
            }
        }
    }
};