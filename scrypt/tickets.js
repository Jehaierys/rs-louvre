window.TICKET_TYPES = {'PERMANENT': 20, 'TEMPORARY': 25, 'COMBINED': 40};


class TicketsValidator {

    #data;

    constructor(orderData) {
        this.#data = orderData;
    }

    ticketType() {
        if (!(this.#data.type in TICKET_TYPES)) {
            throw new Error('Wrong Ticket Type');
        }
    }

    seniorsIncrementation() {
        if (this.#data.seniors > 49) {
            throw new Error('No more than 50');
        }
    }

    seniorsDecrementation() {
        if (this.#data.seniors < 1) {
            throw new Error('At least 0');
        }
    }

    basicsIncrementation() {
        if (this.#data.basics > 49) {
            throw new Error('No more than 50');
        }
    }

    basicsDecrementation() {
        if (this.#data.basics < 1) {
            throw new Error('At least 0');
        }
    }
}

class TicketsRefresher {

    #data;

    #totalPriceHolder;
    #basicCountHolder;
    #seniorCountHolder;

    #typesHolder;

    constructor(orderData) {

        this.#data = orderData;

        document.addEventListener('DOMContentLoaded', () => {
            this.#basicCountHolder = document.getElementById('basic-tickets');
            this.#seniorCountHolder = document.getElementById('senior-tickets');
            this.#typesHolder = Array.from(document.getElementsByClassName('tickets__type-radio'));

            this.#totalPriceHolder = document.getElementById('total-prise');
        });

        window.addEventListener('load', () => {
            this.totalPrice();
        });
    }

    totalPrice() {
        this.#totalPriceHolder.textContent = `Total € ${this.#calculateTotalPrice()}`;
        return this;
    }

    seniors() {
        this.#seniorCountHolder.value = this.#data.seniors;
        return this;
    }

    basics() {
        this.#basicCountHolder.value = this.#data.basics;
        return this;
    }

    ticketType() {
        const type = this.#data.type.toLowerCase();
        this.#typesHolder
            .filter(input => input.value.includes(type))
            .forEach(input => input.checked = true);
        return this;
    }

    #calculateTotalPrice() {
        return (0.5 *  this.#data.seniors + this.#data.basics) * TICKET_TYPES[this.#data.type];
    }
}


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
    #refresher = new TicketsRefresher(this.#data);
    #validator = new TicketsValidator(this.#data);

    constructor(parsed = null) {

        document.addEventListener('DOMContentLoaded', () => {

            this.#data.basics = parsed?.basics ?? 1;
            this.#data.seniors = parsed?.seniors ?? 1;
            this.#data.type = parsed?.type ?? TICKET_TYPES.PERMANENT;
            this.#data.cardNumber = parsed?.cardNumber ?? '';

            this.setTicketType(this.#data.type);

            this.#refresher.totalPrice().basics().seniors().ticketType();
        });
    }

    static load() {

        const raw = localStorage.getItem('order');

        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                return  new Order(parsed);
            } catch (e) {
                console.error('Error occurred trying to read data from local storage:', e);
            }
        }
        return new Order();
    }

    incrementSeniors() {
        this.#validator.seniorsIncrementation();
        ++this.#data.seniors;
        this.#refresher.seniors().totalPrice();
        this.#save();
    }

    decrementSeniors() {
        this.#validator.seniorsDecrementation();
        --this.#data.seniors;
        this.#refresher.seniors().totalPrice();
        this.#save();
    }

    incrementBasics() {
        this.#validator.basicsIncrementation();
        ++this.#data.basics;
        this.#refresher.basics().totalPrice();
        this.#save();
    }

    decrementBasics() {
        this.#validator.basicsDecrementation();
        --this.#data.basics;
        this.#refresher.basics().totalPrice();
        this.#save();
    }

    setTicketType(type) {
        this.#validator.ticketType();
        this.#data.type = type;
        this.#refresher.ticketType().totalPrice();
        this.#save();
    }

    #save() {
        localStorage.setItem('order', JSON.stringify(this.#data));
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
    }

    static decrementBasics() {
        try {
            this.#order.decrementBasics();
        } catch (e) {
            alert(e.message);
        }
    }

    static incrementSeniors() {
        try {
            this.#order.incrementSeniors();
        } catch (e) {
            alert(e.message);
        }
    }

    static decrementSeniors() {
        try {
            this.#order.decrementSeniors();
        } catch (e) {
            alert(e.message);
        }
    }

    static setTicketType(type) {
        try {
            this.#order.setTicketType(type);
        } catch (e) {
            alert(e.message);
        }
    }
}

