window.TICKET_TYPES = {'PERMANENT': 20, 'TEMPORARY': 25, 'COMBINED': 40};


class TicketsValidator {

    #data;
    #errors = Object.freeze({
        TICKET_TYPE: 'Wrong Ticket Type',
        SENIORS_INCREMENTATION: 'No more than 50',
        SENIORS_DECREMENTATION: 'At least 0',
        BASICS_INCREMENTATION: 'No more than 50',
        BASICS_DECREMENTATION: 'At least 0'
    });

    constructor(orderData) {
        this.#data = orderData;
    }

    ticketType() {
        if (!(this.#data.type in TICKET_TYPES)) {
            this.#interrupt(this.#errors.TICKET_TYPE);
        }
    }

    seniorsIncrementation() {
        if (this.#data.seniors > 49) {
            this.#interrupt(this.#errors.SENIORS_INCREMENTATION);
        }
    }

    seniorsDecrementation() {
        if (this.#data.seniors < 1) {
            this.#interrupt(this.#errors.SENIORS_DECREMENTATION);
        }
    }

    basicsIncrementation() {
        if (this.#data.basics > 49) {
            this.#interrupt(this.#errors.BASICS_INCREMENTATION);
        }
    }

    basicsDecrementation() {
        if (this.#data.basics < 1) {
            this.#interrupt(this.#errors.BASICS_DECREMENTATION);
        }
    }

    #interrupt(message) {
        alert(message);
        throw new Error(message);
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

    #order;

    constructor() {
        this.#order = Order.load();
    }

    incrementBasics() {
        this.#order.incrementBasics();
    }

    decrementBasics() {
        this.#order.decrementBasics();
    }

    incrementSeniors() {
        this.#order.incrementSeniors();
    }

    decrementSeniors() {
        this.#order.decrementSeniors();
    }

    setTicketType(type) {
        this.#order.setTicketType(type);
    }
}

