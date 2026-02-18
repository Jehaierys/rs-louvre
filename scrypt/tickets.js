window.TICKET_TYPES = {'PERMANENT': 20, 'TEMPORARY': 25, 'COMBINED': 40};

class Order {

    #basics;
    #seniors;
    #type;
    #cardNumber;

    constructor(parsed = null) {
        this.#basics = parsed.basics ?? 1;
        this.#seniors = parsed.seniors ?? 1;
        this.#type = parsed.type ?? TICKET_TYPES.PERMANENT;
        this.#cardNumber = parsed.cardNumber ?? '';

        this.#refreshBasicTickets();
        this.#refreshSeniorTickets();
        this.refreshTotalPrise();
    }

    incrementSeniors() {
        this.#validateSeniorIncrementation();
        ++this.#seniors;
        this.#refreshSeniorTickets();
        localStorage.setItem('order', JSON.stringify(this));
    }

    #validateSeniorIncrementation() {
        if (this.#seniors > 49) {
            throw new Error('No more than 50');
        }
    }

    decrementSeniors() {
        this.#validateSeniorDecrementation();
        --this.#seniors;
        this.#refreshSeniorTickets();
        localStorage.setItem('order', JSON.stringify(this));
    }

    #validateSeniorDecrementation() {
        if (this.#seniors < 1) {
            throw new Error('At least 0');
        }
    }

    #refreshSeniorTickets() {
        const field = document.getElementById('senior-tickets')
        field.value = this.#seniors.toString();
        field.textContent = this.#seniors.toString();
    }

    incrementBasics() {
        this.#validateBasicIncrementation();
        ++this.#basics;
        this.#refreshBasicTickets();
        localStorage.setItem('order', JSON.stringify(this));
    }

    #validateBasicIncrementation() {
        if (this.#basics > 49) {
            throw new Error('No more than 50');
        }
    }

    decrementBasics() {
        this.#validateBasicDecrementation();
        --this.#basics;
        this.#refreshBasicTickets();
        localStorage.setItem('order', JSON.stringify(this));
    }

    #validateBasicDecrementation() {
        if (this.#basics < 1) {
            throw new Error('At least 0');
        }
    }

    #refreshBasicTickets() {
        const field = document.getElementById('basic-tickets');
        field.value = this.#basics;
    }

    setTicketType(value) {
        if (value in TICKET_TYPES) {
            this.#type = value;
        } else {
            throw new Error('Wrong Ticket Type');
        }
    }

    flush() {
        const data = {
            basics: this.#basics,
            seniors: this.#seniors,
            type: this.#type,
            cardNumber: this.#cardNumber
        };
        localStorage.setItem('order', JSON.stringify(data));
    }

    static load() {
        const raw = localStorage.getItem('order');
        if (raw) {
            try {
                const parsed = JSON.parse(raw);
                return new Order(parsed);
            } catch (e) {
                console.error('Ошибка при загрузке данных:', e);
            }
        }
        return new Order(); // по умолчанию
    }

    calculateTotalPrice() {
        return (0.5 * this.#seniors + this.#basics) * TICKET_TYPES[this.#type];
    }


    refreshTotalPrise() {
        const totalPrise = this.calculateTotalPrice();
        const elem = document.getElementById('total-prise');
        elem.textContent = `Total € ${totalPrise}`;
    }

    #refreshDom() {
        const totalPrise = this.calculateTotalPrice();
        const elem = document.getElementById('total-prise');
        elem.textContent = `Total € ${totalPrise}`;
    }
}

window.addEventListener('beforeunload', (event) => {
    TicketsFacade.flushOrder();
});

class OrderDto {
}

class TicketsFacade {

    static #order = Order.load();

    static incrementBasics() {
        this.#order.incrementBasics();
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
        this.#order.incrementSeniors();
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

    static flushOrder() {
        this.#order.flush();
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