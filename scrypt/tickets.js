window.TICKET_TYPES = {'PERMANENT': 20, 'TEMPORARY': 25, 'COMBINED': 40};

class OrderData {
    constructor(
        basics = 1,
        seniors = 1,
        type = TICKET_TYPES.PERMANENT,
        cardNumber = null
    ) {
        this.basics = basics;
        this.seniors = seniors;
        this.type = type;
        this.cardNumber = cardNumber;
    }
}

class Order {

    #data = new OrderData();

    #basicsField  = document.getElementById('basic-tickets');
    #seniorsField = document.getElementById('senior-tickets');
    #typeRadios = Array.from(document.getElementsByName('tickets__type-radio'));


    constructor(parsed = null) {
        this.#data.basics = parsed?.basics ?? 1;
        this.#data.seniors = parsed?.seniors ?? 1;
        this.#data.type = parsed?.type ?? TICKET_TYPES.PERMANENT;
        this.#data.cardNumber = parsed?.cardNumber ?? '';

        this.setTicketType(this.#data.type);
        this.#refreshBasic();
        this.#refreshSeniorField();
        this.refreshTotalPrise();
    }

    incrementSeniors() {
        this.#validateSeniorIncrementation();
        ++this.#data.seniors;
        this.#refreshSeniorField();
        this.#save();
    }

    #validateSeniorIncrementation() {
        if (this.#data.seniors > 49) {
            throw new Error('No more than 50');
        }
    }

    decrementSeniors() {
        this.#validateSeniorDecrementation();
        --this.#data.seniors;
        this.#refreshSeniorField();
        this.#save();
    }

    #validateSeniorDecrementation() {
        if (this.#data.seniors < 1) {
            throw new Error('At least 0');
        }
    }

    #refreshSeniorField() {
        this.#seniorsField.value = this.#data.seniors.toString();
        this.#seniorsField.textContent = this.#data.seniors.toString();
    }


    incrementBasics() {
        this.#validateBasicIncrementation();
        ++this.#data.basics;
        this.#refreshBasic();
        this.#save();
    }

    #validateBasicIncrementation() {
        if (this.#data.basics > 49) {
            throw new Error('No more than 50');
        }
    }

    decrementBasics() {
        this.#validateBasicDecrementation();
        --this.#data.basics;
        this.#refreshBasic();
        this.#save();
    }

    #validateBasicDecrementation() {
        if (this.#data.basics < 1) {
            throw new Error('At least 0');
        }
    }

    #refreshBasic() {
        this.#basicsField.value = this.#data.basics.toString();
        this.#basicsField.textContent = this.#data.basics.toString();
    }

    #save() {
        localStorage.setItem('order', JSON.stringify(this.#data));
    }

    setTicketType(value) {
        if (value in TICKET_TYPES) {
            this.#data.type = value;
            this.#typeRadios
                .filter(input => input.value.contains(value.toLowerCase()))
                .forEach(input => input.checked = true);
            this.#save();
        } else {
            throw new Error('Wrong Ticket Type');
        }
    }

    static load() {
        const raw = localStorage.getItem('order');
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                return new Order(parsed);
            } catch (e) {
                console.error('Error occurred trying to read data from local storage:', e);
            }
        }
        return new Order();
    }

    calculateTotalPrice() {
        return (0.5 *  this.#data.seniors + this.#data.basics) * TICKET_TYPES[this.#data.type];
    }

    refreshTotalPrise() {
        const totalPrise = this.calculateTotalPrice();
        const elem = document.getElementById('total-prise');
        elem.textContent = `Total € ${totalPrise}`;
    }
}


class TicketsFacade {

    static #order = Order.load();

    static incrementBasics() {
        try {
            this.#order.incrementBasics();
        } catch (e) {
            alert(e.message);
        }
        this.#refreshTotalPrise();
    }

    static decrementBasics() {
        try {
            this.#order.decrementBasics();
        } catch (e) {
            alert(e.message);
        }
        this.#refreshTotalPrise();
    }

    static incrementSeniors() {
        try {
            this.#order.incrementSeniors();
        } catch (e) {
            alert(e.message);
        }
        this.#refreshTotalPrise();
    }

    static decrementSeniors() {
        try {
            this.#order.decrementSeniors();
        } catch (e) {
            alert(e.message);
        }
        this.#refreshTotalPrise();
    }

    static setTicketType(type) {
        try {
            this.#order.setTicketType(type);
        } catch (e) {
            alert(e.message);
        }
        this.#refreshTotalPrise();
    }

    static refreshTotal() {
        this.#refreshTotalPrise();
    }

    static #refreshTotalPrise() {
        const totalPrise = this.#order.calculateTotalPrice();
        const elem = document.getElementById('total-prise');
        elem.textContent = `Total € ${totalPrise}`;
    }
}

window.addEventListener('load', () => {
    TicketsFacade.refreshTotal();
})